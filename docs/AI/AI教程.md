# AI/智能开发教程

## AI 简介

人工智能（Artificial Intelligence，AI）是计算机科学的一个分支，旨在创建能够模拟人类智能的系统。它涵盖机器学习、深度学习、自然语言处理、计算机视觉等多个领域。

### AI 的发展历程

| 阶段 | 时间 | 主要特点 |
|------|------|----------|
| 萌芽期 | 1956-1974 | 符号主义、专家系统 |
| 低谷期 | 1974-1980 | AI 寒冬 |
| 复兴期 | 1980-1993 | 神经网络复兴 |
| 现代AI | 2012-至今 | 深度学习、大数据 |

## AI 开发环境搭建

### Python 环境

```bash
# 创建虚拟环境
python -m venv ai_env
source ai_env/bin/activate  # Linux/Mac
ai_env\Scripts\activate     # Windows

# 安装核心库
pip install numpy pandas matplotlib scikit-learn tensorflow torch
```

### 常用 AI 框架

| 框架 | 用途 | 特点 |
|------|------|------|
| TensorFlow | 深度学习 | Google 开源，功能全面 |
| PyTorch | 深度学习 | Facebook 开源，动态图 |
| scikit-learn | 机器学习 | 经典算法库 |
| JAX | 数值计算 | Google 开源，自动微分 |

## 机器学习基础

### 监督学习

```python
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error

# 数据准备
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 创建模型
model = LinearRegression()

# 训练模型
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
```

### 无监督学习

```python
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs

# 生成数据
X, _ = make_blobs(n_samples=100, centers=3)

# 创建聚类模型
kmeans = KMeans(n_clusters=3)

# 训练并预测
labels = kmeans.fit_predict(X)
```

### 模型评估

```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

# 分类评估
accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)
```

## 深度学习入门

### TensorFlow 基础

```python
import tensorflow as tf

# 创建模型
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(784,)),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])

# 编译模型
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# 训练模型
model.fit(x_train, y_train, epochs=10, batch_size=32)

# 评估
loss, accuracy = model.evaluate(x_test, y_test)
```

### PyTorch 基础

```python
import torch
import torch.nn as nn
import torch.optim as optim

# 定义模型
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.fc1 = nn.Linear(784, 64)
        self.fc2 = nn.Linear(64, 10)
    
    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = self.fc2(x)
        return x

model = SimpleNN()

# 训练配置
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 训练循环
for epoch in range(10):
    optimizer.zero_grad()
    outputs = model(inputs)
    loss = criterion(outputs, labels)
    loss.backward()
    optimizer.step()
```

## 自然语言处理

### 文本预处理

```python
import re

def preprocess_text(text):
    # 转换为小写
    text = text.lower()
    # 去除特殊字符
    text = re.sub(r'[^\w\s]', '', text)
    # 分词
    tokens = text.split()
    return tokens
```

### 使用 Transformers

```python
from transformers import BertTokenizer, BertModel

# 加载预训练模型
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# 编码文本
text = "Hello, world!"
inputs = tokenizer(text, return_tensors='pt')

# 获取嵌入
outputs = model(**inputs)
embeddings = outputs.last_hidden_state
```

## 计算机视觉

### 图像处理基础

```python
import cv2
import numpy as np

# 读取图像
image = cv2.imread('image.jpg')

# 转换为灰度
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# 边缘检测
edges = cv2.Canny(gray, 100, 200)
```

### 使用 CNN

```python
import tensorflow as tf

model = tf.keras.models.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(64, activation='relu'),
    tf.keras.layers.Dense(10, activation='softmax')
])
```

## AI 工程实践

### 数据预处理

```python
import pandas as pd
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# 加载数据
df = pd.read_csv('data.csv')

# 处理缺失值
df = df.fillna(df.mean())

# 标准化数值特征
scaler = StandardScaler()
df['numeric_feature'] = scaler.fit_transform(df[['numeric_feature']])

# 独热编码分类特征
encoder = OneHotEncoder()
encoded = encoder.fit_transform(df[['category']]).toarray()
```

### 模型部署

```python
import joblib

# 保存模型
joblib.dump(model, 'model.pkl')

# 加载模型
loaded_model = joblib.load('model.pkl')

# 预测
result = loaded_model.predict(X_new)
```

## AI 伦理与安全

### 常见问题

- **偏见**: 训练数据中的偏见可能导致模型歧视
- **隐私**: 数据收集和使用需要保护用户隐私
- **透明度**: 复杂模型的决策过程难以解释
- **安全**: 对抗攻击可能误导模型

### 最佳实践

1. 确保训练数据的多样性和代表性
2. 定期评估模型的公平性
3. 采用可解释 AI 技术
4. 建立模型监控和反馈机制

---

**下一章**: [深度学习进阶](./深度学习进阶)
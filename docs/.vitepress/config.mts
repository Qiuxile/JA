import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jinan",
  description: "Jinan - 优雅的知识库 & 开发指南",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: {
      '/Python/': [
        {
          text: 'Python 教程',
          items: [
            { text: 'Python 教程', link: '/Python/Python教程' },
            { text: 'Python 基础语法', link: '/Python/Python基础语法' },
            { text: 'Python 数据类型', link: '/Python/Python数据类型' },
            { text: 'Python 函数', link: '/Python/Python函数' },
            { text: 'Python 面向对象', link: '/Python/Python面向对象' }
          ]
        }
      ],
      '/C/': [
        {
          text: 'C 语言教程',
          items: [
            { text: 'C 教程', link: '/C/C教程' },
            { text: 'C 基础语法', link: '/C/C基础语法' },
            { text: 'C 语言指针', link: '/C/C指针' },
            { text: 'C 结构体', link: '/C/C结构体' },
            { text: 'C 文件操作', link: '/C/C文件操作' }
          ]
        }
      ],
      '/C++/': [
      {
        text: 'C++基础',
        items: [
          { text: 'C++入门', link: '/C++/CppHome' },
          { text: '预备知识', link: '/C++/ch01-preparation' },
          { text: '开始学习C++', link: '/C++/ch02-getting-started' },
          { text: '处理数据', link: '/C++/ch03-data' },
          { text: '复合类型', link: '/C++/ch04-compound' },
          { text: '循环和关系表达式', link: '/C++/ch05-loop' },
          { text: '分支语句和逻辑运算符', link: '/C++/ch06-branch' },
        ]
      },
      {
        text: '函数与模块',
        items: [
          { text: '函数', link: '/C++/ch07-function' },
          { text: '函数探幽', link: '/C++/ch08-function-advanced' },
          { text: '内存模型和名称空间', link: '/C++/ch09-memory' },
        ]
      },
      {
        text: '面向对象编程',
        items: [
          { text: '对象和类', link: '/C++/ch10-class' },
          { text: '使用类', link: '/C++/ch11-class-use' },
          { text: '类和动态内存分配', link: '/C++/ch12-dynamic' },
          { text: '类继承', link: '/C++/ch13-inheritance' },
          { text: 'C++中的代码重用', link: '/C++/ch14-reuse' },
        ]
      },
      {
        text: '高级主题',
        items: [
          { text: '友元、异常和其他', link: '/C++/ch15-friends' },
          { text: 'string类和STL', link: '/C++/ch16-stl' },
          { text: '输入、输出和文件', link: '/C++/ch17-io' },
          { text: '探讨C++新标准', link: '/C++/ch18-new' },
        ]
      },
      {
        text: '附录',
        items: [
          { text: '计数系统', link: '/C++/appendix-a' },
          { text: 'C++保留字', link: '/C++/appendix-b' },
          { text: 'ASCII字符集', link: '/C++/appendix-c' },
          { text: '运算符优先级', link: '/C++/appendix-d' },
          { text: '其他运算符', link: '/C++/appendix-e' },
          { text: '模板类string', link: '/C++/appendix-f' },
          { text: 'STL方法和函数', link: '/C++/appendix-g' },
          { text: '精选读物和网上资源', link: '/C++/appendix-h' },
          { text: '转换为ISO标准C++', link: '/C++/appendix-i' },
          { text: '复习题答案', link: '/C++/appendix-j' },
        ]
      }
    ],
      '/Go/': [
        {
          text: 'Go 语言教程',
          items: [
            { text: 'Go 教程', link: '/Go/Go教程' },
            { text: 'Go 基础语法', link: '/Go/Go基础语法' },
            { text: 'Go 并发编程', link: '/Go/Go并发' },
            { text: 'Go 网络编程', link: '/Go/Go网络' }
          ]
        }
      ],
      '/Rust/': [
        {
          text: 'Rust 教程',
          items: [
            { text: 'Rust 教程', link: '/Rust/Rust教程' },
            { text: 'Rust 基础语法', link: '/Rust/Rust基础语法' },
            { text: 'Rust 所有权', link: '/Rust/Rust所有权' },
            { text: 'Rust 借用', link: '/Rust/Rust借用' },
            { text: 'Rust 生命周期', link: '/Rust/Rust生命周期' }
          ]
        }
      ],
      '/AI/': [
        {
          text: 'AI/智能开发',
          items: [
            { text: 'AI 教程', link: '/AI/AI教程' },
            { text: '机器学习', link: '/AI/机器学习' },
            { text: '深度学习', link: '/AI/深度学习' },
            { text: '自然语言处理', link: '/AI/自然语言处理' },
            { text: '计算机视觉', link: '/AI/计算机视觉' },
            { text: 'Vibe Coding工具推荐', link: '/AI/Vibe Coding工具推荐' }
          ]
        }
      ],
      '/JinanRec/': [
        {
          text: '🔥 HOT推荐',
          items: [
            { text: "Jinan推荐", link: '/JinanRec/Jinan推荐' },
            { text: 'HotKey', link: '/JinanRec/HotKey' }
          ]
        },
        {
          text: '🤖 自动化工具',
          items: [
            { text: 'HotKey', link: '/JinanRec/HotKey' }
          ]
        }
      ],
      '/': [
        {
          text: '快速开始',
          items: [
            { text: 'Python 教程', link: '/Python/Python教程' },
            { text: 'C 教程', link: '/C/C教程' },
            { text: 'C++ 教程', link: '/C++/CppHome' },
            { text: 'Go 教程', link: '/Go/Go教程' },
            { text: 'Rust 教程', link: '/Rust/Rust教程' },
            { text: 'AI/智能开发', link: '/AI/AI教程' },
            { text: 'Jinan推荐', link: '/JinanRec/Jinan推荐'}
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qiuxile/JA' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: '© 2026 Jinan'
    },

    search: {
      provider: 'local'
    }
  }
})

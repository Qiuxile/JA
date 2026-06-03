import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jinan",
  description: "Jinan - 优雅的知识库 & 开发指南",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' }],
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
          text: 'C++ 教程',
          items: [
            { text: 'C++ 教程', link: '/C++/C++教程' },
            { text: 'C++ 基础语法', link: '/C++/C++基础语法' },
            { text: 'C++ 类与对象', link: '/C++/C++类与对象' },
            { text: 'C++ 继承与多态', link: '/C++/C++继承多态' },
            { text: 'C++ STL', link: '/C++/C++STL' },
            { text: 'C++ 数据类型', link: '/C++/C++数据类型'}
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
            { text: 'C++ 教程', link: '/C++/C++教程' },
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

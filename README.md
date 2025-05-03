# MiniBlog Hexo 主题

一个简洁、美观的 Hexo 博客主题，专注于内容展示与阅读体验。

## 特点

- 响应式设计，适配各种设备
- 优雅的排版与阅读体验
- 明暗主题切换
- 简洁的侧边栏设计
- 分类与标签支持
- 文章归档页面

## 安装方法


### 安装：手动安装

```bash

git clone https://github.com/rick719520/hexo-theme-miniblog.git themes/miniblog
```

## 启用主题

编辑站点配置文件 `_config.yml`：

```yaml
theme: miniblog
```

## 配置

### 主题配置

编辑 `themes/miniblog/_config.yml` 文件：

```yaml
# 菜单配置
menu:
  首页: /
  归档: /archives
  关于: /about

# 侧边栏设置
sidebar:
  enable: true

# 头像
avatar: /images/avatar.svg

# 社交链接
social:
  github: https://github.com/yourusername
  twitter: https://twitter.com/yourusername
  # 更多社交链接...

# 页脚文本
footer_text: '&copy; 2020-2025 您的网站名称. 保留所有权利.'
```

### 站点配置

建议在站点配置文件 `_config.yml` 中添加以下配置：

```yaml
# 网站描述
description: 网站描述内容
# 网站关键词
keywords: 关键词1,关键词2,关键词3
# 作者信息
author: 您的名字
# 作者简介
bio: 简短的自我介绍内容
```

## 创建关于页面

```bash
hexo new page about
```

然后编辑 `source/about/index.md` 文件。

## License

MIT

719520.xyz

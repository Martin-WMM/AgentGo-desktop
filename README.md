<p align="center">
  <img src="src/renderer/src/assets/logo-dark.png" alt="AgentGo" width="180">
</p>

<h1 align="center">AgentGo Desktop</h1>

<p align="center">
  <a href="https://github.com/Martin-WMM/AgentGo-desktop/actions/workflows/ci.yml"><img src="https://github.com/Martin-WMM/AgentGo-desktop/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI"></a>
  <a href="https://github.com/Martin-WMM/AgentGo-desktop"><img src="https://img.shields.io/github/stars/Martin-WMM/AgentGo-desktop" alt="GitHub stars"></a>
</p>

AgentGo 的跨平台 Electron 客户端，面向 Windows、macOS 和 Linux，连接 AgentGo Backend 提供桌面端 Agent 工作流体验。

## 项目状态

项目正在初始化阶段。当前优先完善桌面壳、渲染器、预加载桥接和安全边界。

## 开发

```bash
npm install
npm run dev
```

构建和测试命令以 [`package.json`](package.json) 为准。

## 文档

架构、桌面安全、后端连接和贡献流程请查看 [AgentGo Docs](https://github.com/Martin-WMM/AgentGo-docs) 及[二次开发指南](https://github.com/Martin-WMM/AgentGo-docs/tree/main/app/src/resources/%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91)。

桌面端必须保持 `contextIsolation` 开启、关闭 renderer `nodeIntegration`，并通过类型化且有 allowlist 的 preload API 暴露系统能力。

## 许可证

本项目采用 [AgentGo Proprietary License](LICENSE)。版权所有归 Martin M. W.（王美民）所有。任何使用、修改、分发或商业用途，均须先通过 `blessedwmm@gmail.com` 获得本人书面确认授权。

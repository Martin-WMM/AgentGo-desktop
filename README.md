<p align="center">
  <img src="resources/agentgo-logo.png" alt="AgentGo Logo" width="180">
</p>

<h1 align="center">AgentGo Desktop</h1>

<p align="center">
  <a href="https://github.com/Martin-WMM/AgentGo-desktop/actions/workflows/ci.yml"><img src="https://github.com/Martin-WMM/AgentGo-desktop/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI"></a>
  <a href="https://img.shields.io/github/stars/Martin-WMM/AgentGo-desktop"><img src="https://img.shields.io/github/stars/Martin-WMM/AgentGo-desktop" alt="GitHub stars"></a>
</p>

## 1. Introduction / 简介

AgentGo Desktop is the Electron client for Windows, macOS, and Linux. It connects
to AgentGo Backend and provides a desktop agent workflow experience.

AgentGo Desktop 是面向 Windows、macOS 和 Linux 的 Electron 客户端，连接 AgentGo Backend，
提供桌面端 Agent 工作流体验。

## 2. Updates / 更新

- Desktop shell, renderer, preload bridge, and security boundaries are being established.
- Cross-platform packaging and CI checks are enabled.
- Backend integration is designed around a typed, allowlisted preload API.

- 正在完善桌面壳、渲染器、预加载桥接和安全边界。
- 已启用跨平台打包和 CI 检查。
- 后端连接通过类型化、具备 allowlist 的 preload API 实现。

## 3. Getting Started / 快速开始

Requirements / 环境要求: Node.js and pnpm。

```bash
pnpm install
pnpm dev
```

Use the scripts in [`package.json`](package.json) for build and test commands。

构建和测试命令请以 [`package.json`](package.json) 中的 scripts 为准。

## 4. Contribution / 参与贡献

Follow the protected branch flow and keep `contextIsolation` enabled. Renderer
`nodeIntegration` must remain disabled; expose system capabilities only through
the typed preload allowlist。

请遵守受保护分支流程，保持 `contextIsolation` 开启，关闭 renderer 的
`nodeIntegration`，并仅通过类型化的 preload allowlist 暴露系统能力。

See [AgentGo Docs](https://github.com/Martin-WMM/AgentGo-docs) for architecture and
secondary-development guidance。

## 5. License / 许可证

This project is governed by the [AgentGo Proprietary License](LICENSE)。All rights
belong to Martin M. W. (王美民). Any use, modification, distribution, or commercial
use requires prior written confirmation at `blessedwmm@gmail.com`。

本项目采用 [AgentGo Proprietary License](LICENSE)。所有权利归 Martin M. W.（王美民）所有。
任何使用、修改、分发或商业用途，均须先通过 `blessedwmm@gmail.com` 获得本人书面确认授权。

## Related Projects / 相关项目

- [AgentGo Backend](https://github.com/Martin-WMM/AgentGo-backend) · [AgentGo UI](https://github.com/Martin-WMM/AgentGo-UI)
- [AgentGo Docs](https://github.com/Martin-WMM/AgentGo-docs)

# AgentGo Desktop

AgentGo Desktop is the cross-platform Electron client for AgentGo. It provides the desktop entry point for Agent workflows and uses AgentGo Backend as its source of truth for users, permissions, agents, sessions, and execution data.

## Project status

The project is being initialized. The target platforms are Linux, macOS, and Windows.

## Development workflow

```text
main -> release -> feature/* or fix/* -> PR -> release -> PR -> main
```

All changes start with a GitHub Issue and must pass the required GitHub Actions checks before merging.

## Security baseline

The Electron application must keep `contextIsolation` enabled, disable renderer `nodeIntegration`, and expose system capabilities only through a typed, allowlisted preload API.

## License

See the repository license when it is added.

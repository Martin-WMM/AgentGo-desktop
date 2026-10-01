# AgentGo Desktop Agent Instructions

AgentGo Desktop is the Electron client for Windows, macOS, and Linux. Keep main-process system access separate from renderer presentation; expose local capabilities through typed, allowlisted preload APIs. AgentGo Backend owns server behavior and API contracts. Document externally visible contract changes in AgentGo Docs.

## Validation and commits

Use the pnpm scripts in package.json. Run pnpm typecheck, pnpm test, pnpm lint, and pnpm build as appropriate. Preserve Electron security boundaries and never commit secrets or build output. Follow the existing Conventional Commit validation (chore: ..., docs: ..., and other allowed types); each commit changes at most 300 lines excluding dependency lockfiles.

## Branch governance and AgentGo Project

All branch planning uses [AgentGo GitHub Project #2](https://github.com/users/Martin-WMM/projects/2).
This repository is linked to that shared Project; do not create a separate planning board.

```text
main -> release/<name> -> feature/<issue-number>-<name> or fix/<issue-number>-<name>
     feature/fix -> PR -> their source release/<name> -> PR -> main
main -> hotfix/<issue-number>-<name> -> PR -> main
```

- Create `release/*` and `hotfix/*` from an up-to-date `origin/main`.
- Create `feature/*` and `fix/*` from the intended, up-to-date `origin/release/*`, never directly from `main`.
- A PR into `release/*` must come from `feature/*` or `fix/*` created for that release.
- A PR into `main` must come from `release/*` or `hotfix/*`; feature/fix branches cannot target `main`.
- `main` and every `release/*` prohibit deletion, force pushes, and direct pushes. Change them only through PRs with all required checks passing.
- Retain `release/*` permanently, including after promotion to `main`. Never remove or bypass their deletion protection for cleanup.
- Disable repository-wide automatic head-branch deletion. Cleanup may delete only merged `feature/*`, `fix/*`, and `hotfix/*`.
- After merging a hotfix to `main`, synchronize active release branches through a project-tracked `fix/*` PR based on each affected release; do not push synchronization commits directly.

Before creating any release, feature, fix, or hotfix branch:

1. Create a repository Issue with context, expected outcome, acceptance criteria, and labels.
2. Add it to AgentGo Project #2 and set `Branch`, `Source branch`, `Target branch`, and `Status`.
3. For a release, record `Source branch = main` and `Target branch = main`; for feature/fix, record the same source and target release; for hotfix, record `main` as both.
4. Set `Status = In Progress` when work starts. Create the branch only after verifying Project membership with the authenticated GitHub CLI.
5. Add every associated PR to the same Project, populate its branch fields, and link the Issue using `Closes #<number>`.
6. Set the Issue and PR items to `Done` only when their acceptance criteria are met; retain release planning items and branches.

Each PR body must include the following machine-readable lines in addition to the repository template:

```text
Closes #<issue-number>
Project: https://github.com/users/Martin-WMM/projects/2
Source branch: <main-or-release/name>
```

The required `Branch flow policy` check validates permitted source/target branch types, issue naming and links, the declared source branch, and Git ancestry. Git does not record which checkout command created a branch; agents must verify the Project's source-branch field before creation. The PR check validates the Project declaration; actual Project membership and item fields must be verified with `gh project` during planning and review. Do not claim that a URL alone proves membership.

Use `gh project item-add 2 --owner Martin-WMM --url <issue-or-pr-url>` and `gh project item-edit` to manage items. GitHub Actions' repository token does not provide user-Project automation permissions; never copy an interactive login credential into Actions secrets. Automated Project membership checks require a separately provisioned Projects credential.

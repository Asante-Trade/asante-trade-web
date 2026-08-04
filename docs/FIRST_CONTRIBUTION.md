# Your First Contribution Checklist

Welcome to Asante Trade! This guide will walk you through making your first contribution.

## Before You Start

- [ ] Read the [Code of Conduct](../CODE_OF_CONDUCT.md)
- [ ] Read the [CONTRIBUTING.md](../CONTRIBUTING.md) guide
- [ ] Fork the repository on GitHub

## Local Setup

- [ ] Clone your fork:
  ```bash
  git clone https://github.com/YOUR_USERNAME/asante-trade-web.git
  cd asante-trade-web
  ```

- [ ] Install dependencies:
  ```bash
  pnpm install
  ```

- [ ] Start the dev server:
  ```bash
  pnpm dev
  ```

- [ ] Verify the home page loads at `http://localhost:3000`

## Understanding the Project

- [ ] Read the [README.md](../README.md) for project overview
- [ ] Browse the [ARCHITECTURE.md](./ARCHITECTURE.md) to understand the structure
- [ ] Check the [ROADMAP.md](./ROADMAP.md) to see what's planned
- [ ] Review open [issues](https://github.com/Asante-Trade/asante-trade-web/issues)

## Finding Something to Work On

- [ ] Look for issues labeled `good first issue`
- [ ] Check issues labeled `help wanted`
- [ ] Read the issue description carefully
- [ ] Comment on the issue: "I'd like to work on this"
- [ ] Wait for confirmation (avoid duplicate work)

## Making Changes

- [ ] Create a feature branch:
  ```bash
  git checkout -b feature/your-feature-name
  ```

- [ ] Make your changes (keep commits focused and meaningful)

- [ ] Run quality checks:
  ```bash
  pnpm lint       # Check code style
  pnpm format     # Format code automatically
  pnpm type-check # Check TypeScript types
  ```

- [ ] Test locally to ensure nothing broke

## Committing Your Work

- [ ] Use conventional commit format:
  ```
  feat(admin-dashboard): add user filtering
  fix(ui): correct button alignment
  docs: update setup instructions
  ```

- [ ] Commit with clear, descriptive messages:
  ```bash
  git add .
  git commit -m "feat: describe your change"
  ```

## Submitting a Pull Request

- [ ] Push to your fork:
  ```bash
  git push origin feature/your-feature-name
  ```

- [ ] Create a PR on GitHub with:
  - Clear title describing the change
  - Description of what and why
  - Reference the issue: "Closes #123"
  - Screenshot if UI changes

- [ ] PR Template (fill this in):
  ```markdown
  ## What
  Brief description of changes

  ## Why
  Why this change is needed

  ## How
  How you implemented it

  ## Testing
  How to verify it works
  ```

- [ ] Wait for code review and be responsive to feedback

## After Your PR is Merged

- [ ] Celebrate! You're a contributor now!
- [ ] Your name will be added to [CONTRIBUTORS.md](../CONTRIBUTORS.md)
- [ ] Look for the next issue to work on

## If You Get Stuck

- [ ] Check [DEVELOPMENT.md](./DEVELOPMENT.md) for help
- [ ] Search existing [issues](https://github.com/Asante-Trade/asante-trade-web/issues)
- [ ] Ask in [GitHub Discussions](https://github.com/Asante-Trade/asante-trade-web/discussions)
- [ ] Comment on the PR/issue asking for help

## Common First Contributions

**Good starter tasks:**
- [ ] Fix typos in documentation
- [ ] Add missing type annotations
- [ ] Improve error messages
- [ ] Add JSDoc comments to functions
- [ ] Create UI components from Figma designs
- [ ] Add tests for existing features
- [ ] Improve README clarity

**Avoid as first contributions:**
- Major refactoring
- Changing build tooling
- Architectural changes
- Large dependency updates

Instead, ask about these in a GitHub Discussion first!

## Code Style Quick Reference

### File Naming
```
Components: UserProfile.tsx (PascalCase)
Utilities: format-date.ts (kebab-case)
Folders: components/user-profile/ (kebab-case)
```

### TypeScript Imports
```typescript
// Local imports with @ alias
import { UserCard } from '@/components/user-card';
import { formatDate } from '@/lib/date-utils';

// External imports
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
```

### Component Template
```typescript
interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

export function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="p-4 rounded-lg bg-slate-100">
      <h2 className="font-bold">{title}</h2>
      {children}
    </div>
  );
}
```

## What We Value

- ✅ Clear communication
- ✅ Small, focused PRs
- ✅ Descriptive commit messages
- ✅ Asking questions when stuck
- ✅ Helping other contributors
- ✅ Code that is readable and maintainable
- ✅ Attention to documentation

## Recognition

After your first merge:
- Your name appears in CONTRIBUTORS.md
- You're part of the Asante Trade community
- Significant contributions are highlighted in releases
- You can participate in architecture decisions

---

**Ready to start?** Pick an issue labeled `good first issue` and make your first contribution! We're excited to have you on the team. 🙌

Have questions? Open a discussion or comment on an issue — maintainers and community are here to help!

# Contributing to Asante Trade

Thank you for your interest in contributing to Asante Trade! We welcome contributions of all kinds — code, documentation, design, bug reports, and feature ideas.

## Code of Conduct

By participating, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). We're committed to providing a welcoming and inclusive environment for everyone.

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm 8 or higher
- Git

### Development Setup

1. **Fork and clone** the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/asante-trade-web.git
   cd asante-trade-web
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Code Style

We use:
- **ESLint** for linting (Next.js config)
- **Prettier** for code formatting
- **TypeScript** for type safety

Before committing, ensure your code passes linting and type checks:

```bash
pnpm lint       # Run ESLint
pnpm format     # Run Prettier
pnpm type-check # Check TypeScript
```

### Commit Messages

Please follow conventional commit format:

```
type(scope): subject

body (if needed)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(admin-dashboard): add agent filtering by region
fix(ui): correct button hover state on mobile
docs: update deployment instructions
```

### Pull Requests

1. **Before starting**, check [open issues](https://github.com/Asante-Trade/asante-trade-web/issues) to avoid duplicate work
2. **Comment on the issue** you plan to tackle to let others know
3. **Keep PRs focused** — one feature or fix per PR
4. **Add tests** when possible
5. **Update documentation** if your changes affect user-facing behavior

#### PR Template

Include in your PR description:
- **What**: Brief description of changes
- **Why**: Reasoning or issue being fixed
- **How**: Implementation approach
- **Testing**: How to verify the changes work

### File Structure Guidelines

When adding new features:

```
apps/admin-dashboard/
├── app/
│   ├── (routes)/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/              # Shadcn/UI components
│   └── [feature]/       # Feature-specific components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
├── types/               # TypeScript types
└── styles/              # Global and component styles
```

### Component Naming

- Use PascalCase for component files and React components
- Use kebab-case for utility files
- Group related components in folders
- Prefer single-file components for simple, focused UI

### TypeScript

- Avoid `any` — use `unknown` or proper types
- Export types from components that consume them
- Use `type` for type aliases, `interface` for object shapes

## Testing

While full test coverage is being established, please:
- Test features manually in the dev server
- Verify responsive design on mobile and desktop
- Check accessibility with keyboard navigation
- Test in multiple browsers if possible

## Documentation

- **README updates**: Document new features at the project level
- **Inline comments**: Explain the "why" for complex logic
- **Type definitions**: Use JSDoc comments for public functions
- **API docs**: If adding new utilities or hooks, add usage examples

## Reporting Bugs

Use [GitHub Issues](https://github.com/Asante-Trade/asante-trade-web/issues) with:
- Clear title and description
- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS info if relevant
- Screenshots/videos if helpful

## Feature Requests

Open an [issue](https://github.com/Asante-Trade/asante-trade-web/issues) or [discussion](https://github.com/Asante-Trade/asante-trade-web/discussions) with:
- Clear use case and benefit
- How it fits into Asante Trade's goals
- Any design mockups or examples

## Security Issues

Please do **not** open public issues for security vulnerabilities. See [SECURITY.md](./SECURITY.md) for reporting procedures.

## Getting Help

- **Questions**: Use [GitHub Discussions](https://github.com/Asante-Trade/asante-trade-web/discussions)
- **Stuck on a feature?**: Drop a comment on the issue or PR — maintainers and community are here to help
- **Design advice?**: Share ideas in Discussions or as an issue

## Recognition

Contributors are recognized in:
- The `CONTRIBUTORS.md` file in the repo
- Release notes for significant contributions
- Our community channels

Thank you for making Asante Trade better! 🙏

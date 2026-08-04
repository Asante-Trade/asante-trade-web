# Architecture Guide

## Project Structure

Asante Trade is organized as a **pnpm monorepo** with multiple applications and shared packages.

```
asante-trade-web/
├── apps/
│   ├── admin-dashboard/     # Head office management portal (Next.js)
│   ├── manager-dashboard/   # Regional manager portal (planned)
│   └── customer-portal/     # Trainer/customer self-service (planned)
├── packages/
│   ├── ui/                  # Shared React UI components
│   ├── utils/               # Shared utility functions
│   ├── types/               # Shared TypeScript types
│   └── stellar/             # Stellar/Soroban integration helpers
├── public/
│   ├── logos/               # Brand assets (SVG)
│   └── images/              # Shared images
└── docs/                    # Documentation
```

## Tech Stack

### Frontend
- **React 19** - UI framework
- **Next.js 16** - Framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library (when added)

### Development
- **pnpm** - Package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Node.js 20+** - Runtime

### Planned
- **Stellar SDK** - Blockchain integration
- **Soroban** - Smart contracts
- **PostgreSQL** - Database (TBD)
- **tRPC / GraphQL** - API layer (TBD)

## Design System

### Colors (Asante Brand)
- **Gold Gradient**: #F2C766 → #C8901E
- **Cyan Accent**: #2FD1C5
- **Dark Background**: #12141C

### Typography
- **Sans-serif**: Geist (system fonts as fallback)
- **Mono**: Geist Mono (code, technical text)

## Development Patterns

### Components
- Functional components with hooks
- Co-locate styles with components
- Use TypeScript for prop types
- Document complex components with JSDoc

### State Management
- React Context for simple global state
- Server Components by default (Next.js)
- Client Components where interactivity is needed

### API
- Server Actions for mutations
- Route handlers for REST endpoints (if needed)
- Type-safe with TypeScript

### Testing
- Unit tests for utilities
- Integration tests for features
- E2E tests for critical user paths
- (Testing setup being established)

## Monorepo Conventions

### Shared Packages
- Create in `packages/` with their own `package.json`
- Export public API from `index.ts`
- Use `@asante/*` namespace

### Apps
- Create in `apps/` with their own `package.json`
- Reference shared packages via pnpm workspaces
- Each app can have its own config (Tailwind, TypeScript, etc.)

### Dependencies
- Lock major versions in `pnpm-lock.yaml`
- Use `pnpm add` to add dependencies (respects workspaces)
- Security: `pnpm audit` before releases

## Getting Started with Development

### First-time Setup
```bash
git clone https://github.com/Asante-Trade/asante-trade-web.git
cd asante-trade-web
pnpm install
pnpm dev
```

### Adding a New App
```bash
mkdir -p apps/my-app
cd apps/my-app
pnpm init
# Configure package.json, tsconfig, etc.
```

### Adding a Shared Package
```bash
mkdir -p packages/my-package
cd packages/my-package
pnpm init
# Create src/index.ts with exports
```

### Running Tests
```bash
pnpm test              # Run all tests
pnpm test:watch       # Watch mode
pnpm test:coverage    # Coverage report
```

## Deployment

### Development
- `pnpm dev` starts the dev server on localhost:3000

### Production Build
```bash
pnpm build            # Build all apps and packages
pnpm start            # Start production server
```

### Hosting
- Deploy to Vercel (recommended for Next.js apps)
- Use environment variables for secrets
- Set up CI/CD pipelines

## Security Considerations

1. **Secrets**: Never commit API keys, private keys, or credentials
2. **Dependencies**: Regular audits with `pnpm audit`
3. **Code Review**: All PRs reviewed before merge
4. **Environment Variables**: Use `.env.local` (gitignored) for local dev
5. **Blockchain**: Stellar keys handled securely (details in stellar/ package)

## Performance Optimization

- Code splitting via Next.js dynamic imports
- Image optimization with Next.js Image component
- CSS minification via Tailwind
- Bundle analysis: `pnpm build` with `ANALYZE=true`

## Questions?

Refer to the [CONTRIBUTING.md](../CONTRIBUTING.md) guide or open a [GitHub Discussion](https://github.com/Asante-Trade/asante-trade-web/discussions).

# Asante Trade

**Financial inclusion, powered by Stellar**

Asante Trade provides field agents with the tools to sell financial services — mobile wallets, remittances, savings, bill payments — to communities that lack access to traditional banking. By building on Stellar's fast, low-cost rails, we aim to make financial inclusion viable at scale across Africa.

## Overview

This monorepo holds the web dashboards and shared tooling for the Asante Trade platform:

| Dashboard | Audience | Status |
|-----------|----------|--------|
| **Admin Dashboard** | Head-office staff — agent network, compliance, product configuration | 🚧 In development |
| **Manager Dashboard** | Regional/line managers — territory performance, team oversight | 📋 Planned |
| **Trainer/Customer Portal** | Trainers and self-service customers | 📋 Planned |

The agent-facing mobile app and backend API live in separate repositories (see [Roadmap](#roadmap)).

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/Asante-Trade/asante-trade-web.git
cd asante-trade-web

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The home page will be available at `http://localhost:3000`.

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Serve production build
pnpm lint     # Run ESLint
pnpm format   # Format code with Prettier
```

## Project Structure

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
│   └── images/              # Shared images and illustrations
├── docs/                    # Project documentation
├── CONTRIBUTING.md          # Contribution guidelines
├── CODE_OF_CONDUCT.md       # Community code of conduct
├── SECURITY.md              # Security policy
├── LICENSE                  # MIT License
└── pnpm-workspace.yaml      # Monorepo configuration
```

## Tech Stack

- **Framework**: Next.js (App Router) on React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Blockchain**: Stellar / Soroban (planned integration)

## Roadmap

- [x] Repository scaffolding
- [x] Initial home page with brand guidelines
- [ ] Admin dashboard: agent network management
- [ ] Admin dashboard: compliance (KYC/AML) view
- [ ] Manager dashboard: territory performance
- [ ] Customer/trainer portal
- [ ] Shared packages (ui, utils, types)
- [ ] Stellar/Soroban integration (wallets, savings contracts)
- [ ] CI/CD pipeline (lint, type-check, test via GitHub Actions)

Have thoughts on priority? [Open an issue](https://github.com/Asante-Trade/asante-trade-web/issues) or [start a discussion](https://github.com/Asante-Trade/asante-trade-web/discussions) — roadmap input from contributors is welcome.

## Contributing

Contributions of all sizes are welcome — code, documentation, design, or triage. 

**Before you start:**
1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) for environment setup and conventions
2. Review our [Code of Conduct](./CODE_OF_CONDUCT.md)
3. Check [open issues](https://github.com/Asante-Trade/asante-trade-web/issues) for existing work
4. Comment on the issue you'd like to take before starting to avoid duplicate effort

**Good first steps:**
- Look through issues labeled `good first issue`
- Improve documentation or examples
- Fix linting or type errors
- Add tests for existing features

## Security

Found a security vulnerability? Please see [SECURITY.md](./SECURITY.md) — do not open a public issue.

## Community & Support

- **Bugs & Features**: [GitHub Issues](https://github.com/Asante-Trade/asante-trade-web/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Asante-Trade/asante-trade-web/discussions)
- **Security Issues**: See [SECURITY.md](./SECURITY.md)

## License

This project is licensed under the MIT License — see [LICENSE](./LICENSE) for details.

---

**Built with ❤️ to bring financial inclusion to Africa.**

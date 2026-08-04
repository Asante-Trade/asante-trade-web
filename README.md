# asante-trade-web
 web dashboards for Asante Trade - Admin, Manager, and Trainer portals for financial inclusion agents across Africa. Built with React.js and Stellar blockchain
About

Asante Trade provides field agents with the tools to sell financial services — mobile wallets, remittances, savings, bill payments — to communities that lack access to traditional banking. By building on Stellar's fast, low-cost rails, we aim to make financial inclusion viable at scale across Africa.

This repository holds the web dashboards:

Portal	Audience	Status
Admin dashboard	Head-office staff — agent network, compliance, product configuration	🚧 In development
Manager dashboard	Regional/line managers — territory performance, team oversight	📋 Planned
Trainer/Customer portal	Trainers and self-service customers	📋 Planned

The agent-facing mobile app and backend API live in separate repositories (see Roadmap).

Project status

This project is at an early, pre-MVP stage. The admin-dashboard app currently in this repo is a Next.js scaffold — the foundation the team is building the real admin experience on top of. If you're looking at the code expecting a finished product, you're early, and that's exactly where new contributors can have the most impact.

Because of that, please open an issue or check existing ones before starting non-trivial work, so effort isn't duplicated while the architecture is still settling.

Tech stack
Framework: Next.js (App Router) on React 19
Language: TypeScript
Styling: Tailwind CSS
Package manager: pnpm
Linting: ESLint (eslint-config-next)
Blockchain: Stellar / Soroban smart contracts (planned)
Repository structure
asante-trade-web/
├── apps/
│   └── admin-dashboard/     # Head office management portal (Next.js)
├── assets/                  # Logo and shared brand assets
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── LICENSE

As the project grows, this repo is expected to become a pnpm-workspace monorepo with additional apps (manager-dashboard, customer-portal) and shared packages/ for UI components, Stellar utilities, and types — see Roadmap. The structure above reflects what exists today, not the target architecture; check open issues for where things are headed.

Getting started
Prerequisites
Node.js 20+
pnpm 8+
bash
npm install -g pnpm
Install and run
bash
# Clone the repository
git clone https://github.com/Asante-Trade/asante-trade-web.git
cd asante-trade-web/apps/admin-dashboard

# Install dependencies
pnpm install

# Start the dev server
pnpm dev

The admin dashboard will be available at http://localhost:3000.

Available scripts

Run these from apps/admin-dashboard:

bash
pnpm dev      # Start the development server
pnpm build    # Production build
pnpm start    # Serve the production build
pnpm lint     # Run ESLint
Roadmap
 Repository scaffolding
 Admin dashboard: agent network management
 Admin dashboard: compliance (KYC/AML) view
 Manager dashboard
 Customer/trainer portal
 Shared packages/ui, packages/utils, packages/types
 Stellar/Soroban integration (wallets, savings contracts)
 CI (lint, type-check, test) via GitHub Actions

Have thoughts on priority? Open a discussion or issue — roadmap input from contributors is welcome.

Contributing

Contributions of all sizes are welcome — code, documentation, design, or triage. Start with CONTRIBUTING.md for environment setup, coding conventions, and the PR process, and please review our Code of Conduct.

Good first steps:

Look through open issues, especially any labeled good first issue.
Comment on the issue you'd like to take before starting, to avoid duplicate work.
Fork, branch, and open a PR following the guide in CONTRIBUTING.md.
Community & support
Bugs & feature requests: GitHub Issues
Security issues: please see SECURITY.md — do not open a public issue
License

This project is licensed under the MIT License.
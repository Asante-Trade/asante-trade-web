Asante Trade Web

Modern web platform for managing agent-led digital financial services across Africa.

Overview

Asante Trade Web is the frontend application for the Asante Trade platform. It provides intuitive web dashboards for administrators, regional managers, trainers, and customers to manage agent networks, monitor operations, oversee compliance, and access digital financial services.

Built with Next.js, React, TypeScript, and Tailwind CSS, the platform delivers a fast, responsive, and scalable user experience. It integrates with the Asante Trade Backend API and is designed to support future Stellar blockchain and Soroban smart contract functionality for secure, low-cost financial transactions.

The goal of Asante Trade is to empower agent networks with modern digital tools that expand financial inclusion across underserved communities in Africa.

Features
Admin Dashboard
Agent network management
User & role management
Product configuration
KYC/AML monitoring
Transaction oversight
Reporting & analytics
System configuration
Manager Dashboard (Planned)
Territory management
Team performance monitoring
Sales analytics
Agent supervision
Regional reporting
Trainer Portal (Planned)
Training resources
Agent onboarding
Progress tracking
Learning materials
Customer Portal (Planned)
Wallet management
Transaction history
Savings overview
Bill payments
Account settings
Tech Stack
Technology	Purpose
Next.js (App Router)	React Framework
React 19	UI Library
TypeScript	Programming Language
Tailwind CSS	Styling
ESLint	Code Quality
pnpm	Package Manager
Stellar SDK	Blockchain Integration (planned)
Soroban	Smart Contract Integration (planned)
Project Structure
asante-trade-web/
├── apps/
│   └── admin-dashboard/
│       ├── app/
│       ├── components/
│       ├── lib/
│       ├── public/
│       └── styles/
├── assets/
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── LICENSE
└── README.md

As the project grows, this repository will evolve into a pnpm workspace monorepo containing:

apps/
├── admin-dashboard/
├── manager-dashboard/
├── trainer-portal/
└── customer-portal/

packages/
├── ui/
├── utils/
├── types/
└── stellar/
Getting Started
Prerequisites
Node.js 20+
pnpm 8+

Install pnpm if you don't already have it:

npm install -g pnpm
Installation

Clone the repository:

git clone https://github.com/Asante-Trade/asante-trade-web.git

Navigate to the admin dashboard:

cd asante-trade-web/apps/admin-dashboard

Install dependencies:

pnpm install

Start the development server:

pnpm dev

Open your browser at:

http://localhost:3000
Available Scripts
pnpm dev      # Start development server

pnpm build    # Production build

pnpm start    # Start production server

pnpm lint     # Run ESLint
Roadmap
Admin Dashboard
Agent Network Management
Compliance (KYC/AML)
Transaction Monitoring
Reporting & Analytics
Manager Dashboard
Trainer Portal
Customer Portal
Shared UI Components
Shared Utility Packages
Shared Types
Stellar Integration
Soroban Smart Contracts
GitHub Actions CI/CD
Automated Testing
Contributing

Contributions of all sizes are welcome.

Whether you're fixing bugs, improving documentation, designing UI, or building new features, we'd love your help.

Before contributing:

Browse open issues.
Comment on the issue you'd like to work on.
Fork the repository.
Create a feature branch.
Submit a Pull Request.

Please read CONTRIBUTING.md before getting started.

Related Repositories
Repository	Description
asante-trade-backend	Backend API powering authentication, transactions, wallets, and business logic
asante-trade-mobile (Planned)	Mobile application for field agents
asante-trade-contracts (Planned)	Soroban smart contracts for blockchain-powered financial services
Security

If you discover a security vulnerability, please report it privately as described in SECURITY.md.

License

This project is licensed under the MIT License.

See the LICENSE file for more information.

Vision

Asante Trade is building the digital infrastructure that enables agent networks to deliver secure, affordable, and accessible financial services to underserved communities across Africa. By combining modern web technologies with the Stellar blockchain, the platform aims to make financial inclusion scalable, transparent, and efficient.
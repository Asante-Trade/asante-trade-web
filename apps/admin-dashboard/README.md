🌍 Mission
Asante Trade provides a complete platform for field agents to sell financial services (wallets, remittances, savings, payments) to communities that lack access to traditional banking. By leveraging Stellar's fast, low-cost blockchain, we enable financial inclusion at scale.
✨ Key Features
For Administrators

Agent Network Management - Onboard, approve, and monitor agents across region
Financial Overview - Track transaction volumes, revenue, and commission payouts
Compliance Dashboard - KYC verification, AML monitoring, and regulatory reporting
Product Management - Configure services, set pricing, and launch promotions

For Regional/Line Managers

Territory Performance - View agent rankings and customer acquisition metrics
Team Oversight - Monitor agent KPIs, approve float requests, track training
Customer Analytics - Active customers, transaction trends, retention rates

For Field Agents (Mobile App)

Customer Registration - Capture KYC details, create Stellar wallets
Transaction Processing - Cash in/out, remittances, bill payments
Commission Tracking - Real-time earnings breakdown by service type
Float Management - Track cash and digital asset balances

For Customers

Wallet Access - View balances, transaction history
Self-Service Payments - Send money, pay bills, buy airtime
Savings Accounts - Lock funds and earn interest (Soroban smart contracts)

🏗️ Architecture
asante-trade/
├── apps/
│   ├── admin-dashboard/        # Head office management portal
│   ├── manager-dashboard/      # Regional/line manager dashboard
│   ├── customer-portal/        # Customer self-service portal
│   └── mobile-agent/          # Agent mobile app (React Native)
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── utils/                  # Stellar SDK wrappers & utilities
│   └── types/                  # TypeScript type definitions
├── contracts/
│   └── soroban/               # Smart contracts (savings, loans)
└── docs/
    └── api/                    # API documentation
🚀 Quick Start
Prerequisites

Node.js 18+ or 20+ (Download)
pnpm 8+ (Package manager)

bash  npm install -g pnpm
Installation

Clone the repository

bash   git clone https://github.com/your-org/asante-trade-web.git
   cd asante-trade-web

Install dependencies

bash   pnpm install

Set up environment variables

bash   cp .env.example .env.local
Edit .env.local with your configuration:
env   # API Configuration
   NEXT_PUBLIC_API_URL=http://localhost:4000/api
   
   # Stellar Network (use testnet for development)
   NEXT_PUBLIC_STELLAR_NETWORK=testnet
   NEXT_PUBLIC_HORIZON_URL=https://horizon-testnet.stellar.org
   
   # Authentication
   AUTH_SECRET=your-secret-key-here
   
   # Feature Flags
   NEXT_PUBLIC_ENABLE_KYC=true

Start development servers

bash   pnpm dev
The apps will be available at:

Admin Dashboard: http://localhost:3000
Manager Dashboard: http://localhost:3001
Customer Portal: http://localhost:3002

📦 Tech Stack
Frontend

Framework: Next.js 14+ (App Router)
Language: TypeScript 5+
Styling: Tailwind CSS + shadcn/ui
State Management: Zustand
Forms: React Hook Form + Zod validation

Blockchain

Network: Stellar
SDK: @stellar/stellar-sdk
Smart Contracts: Soroban (Rust)
Assets: XLM, USDC, custom stablecoins

Backend (Separate Repository)

API: Node.js + Express / Python + FastAPI
Database: PostgreSQL
Cache: Redis
Queue: RabbitMQ

Mobile

Framework: React Native
Platforms: iOS + Android

DevOps

Package Manager: pnpm workspaces
Testing: Jest + React Testing Library
CI/CD: GitHub Actions
Deployment: Vercel (web) / App Store & Play Store (mobile)

🛠️ Development
Project Structure
asante-trade-web/
├── apps/
│   ├── admin-dashboard/
│   │   ├── app/
│   │   │   ├── (auth)/           # Auth routes (login, signup)
│   │   │   ├── (dashboard)/      # Protected dashboard routes
│   │   │   │   ├── agents/       # Agent management
│   │   │   │   ├── transactions/ # Transaction monitoring
│   │   │   │   ├── compliance/   # KYC/AML dashboard
│   │   │   │   └── settings/     # System configuration
│   │   │   ├── layout.tsx        # Root layout
│   │   │   └── page.tsx          # Landing page
│   │   ├── components/           # App-specific components
│   │   ├── lib/                  # App-specific utilities
│   │   └── public/               # Static assets
│   ├── manager-dashboard/        # Similar structure
│   └── customer-portal/          # Similar structure
├── packages/
│   ├── ui/
│   │   └── src/
│   │       ├── components/       # Shared components
│   │       │   ├── button.tsx
│   │       │   ├── card.tsx
│   │       │   ├── input.tsx
│   │       │   ├── table.tsx
│   │       │   ├── modal.tsx
│   │       │   └── sidebar.tsx
│   │       └── index.ts
│   ├── utils/
│   │   └── src/
│   │       ├── stellar.ts        # Stellar SDK helpers
│   │       ├── formatting.ts     # Currency, date formatting
│   │       ├── validation.ts     # Input validation
│   │       └── index.ts
│   └── types/
│       └── src/
│           ├── agent.ts          # Agent types
│           ├── customer.ts       # Customer types
│           ├── transaction.ts    # Transaction types
│           ├── stellar.ts        # Stellar-specific types
│           └── index.ts
Available Commands
bash# Development
pnpm dev                              # Start all apps in development mode
pnpm dev --filter=admin-dashboard     # Start specific app

# Building
pnpm build                            # Build all apps for production
pnpm build --filter=admin-dashboard   # Build specific app

# Testing
pnpm test                             # Run all tests
pnpm test:watch                       # Run tests in watch mode
pnpm test:coverage                    # Generate coverage report
pnpm test --filter=@asante-trade/ui   # Test specific package

# Code Quality
pnpm lint                             # Run ESLint on all packages
pnpm lint:fix                         # Auto-fix linting issues
pnpm type-check                       # Run TypeScript type checking
pnpm format                           # Format code with Prettier

# Package Management
pnpm add <package> --filter=admin-dashboard  # Add dependency to specific app
pnpm add <package> -w                        # Add dependency to root workspace
Creating a New Component

Determine if it's shared or app-specific

Shared components → packages/ui/src/components/
App-specific → apps/[app-name]/components/


Create the component

typescript   // packages/ui/src/components/agent-card.tsx
   
   import type { Agent } from '@asante-trade/types';
   
   export interface AgentCardProps {
     agent: Agent;
     onApprove?: (agentId: string) => void;
     onReject?: (agentId: string) => void;
   }
   
   export function AgentCard({ agent, onApprove, onReject }: AgentCardProps) {
     return (
       <div className="rounded-lg border p-4">
         <h3 className="font-semibold">{agent.name}</h3>
         <p className="text-sm text-gray-600">{agent.phoneNumber}</p>
         {/* Component content */}
       </div>
     );
   }

Export from package

typescript   // packages/ui/src/index.ts
   export * from './components/agent-card';

Use in your app

typescript   import { AgentCard } from '@asante-trade/ui';
Adding a New Utility Function

Add to appropriate utility file

typescript   // packages/utils/src/stellar.ts
   
   import { Keypair, Server } from '@stellar/stellar-sdk';
   
   /**
    * Create a new Stellar wallet for a customer
    * @param customerData Customer information
    * @returns Wallet public key and secret
    */
   export async function createCustomerWallet(
     customerData: CustomerType
   ): Promise<WalletResult> {
     const keypair = Keypair.random();
     
     return {
       publicKey: keypair.publicKey(),
       secretKey: keypair.secret(),
     };
   }

Export from package

typescript   // packages/utils/src/index.ts
   export * from './stellar';

Use in your app

typescript   import { createCustomerWallet } from '@asante-trade/utils';
Working with Types
typescript// packages/types/src/agent.ts

export enum AgentStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  INACTIVE = 'inactive',
}

export interface Agent {
  id: string;
  name: string;
  phoneNumber: string;
  email?: string;
  status: AgentStatus;
  territory: string;
  walletPublicKey: string;
  commissionRate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface AgentPerformance {
  agentId: string;
  customersRegistered: number;
  transactionVolume: number;
  commissionsEarned: number;
  walletActivations: number;
  period: 'daily' | 'weekly' | 'monthly';
}
🧪 Testing
Writing Tests
All new features must include tests. Place test files alongside the code they test:
component.tsx
component.test.tsx
Example test:
typescript// packages/ui/src/components/agent-card.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { AgentCard } from './agent-card';
import type { Agent } from '@asante-trade/types';

describe('AgentCard', () => {
  const mockAgent: Agent = {
    id: '1',
    name: 'John Doe',
    phoneNumber: '+254700000000',
    status: 'pending',
    territory: 'Nairobi',
    walletPublicKey: 'GXXX...',
    commissionRate: 0.02,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  it('renders agent information correctly', () => {
    render(<AgentCard agent={mockAgent} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('+254700000000')).toBeInTheDocument();
  });

  it('calls onApprove when approve button clicked', () => {
    const onApprove = jest.fn();
    render(<AgentCard agent={mockAgent} onApprove={onApprove} />);
    
    fireEvent.click(screen.getByText(/approve/i));
    
    expect(onApprove).toHaveBeenCalledWith('1');
  });
});
Coverage Requirements

Frontend Components: 80%+ statement coverage
Utility Functions: 90%+ statement coverage
Critical Business Logic: 95%+ statement coverage

🔐 Environment Variables
Required Variables
env# API Configuration
NEXT_PUBLIC_API_URL=                    # Backend API URL

# Stellar Configuration
NEXT_PUBLIC_STELLAR_NETWORK=            # testnet or mainnet
NEXT_PUBLIC_HORIZON_URL=                # Stellar Horizon API URL
NEXT_PUBLIC_NETWORK_PASSPHRASE=         # Network passphrase

# Authentication
AUTH_SECRET=                            # Secret for JWT signing
NEXT_PUBLIC_AUTH_DOMAIN=                # Auth domain (for OAuth)

# Feature Flags
NEXT_PUBLIC_ENABLE_KYC=                 # Enable KYC verification
NEXT_PUBLIC_ENABLE_LOANS=               # Enable micro-loans feature
NEXT_PUBLIC_ENABLE_SAVINGS=             # Enable savings products

# Analytics (Optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=        # GA tracking ID
NEXT_PUBLIC_SENTRY_DSN=                 # Sentry error tracking
Development vs Production
Development (.env.local):

Use Stellar testnet
Enable debug logging
Disable rate limiting
Use test API keys

Production (.env.production):

Use Stellar mainnet
Enable error tracking
Strict rate limiting
Real API keys (stored in Vercel/hosting platform)

📱 Mobile App Development
The agent mobile app is in a separate repository: asante-trade-mobile-agent
Quick Start (Mobile)
bashgit clone https://github.com/your-org/asante-trade-mobile-agent.git
cd asante-trade-mobile-agent

# Install dependencies
npm install

# iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Android
npx react-native run-android
🚢 Deployment
Web Apps (Vercel)

Connect GitHub repository to Vercel
Configure each app separately:

Admin Dashboard: Root directory → apps/admin-dashboard
Manager Dashboard: Root directory → apps/manager-dashboard
Customer Portal: Root directory → apps/customer-portal


Set environment variables in Vercel dashboard
Deploy

Automatic deployment on push to main
Preview deployments for pull requests



Mobile Apps
iOS (App Store):

Build with Xcode
Submit to App Store Connect
TestFlight for beta testing

Android (Play Store):

Build signed APK/AAB
Upload to Google Play Console
Internal testing → Beta → Production

🤝 Contributing
We welcome contributions! Please read our CONTRIBUTING.md for:

Code style guidelines
Commit message conventions
Pull request process
Testing requirements

Quick Contribution Guide

Fork the repository
Create a feature branch

bash   git checkout -b feature/your-feature-name

Make your changes
Write tests
Run quality checks

bash   pnpm lint
   pnpm type-check
   pnpm test

Commit with clear message

bash   git commit -m "feat(agents): add commission breakdown view"

Push and create PR

📖 Documentation

CONTRIBUTING.md - Contribution guidelines
Platform Overview - Detailed platform documentation
API Documentation - Backend API reference
Design System - UI component guide

🐛 Troubleshooting
Common Issues
pnpm install fails:
bash# Clear cache and reinstall
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install
Apps won't start:

Verify Node.js version: node --version (should be 18+)
Check .env.local exists in each app directory
Ensure ports 3000, 3001, 3002 are available

TypeScript errors in IDE:

Restart TypeScript server
Rebuild packages: pnpm build --filter="./packages/*"

Build fails:

Check all environment variables are set
Clear Next.js cache: rm -rf .next
Rebuild: pnpm build

📊 Roadmap
Phase 1: MVP ✅

 Monorepo setup
 Admin dashboard foundation
 Shared component library
 Agent registration & KYC
 Basic transaction processing

Phase 2: Core Features (Current)

 Regional/line manager dashboards
 Commission tracking system
 Float management
 Bill payment integration
 Remittance services

Phase 3: Advanced Features

 Savings products (Soroban contracts)
 Micro-loans platform
 Customer mobile app
 AI fraud detection
 Advanced analytics

Phase 4: Scale

 Multi-country support
 Multiple currencies
 Merchant payment gateway
 Agent financing programs
 Insurance products

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🌟 Support

GitHub Issues: Report bugs or request features
Discord: Join our community
Email: support@asantetrade.com
Documentation: docs.asantetrade.com

🙏 Acknowledgments

Stellar Development Foundation - For the amazing blockchain technology
Open source community - For the tools and libraries that make this possible
Field agents - For their feedback and dedication to financial inclusion


Built with ❤️ for financial inclusion across Africa
Empowering communities through blockchain technology
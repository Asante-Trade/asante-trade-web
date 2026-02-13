change  this to asante

10:01 PM
Contributing to Asante Trade
Welcome to Asante Trade! We're building financial inclusion infrastructure across Africa using Stellar blockchain. This guide explains how to contribute code, documentation, and ideas to the project.

TL;DR
All code must have tests and documentation
All changes require review and approval from a core team member
Use GitHub for project management and discussions
Follow the branch-based development model (feature branches off main)
Pre-commit hooks enforce code quality - install them locally
Quick Reference
What	Where	How
Report a bug	GitHub Issues	Create an issue with reproduction steps
Suggest a feature	GitHub Discussions	Start a discussion, then formalize as issue
Ask a question	Discord	Chat first, then create issue if needed
Submit code	GitHub PR	Feature branch → PR → Review → Merge
Setting Up Your Environment
Install Pre-commit Hooks
Pre-commit hooks automatically enforce code quality before each commit.

bash
# Install pre-commit framework
pip install pre-commit  # or brew install pre-commit

# Set up hooks for this repo
pre-commit install

# Run checks on all files (useful before first PR)
pre-commit run --all-files
When you commit code, pre-commit will:

Format code with Prettier (JS/TS/MD)
Lint with ESLint (JS/TS)
Check for secrets
Auto-fix many issues (you may need to re-stage files)
Code Style Guides
TypeScript/JavaScript
Naming Conventions:

Components: PascalCase (e.g., AgentCard, TransactionTable)
Functions: camelCase (e.g., processTransaction, fetchAgents)
Constants: UPPER_SNAKE_CASE (e.g., MAX_COMMISSION, API_TIMEOUT)
Type interfaces: PascalCase ending with Type or Props (e.g., AgentType, CardProps)
Type Safety:

Enable strict mode in tsconfig.json (no implicit any)
Always define prop interfaces
Use union types instead of string literals when possible
Document complex types with JSDoc comments
Example - Stellar Integration:

typescript
// packages/utils/src/stellar.ts

import { Server, Transaction } from '@stellar/stellar-sdk';

export interface WalletType {
  publicKey: string;
  balance: number;
  assets: AssetType[];
}

// Good - explicit types, clear naming
export async function createCustomerWallet(
  customerData: CustomerType
): Promise<WalletType> {
  // Implementation
}

// Avoid - implicit any, unclear naming
export async function createWallet(data) {
  return wallet;
}
Testing Requirements
All code contributions MUST include tests.

Frontend Tests (Jest + React Testing Library)
Test files go alongside source files: component.tsx → component.test.tsx

What to test:

Component rendering with different props
User interactions (clicks, form submission)
Error states and edge cases
Integration with utilities/helpers
typescript
// apps/admin-dashboard/app/agents/agent-card.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { AgentCard } from './agent-card';

describe('AgentCard', () => {
  it('renders agent information correctly', () => {
    const agent = { id: '1', name: 'John Doe', status: 'active' };
    render(<AgentCard agent={agent} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('calls onApprove when approve button clicked', async () => {
    const onApprove = jest.fn();
    const agent = { id: '1', name: 'John Doe', status: 'pending' };
    render(<AgentCard agent={agent} onApprove={onApprove} />);
    
    fireEvent.click(screen.getByText(/approve/i));
    
    expect(onApprove).toHaveBeenCalledWith('1');
  });
});
Running Tests Locally
bash
# All tests
pnpm test

# Watch mode (re-run on file changes)
pnpm test:watch

# Coverage report
pnpm test:coverage

# Specific package
pnpm test --filter=admin-dashboard
Coverage targets:

Frontend: 80%+ statement coverage
Utilities: 90%+ (used across all apps)
Submitting Your Changes
Before You Push
Format and lint:
bash
   pre-commit run --all-files
Test everything:
bash
   pnpm test
   pnpm build
Check types:
bash
   pnpm type-check
Git Workflow
We use Trunk-Based Development: feature branches off main, short-lived, for code review.

Step 1: Create a feature branch

bash
git checkout -b feature/agent-commission-tracking
# or: fix/transaction-display-bug
# or: docs/update-setup-guide
Branch naming: type/description

feature/ - New functionality
fix/ - Bug fix
docs/ - Documentation
refactor/ - Code improvements
chore/ - Maintenance, dependencies
Step 2: Make commits with clear messages

bash
# Good commit messages
git commit -m "Add agent commission tracking

- Calculate commissions per transaction type
- Display commission breakdown in agent dashboard
- Store commission history in database
- See #45"

# Avoid
git commit -m "fixed bug"
git commit -m "update utils"
Commit message format:

First line: Clear summary (50 chars max)
Blank line
Body: Explain the change and why (72 chars per line)
Reference issues: "Closes #123", "See #456"
Step 3: Push and create PR

bash
git push origin feature/agent-commission-tracking
Then open a PR on GitHub with:

Clear title and description
Link to related issue: "Closes #45"
Include screenshots for UI changes
Note any breaking changes
Example PR Description:

markdown
## Description
Implements commission tracking system for agents to view their earnings
breakdown by service type (wallet activation, remittances, bill payments).

## Related Issue
Closes #45

## Changes
- Added commission calculation utility
- Updated agent dashboard to show commission breakdown
- Added commission history API endpoint
- Created commission report component

## Testing
- Added 6 new tests for commission calculations
- Manual testing with test agents on testnet
- Verified Stellar transaction costs are accurate

## Screenshots
[attach screenshots of commission dashboard]
Code Review Process
Expectations for reviewers:

Review within 48 hours
Provide constructive feedback
Approve if all concerns addressed
Expectations for authors:

Respond to feedback promptly
Make requested changes in new commits
Don't force-push to reviewed branches
Review checklist:

 Code follows style guide
 Tests are included and passing
 Documentation updated
 No breaking changes without discussion
 Commit messages are clear
 No hardcoded secrets/keys
Merging
Once approved:

Update branch if behind main: git pull origin main --rebase
Squash-merge to main (GitHub UI does this automatically)
Delete feature branch
Documentation Standards
Code comments:

Explain WHY, not WHAT (code shows WHAT)
Use JSDoc for public APIs
Link to issues or external references
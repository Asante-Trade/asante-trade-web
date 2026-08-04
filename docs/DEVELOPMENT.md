# Development Guide

## Prerequisites

- Node.js 20 or higher
- pnpm 8 or higher
- Git
- A code editor (VS Code recommended)

## Environment Setup

### 1. Clone and Install

```bash
git clone https://github.com/Asante-Trade/asante-trade-web.git
cd asante-trade-web
pnpm install
```

### 2. Start Development Server

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

### 3. VS Code Extensions (Recommended)

- ESLint - for linting feedback
- Prettier - for code formatting
- Tailwind CSS IntelliSense - for styling
- TypeScript Vue Plugin - for TypeScript support

## Code Style

### Running Linters and Formatters

```bash
pnpm lint       # Check code with ESLint
pnpm format     # Format code with Prettier
pnpm type-check # Check TypeScript types
```

### Conventions

#### File Naming
- Components: PascalCase (e.g., `UserCard.tsx`)
- Utilities: kebab-case (e.g., `format-date.ts`)
- Folders: kebab-case (e.g., `components/user-profile/`)

#### Component Structure
```typescript
// Prefer this structure:
export interface UserCardProps {
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
```

#### TypeScript
- Always add type annotations for props
- Use `type` for type aliases, `interface` for objects
- Avoid `any` - use `unknown` if needed
- Export types from components

```typescript
// Good
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// Avoid
const Button = (props: any) => { ... }
```

#### Imports
- Use absolute imports with `@/` alias
- Group imports: React, external libs, then local files

```typescript
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { UserCard } from '@/components/user-card';
import { formatDate } from '@/lib/date-utils';
```

## Git Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/add-user-dashboard
```

Branch naming:
- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation
- `refactor/` for refactoring
- `test/` for tests

### 2. Make Changes and Commit

```bash
# Stage changes
git add .

# Commit with conventional message
git commit -m "feat(admin-dashboard): add user filtering"
```

Commit types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, missing semicolons, etc.)
- `refactor`: Code refactor
- `test`: Add or fix tests
- `chore`: Build process, deps, etc.

### 3. Push and Create PR

```bash
git push origin feature/add-user-dashboard
```

Then open a PR on GitHub with a clear description.

## Testing

### Running Tests

```bash
pnpm test           # Run all tests once
pnpm test:watch     # Run tests in watch mode
pnpm test:coverage  # Generate coverage report
```

### Writing Tests

Tests go in `.test.ts` or `.test.tsx` files next to the code being tested.

```typescript
// example.test.ts
import { render, screen } from '@testing-library/react';
import { UserCard } from './user-card';

describe('UserCard', () => {
  it('displays user name', () => {
    render(<UserCard name="John" email="john@example.com" />);
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
```

## Debugging

### Browser DevTools
- F12 or Right-click → Inspect
- React DevTools extension for component inspection

### Console Logging
- Use `console.log()` for quick debugging
- Clean up before committing

### Next.js Debugging
- Dev server shows errors in terminal and browser
- Check `http://localhost:3000` for error details

## Common Tasks

### Adding a New Component

1. Create folder: `components/my-component/`
2. Add `my-component.tsx` with exported component
3. Add `index.ts` if exporting multiple files:
   ```typescript
   export * from './my-component';
   ```
4. Use in pages: `import { MyComponent } from '@/components/my-component';`

### Adding a Utility Function

1. Create file: `lib/my-utility.ts`
2. Export function:
   ```typescript
   export function myUtility(input: string): string {
     return input.toUpperCase();
   }
   ```
3. Use it: `import { myUtility } from '@/lib/my-utility';`

### Adding Styles

We use Tailwind CSS for styling:

```typescript
<div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg">
  <h2 className="text-lg font-bold">Title</h2>
</div>
```

For component-specific styles, add to the same `.tsx` file or use Tailwind utility classes.

### Adding an Environment Variable

1. Add to `.env.local` (local development):
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   SECRET_KEY=my-secret
   ```

2. Access in code:
   ```typescript
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   const secret = process.env.SECRET_KEY; // Server-only
   ```

3. Deploy: Add to Vercel project settings

## Troubleshooting

### "Module not found" Error
- Ensure path alias is correct: `@/components/my-component`
- Check file names match case (especially on Mac/Linux)
- Run `pnpm install` if recently added a package

### Type Errors
- Run `pnpm type-check` to see all type issues
- Check component imports have proper types
- Ensure TypeScript version is consistent

### Dev Server Not Starting
- Check port 3000 isn't already in use
- Delete `.next` folder and run `pnpm dev` again
- Check Node.js version: `node --version`

### Changes Not Reflecting
- Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Check for syntax errors in terminal
- Restart dev server: Ctrl+C and `pnpm dev` again

## Getting Help

- Check [GitHub Issues](https://github.com/Asante-Trade/asante-trade-web/issues) for similar problems
- Ask in [GitHub Discussions](https://github.com/Asante-Trade/asante-trade-web/discussions)
- Review code in PRs to learn patterns
- Ask in code review if feedback is unclear

## Next Steps

- Read [ARCHITECTURE.md](./ARCHITECTURE.md) for project structure
- Check [CONTRIBUTING.md](../CONTRIBUTING.md) for PR guidelines
- Look at open [issues](https://github.com/Asante-Trade/asante-trade-web/issues) to find work to do

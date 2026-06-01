# Contributing to Firm

Thank you for your interest in contributing to Firm! We welcome contributions from the community.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style Guidelines](#code-style-guidelines)
- [Commit Message Conventions](#commit-message-conventions)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Reporting Issues](#reporting-issues)

## Getting Started

### Prerequisites

- Node.js >=22.12.0
- pnpm (recommended) or npm
- Git

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
```bash
git clone https://github.com/yourusername/firm.git
cd firm
```

3. Install dependencies:
```bash
npm install
```

4. Copy the environment variables template:
```bash
cp .env.example .env
```

5. Set up the database:
```bash
node scripts/setup-db.js
```

6. Start the development server:
```bash
npm run dev
```

## Development Workflow

1. Create a new branch for your feature or bugfix:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bugfix-name
```

2. Make your changes following the [Code Style Guidelines](#code-style-guidelines)

3. Test your changes:
```bash
npm test
npm run build
```

4. Commit your changes following the [Commit Message Conventions](#commit-message-conventions)

5. Push to your fork:
```bash
git push origin feature/your-feature-name
```

6. Create a pull request following the [Pull Request Process](#pull-request-process)

## Code Style Guidelines

### General Principles

- Write clear, readable code
- Follow existing code patterns in the project
- Keep functions focused and small
- Use descriptive variable and function names
- Add comments for complex logic

### Astro Components

- Use semantic HTML elements
- Include ARIA labels for accessibility
- Follow the project's visual identity (electric blue accent, dark theme)
- Use TailwindCSS for styling
- Respect motion hierarchy (Alive/Quiet/Static levels)
- Ensure WCAG 2.1 AA compliance

### TypeScript

- Use TypeScript for type safety
- Avoid `any` types
- Use interfaces for object shapes
- Use type aliases for union types
- Enable strict mode in tsconfig.json

### CSS/TailwindCSS

- Use TailwindCSS utility classes
- Follow the project's design tokens
- Use CSS custom properties for themeable values
- Wrap animations in `@media (prefers-reduced-motion: no-preference)`

### Testing

- Write tests for new features
- Follow Arrange-Act-Assert pattern
- Use descriptive test names
- Mock external dependencies
- Aim for high test coverage

## Commit Message Conventions

We follow conventional commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes

### Scope

Use the scope to indicate the area of the codebase affected:
- `nav`: Navigation components
- `blog`: Blog functionality
- `seo`: SEO-related changes
- `a11y`: Accessibility improvements
- `i18n`: Internationalization
- `deploy`: Deployment configuration
- `test`: Test changes

### Examples

```
feat(nav): add mobile hamburger menu

Implement responsive mobile navigation with ARIA labels
for accessibility. Uses client:load directive for interactivity.

Closes #123
```

```
fix(contact): validate email format in contact form

Add regex validation to ensure proper email format before
submission. Prevents invalid emails from being stored.

Fixes #456
```

```
docs(readme): update installation instructions

Clarify database setup steps and add troubleshooting
section for common issues.
```

### Rules

- Use present tense ("add" not "added")
- Use imperative mood ("move" not "moves")
- Limit the subject line to 72 characters
- Reference related issues in the footer
- Include task ID from TODO.md when applicable (e.g., `feat: TASK-XXX add feature`)

## Pull Request Process

### Before Submitting

1. Ensure your code passes all tests:
```bash
npm test
```

2. Ensure the build succeeds:
```bash
npm run build
```

3. Run type checking:
```bash
npm run astro check
```

4. Update documentation if needed
5. Add tests for new features
6. Update the TODO.md if your PR addresses a task

### Creating a Pull Request

1. Go to the repository on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template:
   - Title: Follow commit message format
   - Description: Describe what you did and why
   - Link related issues
   - Add screenshots for UI changes
5. Request review from maintainers

### PR Review Process

- Maintainers will review your PR
- Address feedback in a timely manner
- Keep the PR focused on a single change
- Squash commits if needed before merge
- PRs must pass all checks before merging

### After Merge

- Delete your branch
- Update your local repository:
```bash
git checkout master
git pull upstream master
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Place test files in the `tests/` directory
- Name test files with `.test.ts` extension
- Use Vitest as the test framework
- Mock external dependencies (database, email service)
- Test both success and error cases
- Aim for high code coverage

### Test Structure

```typescript
import { describe, it, expect, vi } from 'vitest';

describe('Feature Name', () => {
  it('should do something', () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = functionUnderTest(input);
    
    // Assert
    expect(result).toBe('expected');
  });
});
```

## Reporting Issues

### Before Reporting

- Check existing issues to avoid duplicates
- Search the documentation
- Try to reproduce the issue

### Creating an Issue

1. Go to the Issues tab on GitHub
2. Click "New Issue"
3. Use the appropriate template (bug report or feature request)
4. Fill in all required fields:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected behavior
   - Actual behavior
   - Environment details (OS, Node.js version)
   - Screenshots if applicable

### Issue Labels

- `bug`: Bug report
- `enhancement`: Feature request
- `documentation`: Documentation issue
- `good first issue`: Good for newcomers
- `help wanted`: Needs community help

## Questions?

If you have questions about contributing, feel free to:
- Open a discussion on GitHub
- Contact maintainers
- Check existing issues and PRs for context

Thank you for contributing to Firm!

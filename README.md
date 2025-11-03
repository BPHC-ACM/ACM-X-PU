# ACM-X-PU

## Setup

```bash
pnpm install
pnpm run prepare
```

## Commands

```bash
pnpm run dev          # Development mode
pnpm run build        # Build
pnpm start            # Run production build
pnpm run lint         # Check linting
pnpm run lint:fix     # Fix linting issues
pnpm run format       # Format code
pnpm run type-check   # TypeScript check
pnpm run validate     # Run all checks
```

## Pre-Push Protection

Automated checks run before every push:

- Code formatting
- ESLint validation
- TypeScript type checking
- Build compilation

## License

See [LICENSE](LICENSE) file.

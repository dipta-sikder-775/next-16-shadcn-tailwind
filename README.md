# Project Name: XXXXXXXXXXX

A modern, responsive website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version v22.18.0+ (LTS) or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **pnpm** (Package Manager)
  - Install globally: `npm install -g pnpm`
  - Verify installation: `pnpm --version`

> **⚠️ IMPORTANT**: This project **ONLY** supports pnpm as the package manager. Do not use npm or yarn or bun, installation will fail. The package manager pnpm is extremely fast and disk space efficient.

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone *****
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

   > **🔒 Critical**: Never delete or manually edit `pnpm-lock.yaml`. This file ensures consistent dependency versions across all environments.

3. **Start the development server**

   ```bash
   pnpm dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

| Command      | Description                                            |
| ------------ | ------------------------------------------------------ |
| `pnpm dev`   | Start development server with Turbopack (fast refresh) |
| `pnpm build` | Build the application for production                   |
| `pnpm start` | Start the production server                            |
| `pnpm lint`  | Run ESLint to check code quality                       |

## 🔧 Development Workflow

### Running the Development Server

```bash
pnpm dev
```

- Uses Next.js 16 with Turbopack for ultra-fast compilation
- Supports hot reload for instant feedback
- Available at `http://localhost:3000`

### Code Quality & Linting

```bash
pnpm lint
```

- Runs ESLint with Next.js configuration
- Checks TypeScript types and code quality
- Fix auto-fixable issues: `pnpm lint --fix`

### Building for Production

```bash
pnpm build
```

- Creates optimized production build in `.next` folder
- Generates static assets and server-side code
- Performs type checking and optimization

### Starting Production Server

```bash
pnpm start
```

- Starts production server (requires `pnpm build` first)
- Serves optimized application
- Default port: 3000

## 🏗️ Project Structure

```text
project-name
├──src/                        # Source code
│  ├── app/                    # Next.js 16 App Router
│  │   ├── layout.tsx         # Root layout
│  │   ├── page.tsx           # Homepage
│  │   ├── globals.css        # Global styles
│  │   └── _components/        # page specific and shared components
│  └── components/     # base components
├── public/                    # Static assets
│   ├── assets/               # Images and icons
│   └── fonts/                # Custom fonts
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── pnpm-lock.yaml           # Locked dependency versions
```

## 🔒 Package Manager Rules

### ✅ DO

- Use `pnpm install` to add new dependencies
- Use `pnpm add <package>` to install new packages
- Use `pnpm remove <package>` to uninstall packages
- Commit `pnpm-lock.yaml` to version control
- Keep pnpm updated to the latest version

### ❌ DON'T

- **Never** delete `pnpm-lock.yaml`
- **Never** manually edit `pnpm-lock.yaml`
- **Never** use npm or yarn or bun commands
- **Never** ignore `pnpm-lock.yaml` in git

## ❓ FAQ & Troubleshooting

### Q: The development server won't start

**A:**

1. Ensure Node.js v22.18.0+ (LTS) is installed: `node --version`
2. Delete `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
3. Check if port 3000 is already in use
4. Try: `pnpm dev --port 3000`

### Q: Getting "command not found: pnpm"

**A:** Install pnpm globally: `npm install -g pnpm`

### Q: Build fails with TypeScript errors

**A:**

1. Run `pnpm lint` to check for issues
2. Ensure all imports and types are correct
3. Check `tsconfig.json` configuration

### Q: Styles not loading correctly

**A:**

1. Restart the development server
2. Check Tailwind CSS configuration
3. Verify CSS imports in `globals.css`

### Q: Getting dependency conflicts

**A:**

1. **Never** manually edit `pnpm-lock.yaml`
2. Use `pnpm install` to resolve conflicts
3. If issues persist, delete `node_modules` and reinstall

### Q: Production build is slow

**A:**

1. Ensure you're using `pnpm build` (not dev mode)
2. Check for large images - optimize them
3. Review bundle analyzer: `pnpm build && pnpm start`

### Q: Getting "Module not found" errors

**A:**

1. Check import paths are correct
2. Ensure the file exists
3. Restart TypeScript server in VS Code: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

### Q: Hot reload not working

**A:**

1. Restart development server: `pnpm dev`
2. Check if Turbopack is enabled
3. Clear browser cache

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19 (with react compiler)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js config

---

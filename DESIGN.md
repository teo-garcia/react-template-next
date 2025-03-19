# React Template Next (RTN) - Design Document

## Project Overview
A modern, production-ready Next.js template with TypeScript integration, designed for building scalable web applications. This template provides a solid foundation for developing modern web applications with best practices, comprehensive testing, and performance optimizations built-in.

## Tech Stack
- **Framework**: Next.js 15.2.1
- **Language**: TypeScript
- **React Version**: 19.0.0
- **Node Version**: >=22
- **Package Manager**: pnpm

## Core Features

### 1. Modern Development Setup
- TypeScript support with strict type checking
- Next.js App Router architecture for modern routing
- TurboPack for faster development builds
- ESM modules support
- Hot Module Replacement (HMR)

### 2. UI/UX Features
- Theme switching capability (light/dark mode)
- Viewport information display for development
- Inter font integration
- Tailwind CSS for modern, utility-first styling
- Responsive design support
- Accessibility-first components

### 3. Development Tools
- ESLint configuration for code quality
  - Custom rules for Next.js
  - TypeScript-aware linting
- Jest for unit testing
  - React Testing Library integration
  - Custom test utilities
- Playwright for E2E testing
  - UI mode for visual testing
  - Cross-browser testing support
- React Testing Library for component testing
  - User-centric testing approach
  - Accessibility testing

### 4. Data Management
- React Query integration (@tanstack/react-query)
  - Efficient data fetching and caching
  - Server state management
- React Query DevTools for debugging
  - Cache inspection
  - Request monitoring

### 5. Project Structure
```
app/
├── api/              # API routes
│   └── healthcheck/  # Health check endpoint
├── components/       # Reusable UI components
│   ├── global-providers/
│   ├── theme-switch/
│   └── viewport-info/
├── features/        # Feature-specific components
│   └── not-found-banner/
├── lib/            # Utilities and hooks
│   ├── hooks/      # Custom React hooks
│   ├── misc/       # Miscellaneous utilities
│   ├── mocks/      # Testing mocks
│   └── styles/     # Global styles
└── styles/         # Global styles
```

### 6. Quality Assurance
- Unit testing setup with Jest and React Testing Library
- E2E testing configuration with Playwright
- Type safety with strict TypeScript configuration
- Comprehensive error handling
  - Global error boundary
  - Not found pages
  - API error handling
- Health check endpoint for monitoring
- Continuous Integration ready

### 7. Performance Optimizations
- Server-side rendering with Next.js
- Client-side optimization
  - Code splitting
  - Dynamic imports
- Modern bundling with TurboPack
- Font optimization
- Image optimization

## Key Components

### GlobalProviders
- Purpose: Manages application-wide state and theme
- Features:
  - Theme context provider
  - React Query provider
  - Additional global contexts

### ThemeSwitch
- Purpose: Handles theme toggling functionality
- Features:
  - Light/dark mode toggle
  - System preference detection
  - Persistent theme selection

### ViewportInfo
- Purpose: Provides viewport information for development
- Features:
  - Current viewport dimensions
  - Breakpoint detection
  - Development-only component

### NotFoundBanner
- Purpose: Custom 404 page component
- Features:
  - User-friendly error message
  - Navigation assistance
  - Consistent branding

## Development Practices

### Architecture
- Component-first architecture
- Separation of concerns
- Feature-based organization
- Shared component library

### Code Quality
- Test-driven development support
- Strict TypeScript usage
- Modern React patterns and hooks
- Comprehensive error boundaries

### Best Practices
- Accessibility (WCAG) compliance
- SEO optimization
- Performance monitoring
- Security best practices

## Getting Started
1. Clone the repository
2. Install dependencies with `pnpm install`
3. Run development server with `pnpm dev`
4. Run tests with `pnpm test:unit` or `pnpm test:e2e`

## Contributing
Please refer to the CONTRIBUTING.md file for guidelines on how to contribute to this project.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

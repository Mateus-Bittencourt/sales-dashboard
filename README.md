# Sales Dashboard

A modern sales dashboard application built with React, TypeScript, and Vite. This project includes authentication, data visualization, lead management, and a responsive design with light/dark theme support.

## 🚀 Features

- **Authentication System**: JWT-based login and registration with secure cookie handling
- **Dashboard Analytics**: Interactive charts and KPI cards showing sales metrics
- **Lead Management**: Create, view, and delete sales leads
- **Profile Management**: User profile updates and account settings
- **Theme System**: Light/dark mode toggle with persistent user preferences
- **Responsive Design**: Mobile-first approach with Material-UI components
- **State Management**: Redux Toolkit for global state management
- **Testing Suite**: Unit tests with Jest and React Testing Library
- **E2E Testing**: Cypress integration for end-to-end testing
- **Code Quality**: ESLint, Prettier, and Husky for code consistency

## 🛠️ Tech Stack

### Core Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### UI & Styling

- **Styled Components** - CSS-in-JS styling
- **Material-UI (MUI)** - Component library
- **Chart.js** - Data visualization
- **React Chart.js 2** - Chart.js React wrapper

### State & Data Management

- **Redux Toolkit** - State management
- **Axios** - HTTP client
- **js-cookie** - Cookie management
- **JWT Decode** - JWT token handling

### Testing & Quality

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Cypress** - End-to-end testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

### Development Tools

- **TypeScript** - Static type checking
- **Vite TSConfig Paths** - Path mapping
- **ts-jest** - TypeScript Jest transformer

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd sales-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment setup:**
   Create a `.env` file in the root directory:

   ```env
   VITE_API_BASE_URL=https://reactts.dnc.group/api
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality

- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Testing

- `npm run test` - Run unit tests with coverage
- `npm run cypress:open` - Open Cypress GUI
- `npm run cypress:run` - Run Cypress tests headlessly

### Git Hooks

- `npm run prepare` - Set up Husky git hooks

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── BannerImage.tsx
│   ├── CardComponent.tsx
│   ├── CustomChart.tsx
│   ├── CustomTable.tsx
│   ├── FormComponent.tsx
│   ├── Header.tsx
│   ├── Logo.tsx
│   ├── StyledButton.tsx
│   ├── StyledInput.tsx
│   └── Typographies.tsx
├── contexts/            # React contexts
│   └── AppThemeContext.tsx
├── hooks/               # Custom React hooks
│   ├── useAxios.ts
│   └── useFormValidation.ts
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Leads.tsx
│   ├── Login.tsx
│   ├── Profile.tsx
│   └── Registration.tsx
├── redux/               # Redux store and slices
│   ├── slice/
│   │   └── createProfile.ts
│   └── index.ts
├── resources/           # Static resources and configs
│   └── themesList.ts
├── services/            # API services
│   └── logout.ts
├── styles/              # Styled-components themes
│   ├── globalStyle.ts
│   ├── styled.d.ts
│   └── theme.ts
├── types/               # TypeScript type definitions
│   ├── *.d.ts
│   └── index.ts
├── utils/               # Utility functions
│   ├── currencyConverter.ts
│   ├── highlightsTextConverter.ts
│   ├── jwtExpirationDateConverter.ts
│   └── pxToRem.ts
└── __tests__/           # Test files
    ├── components/
    └── utils/
```

## 🎨 Theme System

The application supports light and dark themes with the following structure:

```typescript
interface Theme {
  appBackground: string
  appColor: string
  buttons: { primary: string, alert: string, ... }
  card: { background: string, border: string, ... }
  textInput: { active: string, borderColor: string, ... }
  typographies: { error: string, subtitle: string, ... }
}
```

Themes are managed through React Context and persisted in localStorage.

## 🧪 Testing

### Unit Tests

Run unit tests with coverage:

```bash
npm run test
```

Tests are located in `src/__tests__/` and cover:

- Utility functions
- Component rendering and styling
- Theme consistency

### End-to-End Tests

Run E2E tests with Cypress:

```bash
# Interactive mode
npm run cypress:open

# Headless mode
npm run cypress:run
```

E2E tests cover:

- Authentication flow
- Dashboard navigation
- Lead management
- Profile operations

## 🔒 Authentication

The application uses JWT-based authentication:

1. **Login/Registration**: Users authenticate via API endpoints
2. **Token Storage**: JWT tokens are stored in secure HTTP-only cookies
3. **Route Protection**: Private routes require valid authentication
4. **Auto-redirect**: Unauthenticated users are redirected to login

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first design approach
- Material-UI Grid system
- Adaptive navigation
- Touch-friendly interfaces

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Vercel Deployment

The project includes `vercel.json` configuration for seamless Vercel deployment with SPA routing support.

### Environment Variables

Ensure the following environment variables are set in production:

- `VITE_API_BASE_URL` - Backend API URL

## 🔧 Development Guidelines

### Path Aliases

The project uses TypeScript path mapping:

```typescript
// Instead of: import { Component } from '../../components/Component'
import { Component } from '@components'
```

Available aliases:

- `@components` - UI components
- `@pages` - Page components
- `@hooks` - Custom hooks
- `@types` - Type definitions
- `@utils` - Utility functions
- `@styles` - Styling and themes
- `@redux` - Redux store
- `@contexts` - React contexts

### Code Quality

The project enforces code quality through:

- **ESLint**: Linting rules for TypeScript and React
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality checks
- **TypeScript**: Strict type checking

### Component Development

- Use TypeScript interfaces for props
- Follow styled-components patterns
- Include unit tests for new components
- Document complex components with JSDoc

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all TypeScript types are properly defined
2. **Theme Issues**: Verify styled-components theme provider wraps the app
3. **API Errors**: Check environment variables and API endpoint configuration
4. **Test Failures**: Update snapshots if UI changes are intentional

### Development Server Issues

```bash
# Clear cache and restart
rm -rf node_modules/.cache
npm run dev
```

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Support

For technical support or questions, please contact the development team.

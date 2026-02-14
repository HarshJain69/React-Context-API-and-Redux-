# State Management — Experiment 4

A minimal, monochrome Single Page Application demonstrating advanced state management patterns using **React Context API** and **Redux Toolkit**.

## Project Overview

This project implements two complementary state management approaches:

1. **Context API** — Simple global state for authentication, theme, and language
2. **Redux Toolkit** — Advanced state management for shopping cart with async operations

## Features

### Context API Implementation

#### Authentication Context
- User login/logout functionality
- Session state management
- Custom `useAuth` hook for consuming auth state
- Protected UI elements based on authentication status

#### Theme Context
- Light/dark monochrome theme toggle
- Persistent theme storage using localStorage
- Automatic theme application on mount
- Custom `useTheme` hook

#### Language Context
- Multi-language support (English, Spanish, French)
- Dynamic translation rendering
- Language selector integration
- Custom `useLanguage` hook with translation function

### Redux Toolkit Implementation

#### Product Management
- Async product fetching using `createAsyncThunk`
- Loading states and error handling
- Product filtering by category
- Feature-based slice architecture

#### Shopping Cart
- Add/remove items with quantity management
- Real-time total calculation using selectors
- Cart persistence to localStorage
- Item quantity increment/decrement
- Clear cart functionality

## Design System

### Monochrome Color Palette

**Light Theme:**
- Background: `#ffffff`, `#fafafa`
- Text: `#171717`, `#737373`, `#a3a3a3`
- Borders: `#e5e5e5`

**Dark Theme:**
- Background: `#171717`, `#262626`
- Text: `#fafafa`, `#a3a3a3`, `#737373`
- Borders: `#404040`

### Typography
- Font: System fonts (San Francisco, Segoe UI, Roboto)
- Weight: Light (300) for body, Regular (400) for emphasis
- Clean spacing and generous whitespace
- Minimal rounded corners (0.25rem - 0.375rem)

### Icons
- Lucide React icons throughout
- Consistent 16-18px sizing
- Minimal, line-based design

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Folder Structure

```
src/
├── context/               # Context API providers
│   ├── AuthContext.tsx    # User authentication state
│   ├── ThemeContext.tsx   # Theme toggle and persistence
│   └── LanguageContext.tsx # Multi-language support
├── store/                 # Redux store configuration
│   ├── index.ts           # Store setup and typed hooks
│   └── slices/            # Feature-based slices
│       ├── cartSlice.ts   # Shopping cart logic
│       └── productSlice.ts # Product fetching and filtering
├── components/            # Reusable UI components
│   ├── Header.tsx         # Main navigation with global controls
│   ├── ProductCard.tsx    # Individual product display
│   └── Cart.tsx          # Shopping cart display
├── pages/                # Page-level components
│   ├── ContextDemo.tsx   # Context API demonstration
│   └── ReduxDemo.tsx     # Redux Toolkit demonstration
├── App.tsx               # Root application component
├── main.tsx              # Entry point with providers
├── App.css               # Component-specific styles
└── index.css             # Global styles and design tokens
```

## Redux DevTools

The Redux store is configured with DevTools integration. To use:

1. Install [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools) for your browser
2. Start the development server with `pnpm dev`
3. Open browser DevTools
4. Navigate to Redux tab
5. Inspect state, actions, and time-travel debugging

## State Management Architecture

### Context API Pattern
```tsx
// Provider wraps app in main.tsx
<AuthProvider>
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
</AuthProvider>

// Consume using custom hooks
const { user, login, logout } = useAuth();
const { theme, toggleTheme } = useTheme();
const { language, setLanguage, t } = useLanguage();
```

### Redux Pattern
```tsx
// Store configured with slices
const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

// Consume using typed hooks
const dispatch = useAppDispatch();
const products = useAppSelector(state => state.products.items);

// Dispatch actions
dispatch(addToCart(product));
dispatch(fetchProducts());
```

## Technical Stack

- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Language:** TypeScript 5.9.3
- **State Management:** 
  - React Context API (built-in)
  - Redux Toolkit 2.11.2
  - React-Redux 9.2.0
- **Icons:** Lucide React 0.564.0
- **Package Manager:** pnpm

## Key Implementation Details

### Async Thunks
Products are fetched asynchronously using `createAsyncThunk`, demonstrating proper loading and error state handling.

### LocalStorage Persistence
Both theme preference and cart items persist across sessions using localStorage.

### Pure Reducers
All Redux reducers are pure functions with no side effects, using Immer for immutable updates.

### Custom Hooks
Each context provides a custom hook that enforces proper provider wrapping and provides type safety.

### No Prop Drilling
Global state is accessed directly through hooks, eliminating deep prop passing.

## Development

The project uses:
- ESLint for code quality
- TypeScript for type safety
- Vite for fast development and optimized builds
- React Compiler for optimized rendering

## License

Educational project for demonstrating state management patterns.

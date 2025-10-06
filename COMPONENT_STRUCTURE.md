# Component Structure Documentation

This document explains the new organized component structure for the portfolio project.

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.tsx
│   │   ├── AnimatedTitle.tsx
│   │   └── index.ts
│   ├── layout/          # Layout components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── index.ts
│   ├── sections/        # Main page sections
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Features/
│   │   ├── Story/
│   │   ├── Contact/
│   │   └── index.ts
│   ├── ui/             # Future UI components
│   │   └── index.ts
│   └── index.ts        # Main exports
├── hooks/              # Custom React hooks
│   └── index.ts
├── utils/              # Utility functions
│   └── index.ts
├── types/              # TypeScript interfaces
│   └── index.ts
├── constants/          # App constants
│   └── index.ts
└── App.tsx
```

## 🎯 Benefits of This Structure

### 1. **Better Organization**

- Components are grouped by their purpose and reusability
- Easy to find and maintain specific components
- Clear separation of concerns

### 2. **Cleaner Imports**

```tsx
// Before
import Button from "./components/Button";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

// After
import { Button, Hero, Navbar } from "./components";
```

### 3. **Scalability**

- Easy to add new components in appropriate directories
- Type safety with centralized interfaces
- Reusable hooks and utilities

### 4. **Maintainability**

- Each component has its own directory for complex components
- Shared utilities are centralized
- Constants are separated from components

## 🔧 How to Use

### Importing Components

```tsx
// Import specific components
import { Button, AnimatedTitle } from "./components/common";
import { Navbar, Footer } from "./components/layout";
import { Hero, About } from "./components/sections";

// Or import everything
import { Button, Navbar, Hero } from "./components";
```

### Adding New Components

#### Common Component

```tsx
// src/components/common/NewComponent.tsx
export const NewComponent = () => {
  return <div>New Component</div>;
};

// Add to src/components/common/index.ts
export { NewComponent } from "./NewComponent";
```

#### Section Component

```tsx
// src/components/sections/NewSection/NewSection.tsx
export const NewSection = () => {
  return <section>New Section</section>;
};

// Add to src/components/sections/index.ts
export { NewSection } from "./NewSection/NewSection";
```

### Using Custom Hooks

```tsx
import { useVideoLoader, useAudio } from "../hooks";

const MyComponent = () => {
  const { isLoading, handleVideoLoad } = useVideoLoader(3);
  const { isPlaying, toggleAudio } = useAudio("/audio/music.mp3");

  return <div>...</div>;
};
```

### Using Utilities

```tsx
import { getVideoSource, scrollToSection } from "../utils";

const videoSrc = getVideoSource(1); // returns "videos/hero-1.mp4"
scrollToSection("about"); // smooth scroll to about section
```

### Using Constants

```tsx
import { NAV_ITEMS, VIDEO_CONFIG } from "../constants";

const Navigation = () => {
  return (
    <nav>
      {NAV_ITEMS.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};
```

## 📝 Directory Guidelines

### `/components/common/`

- Reusable UI components used across multiple sections
- Should not contain section-specific logic
- Examples: Button, Modal, Input, Card

### `/components/layout/`

- Components that define the overall page structure
- Usually rendered once per page
- Examples: Navbar, Footer, Sidebar, Header

### `/components/sections/`

- Main content sections of the application
- Page-specific components
- Examples: Hero, About, Contact, Portfolio

### `/components/ui/`

- Basic UI building blocks
- Highly reusable primitive components
- Examples: Typography, Icons, Spacers

### `/hooks/`

- Custom React hooks
- Reusable stateful logic
- Should be prefixed with 'use'

### `/utils/`

- Pure utility functions
- Helper functions without React dependencies
- Should be easily testable

### `/types/`

- TypeScript interfaces and types
- Component prop types
- API response types

### `/constants/`

- Application configuration
- Static data
- Environment-specific values

## 🚀 Next Steps

1. **Add Component Tests**: Create test files alongside components
2. **Add Storybook**: Document components with Storybook
3. **Add API Layer**: Create services directory for API calls
4. **Add State Management**: Add stores/context for global state
5. **Add Styling**: Consider styled-components or CSS modules

## 🔄 Migration Checklist

- ✅ Reorganized components into logical directories
- ✅ Created index files for clean imports
- ✅ Updated all import statements
- ✅ Added utility functions and hooks
- ✅ Created type definitions
- ✅ Added constants for configuration
- ✅ Updated App.tsx to use new structure
- ✅ Verified development server runs successfully

The new structure is now ready for development! 🎉

# Cholchol Municipality Website

A modern, responsive website redesign for the Municipality of Cholchol, built with React, TypeScript, and TailwindCSS.

## 🌟 Overview

This project is a complete redesign of the Cholchol Municipality website, focused on improving user experience, accessibility, and visual appeal. The new design provides a modern interface that works seamlessly across all devices and implements interactive elements to enhance user engagement.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **Interactive Elements**: Carousels, animations, and dynamic content loading
- **News Section**: Filter and search functionality for municipal news
- **Service Directory**: Easy access to all municipal services
- **Contact Forms**: Validated forms with real-time feedback
- **Accessibility**: Implemented according to WCAG standards
- **Performance Optimized**: Fast load times with code splitting and lazy loading

## 🛠️ Technologies

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with ShadcnUI components
- **Typography**: Montserrat (general text), Raleway (headings), Poppins (display)
- **Animations**: CSS transitions and Intersection Observer API
- **Routing**: React Router
- **Form Handling**: React Hook Form with validation
- **Code Quality**: ESLint and Prettier

## 📁 Project Structure

```
/src
  /assets          # Static resources like images and icons
  /components      # Reusable UI components
    /ui            # Basic UI components
    /shared        # Shared components across sections
    /sections      # Main section components
    /layout        # Structural components (Header, Footer, etc.)
  /pages           # Page components
  /hooks           # Custom React hooks
  /services        # API services
  /utils           # Utility functions
  /types           # TypeScript type definitions
  /lib             # Library configurations
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alexiscampusano/municipalidadcholchol-website.git
cd municipalidadcholchol-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
yarn build
```

## 📝 Code Conventions

- **Component Structure**: Follows component-based architecture with React best practices
- **Naming**: PascalCase for components, camelCase for functions and variables
- **State Management**: React hooks for local state, context API for shared state
- **Styling**: Utility-first approach with TailwindCSS
- **Comments**: English-only, focusing on complex logic explanation
- **TypeScript**: Strong typing with interfaces and type definitions

## 📱 Responsive Design Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 License

This project is licensed under the MIT License - see the LICENSE file for details.

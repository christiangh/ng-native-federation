# Angular Native Federation

A modern Angular monorepo project demonstrating **Module Federation** with Native Federation, enabling scalable micro-frontend architecture with lazy-loaded applications.

## 📋 Project Overview

This project showcases a shell application that dynamically loads and composes multiple Micro Front-End (MFE) applications at runtime. It leverages Angular's standalone components and modern development practices.

### Architecture

- **app-shell**: The host/container application that bootstraps and manages micro-frontends
- **app-mfe1**: First federated micro-frontend application
- **app-mfe2**: Second federated micro-frontend application

## 🛠️ Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js**: v20.19.0
- **npm**: v10.8.2
- **Angular CLI**: v21.1.2 or higher

## 📦 Installation

1. Clone or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## 🚀 Getting Started

### Launch All Applications

To run all applications concurrently (shell + both MFEs):

```bash
npm run start:all
```

This command starts:
- **app-shell** on `http://localhost:4200`
- **app-mfe1** on `http://localhost:4201`
- **app-mfe2** on `http://localhost:4202`

### Launch Individual Applications

#### Shell Application (Host)
```bash
ng serve app-shell
```
Access at: `http://localhost:4200`

#### Micro-Frontend 1
```bash
ng serve app-mfe1
```
Access at: `http://localhost:4201`

#### Micro-Frontend 2
```bash
ng serve app-mfe2
```
Access at: `http://localhost:4202`

### Production Build

Build all applications:

```bash
ng build
```

Build a specific application:

```bash
ng build app-shell
ng build app-mfe1
ng build app-mfe2
```

## 🧪 Testing

### Run Unit Tests

Execute unit tests for all projects:

```bash
npm test
```

Run tests for a specific project:

```bash
ng test app-shell
ng test app-mfe1
ng test app-mfe2
```

## 📁 Project Structure

```
ng-native-federation/
├── projects/
│   ├── app-shell/          # Host/container application
│   ├── app-mfe1/           # Federated micro-frontend 1
│   ├── app-mfe2/           # Federated micro-frontend 2
│   └── [federation.config.js for each]
├── angular.json            # Angular workspace configuration
├── package.json            # Project dependencies
└── tsconfig.json           # TypeScript configuration
```

## 🔧 Development

If you want to recreate this project from scratch, follow these steps:

### 1. Create a New Workspace

```bash
npx @angular/cli new ng-native-federation --create-application=false
```

### 2. Generate Applications

Create the shell application and both micro-frontend applications:

```bash
npx ng generate application app-shell --routing --style=scss
npx ng generate application app-mfe1 --routing --style=scss
npx ng generate application app-mfe2 --routing --style=scss
```

### 3. Install Native Federation Package

```bash
npm install @angular-architects/native-federation --save
```

### 4. Initialize Native Federation

Initialize the applications with Native Federation:

**Shell Application (Dynamic Host):**
```bash
npx ng g @angular-architects/native-federation:init --project app-shell --port 4200 --type dynamic-host
```

**Micro-Frontend Applications (Remotes):**
```bash
npx ng g @angular-architects/native-federation:init --project app-mfe1 --port 4201 --type remote
npx ng g @angular-architects/native-federation:init --project app-mfe2 --port 4202 --type remote
```

Your project is now ready for development!

## 📝 Federation Configuration

Each application includes a `federation.config.js` file that defines:
- Shared dependencies
- Exposed modules
- Federated remotes

## 🌐 Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Module Federation Guide](https://angular.dev/guide/module-federation)
- [Standalone Components](https://angular.dev/guide/standalone-components)

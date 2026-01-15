# DLX Website

A modern, responsive website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React 19** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** icons
- **Vite** for fast development and building
- **ESLint** for code quality
- **Responsive design** with mobile-first approach
- **Video background** support
- **Custom animations** and transitions

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DLX-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run predeploy` - Pre-deployment build script

## 🚀 Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel dashboard for automatic deployments.

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify dashboard, or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web server.

## 📁 Project Structure

```
src/
├── assets/           # Static assets (images, videos, icons)
├── components/       # Reusable React components
├── pages/           # Page components
├── types/           # TypeScript type definitions
└── HomeIcons/       # Custom icon components
```

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint configuration
- `postcss.config.js` - PostCSS configuration
- `vercel.json` - Vercel deployment configuration
- `netlify.toml` - Netlify deployment configuration

## Requirements

- **Node version: 20+**
- **npm 8+**

## Development

Run the development server:
```bash
npm run dev
```

## Production Build

Build for production:
```bash
npm run build
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

# Drexel Meek Portfolio Website

A React-based portfolio website showcasing Drexel Meek's work and projects.

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Deployment

This project is configured to work with both GitHub Pages and custom domains using relative paths.

### GitHub Pages Deployment

The deployment is automated via GitHub Actions. When you push to the main branch, it will automatically build and deploy.

**Manual Deployment:**
```bash
npm run build
npm run deploy
```

### Custom Domain Deployment

When you get a custom domain, you can easily switch configurations:

```bash
# Switch to custom domain configuration
node switch-config.js customDomain

# Build and deploy
npm run build
```

### Configuration Switching

The project includes a utility script to switch between deployment configurations:

```bash
# For GitHub Pages
node switch-config.js githubPages

# For custom domain
node switch-config.js customDomain
```

### GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set the source to "GitHub Actions"
4. The workflow will automatically deploy when you push to main

The site will be available at: `https://dmeek912.github.io/drexel-portfolio-website/`

## Project Structure

- `src/pages/` - React components for each page
- `public/` - Static assets and images
- `src/App.jsx` - Main application component with routing
- `switch-config.js` - Utility script for switching deployment configurations

## Features

- ✅ Works on both GitHub Pages and custom domains
- ✅ Client-side routing with React Router
- ✅ Automatic deployment via GitHub Actions
- ✅ Responsive design
- ✅ Image optimization

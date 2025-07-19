# Drexel Meek Portfolio Website

A React-based portfolio website showcasing Drexel Meek's work and projects.

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Deployment

This project automatically adapts to different hosting environments.

### GitHub Pages (Automatic)

The deployment is fully automated via GitHub Actions. When you push to the main branch, it automatically builds and deploys.

**No manual steps needed!** Just push your changes:
```bash
git add .
git commit -m "Update site"
git push origin main
```

### Custom Domain (Simple)

When you get a custom domain, just run:
```bash
# Build for custom domain
./deploy.sh custom

# Then upload the dist/ folder to your hosting provider
```

### Manual Deployment

For manual builds:
```bash
# For GitHub Pages
./deploy.sh github

# For custom domain  
./deploy.sh custom
```

## GitHub Pages Configuration

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set the source to "GitHub Actions"
4. The workflow will automatically deploy when you push to main

The site will be available at: `https://dmeek912.github.io/drexel-portfolio-website/`

## Project Structure

- `src/pages/` - React components for each page
- `public/` - Static assets and images
- `src/App.jsx` - Main application component with routing
- `deploy.sh` - Simple deployment script for different environments

## Features

- ✅ Automatic deployment to GitHub Pages
- ✅ Easy custom domain deployment
- ✅ Client-side routing with React Router
- ✅ Responsive design
- ✅ Image optimization

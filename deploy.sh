#!/bin/bash

# Auto-deployment script for GitHub Pages and custom domains
# Usage: ./deploy.sh [github|custom]

DEPLOY_TYPE=${1:-github}

if [ "$DEPLOY_TYPE" = "custom" ]; then
    echo "🚀 Building for custom domain..."
    BASE_PATH="/" npm run build
    echo "✅ Built for custom domain (base: /)"
else
    echo "🚀 Building for GitHub Pages..."
    BASE_PATH="/drexel-portfolio-website/" npm run build
    echo "✅ Built for GitHub Pages (base: /drexel-portfolio-website/)"
fi

echo ""
echo "📦 Build complete! Files are in the dist/ folder"
echo ""
echo "For GitHub Pages: Push to main branch (auto-deploys)"
echo "For custom domain: Upload dist/ folder to your hosting" 
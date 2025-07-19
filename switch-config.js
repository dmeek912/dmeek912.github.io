#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const configs = {
  githubPages: {
    base: '/drexel-portfolio-website/',
    favicon: '/drexel-portfolio-website/Favicon.jpg',
    images: '/drexel-portfolio-website/'
  },
  customDomain: {
    base: '/',
    favicon: './Favicon.jpg',
    images: './'
  }
};

function updateViteConfig(config) {
  const vitePath = path.join(__dirname, 'vite.config.js');
  let content = fs.readFileSync(vitePath, 'utf8');
  
  content = content.replace(
    /base:\s*['"`][^'"`]*['"`]/,
    `base: '${config.base}'`
  );
  
  fs.writeFileSync(vitePath, content);
  console.log(`✅ Updated vite.config.js with base: '${config.base}'`);
}

function updateIndexHtml(config) {
  const indexPath = path.join(__dirname, 'index.html');
  let content = fs.readFileSync(indexPath, 'utf8');
  
  content = content.replace(
    /href="[^"]*Favicon\.jpg"/,
    `href="${config.favicon}"`
  );
  
  fs.writeFileSync(indexPath, content);
  console.log(`✅ Updated index.html favicon path`);
}

function updateImagePaths(config) {
  const pagesDir = path.join(__dirname, 'src', 'pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
  
  files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all image paths
    const oldPattern = config.images === './' 
      ? /src="\/drexel-portfolio-website\//g
      : /src="\.\//g;
    
    const newPattern = config.images === './'
      ? 'src="./'
      : 'src="/drexel-portfolio-website/';
    
    content = content.replace(oldPattern, newPattern);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated image paths in ${file}`);
  });
}

function main() {
  const args = process.argv.slice(2);
  const target = args[0];
  
  if (!target || !configs[target]) {
    console.log('Usage: node switch-config.js <githubPages|customDomain>');
    console.log('');
    console.log('Configurations:');
    console.log('  githubPages   - For GitHub Pages deployment');
    console.log('  customDomain  - For custom domain deployment');
    return;
  }
  
  const config = configs[target];
  console.log(`🔄 Switching to ${target} configuration...`);
  
  updateViteConfig(config);
  updateIndexHtml(config);
  updateImagePaths(config);
  
  console.log('');
  console.log(`✅ Successfully switched to ${target} configuration!`);
  console.log('');
  console.log('Next steps:');
  console.log('1. Run: npm run build');
  console.log('2. Deploy to your platform');
}

main(); 
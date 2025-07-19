// Utility function to get the correct asset path
// Automatically works for both GitHub Pages and custom domains
export function getAssetPath(path) {
  // Check if we're on GitHub Pages by looking at the current URL
  const isGitHubPages = window.location.hostname === 'dmeek912.github.io';
  const basePath = isGitHubPages ? '/drexel-portfolio-website' : '';
  
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${basePath}/${cleanPath}`;
}

// Helper for images
export function getImagePath(imagePath) {
  return getAssetPath(imagePath);
} 
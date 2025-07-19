import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Function to optimize an image
async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .jpeg({ quality: quality, progressive: true })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
    console.log(`   Reduction: ${reduction}%\n`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

// Function to find all image files recursively
function findImageFiles(dir) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (imageExtensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main function
async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  const publicDir = 'public';
  const imageFiles = findImageFiles(publicDir);
  
  console.log(`📁 Found ${imageFiles.length} images to optimize:\n`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const imagePath of imageFiles) {
    try {
      const originalSize = fs.statSync(imagePath).size;
      totalOriginalSize += originalSize;
      
      // Create a temporary file for optimization
      const tempPath = imagePath + '.temp';
      
      await sharp(imagePath)
        .jpeg({ quality: 80, progressive: true })
        .toFile(tempPath);
      
      const optimizedSize = fs.statSync(tempPath).size;
      totalOptimizedSize += optimizedSize;
      
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ Optimized: ${path.relative(publicDir, imagePath)}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
      console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)}KB`);
      console.log(`   Reduction: ${reduction}%\n`);
      
      // Replace original with optimized version
      try {
        fs.unlinkSync(imagePath);
        fs.renameSync(tempPath, imagePath);
      } catch (error) {
        console.log(`⚠️  Could not replace ${path.relative(publicDir, imagePath)} - keeping original`);
        // Clean up temp file
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
      
    } catch (error) {
      console.error(`❌ Error optimizing ${imagePath}:`, error.message);
    }
  }
  
  const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log('🎉 Image optimization complete!');
  console.log(`📊 Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(1)}MB`);
  console.log(`📊 Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(1)}MB`);
  console.log(`📊 Total reduction: ${totalReduction}%`);
}

// Run the optimization
optimizeAllImages().catch(console.error); 
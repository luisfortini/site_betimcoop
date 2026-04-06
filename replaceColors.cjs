import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // betim-blue -> betim-primary
      // betim-light-blue -> betim-secondary
      content = content.replace(/betim-blue/g, 'betim-primary');
      content = content.replace(/betim-light-blue/g, 'betim-secondary');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

replaceInFiles(srcDir);
console.log('Renamed tailwind classes updated in all source files.');

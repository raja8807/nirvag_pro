const fs = require('fs');
const path = require('path');

const files = [
  "src/components/screens/Home/sections/Benefits/Benefits.js",
  "src/components/screens/Home/sections/Cta/Cta.js",
  "src/components/screens/Home/sections/Demo/Demo.js",
  "src/components/screens/Home/sections/ExtraFeatures/ExtraFeatures.js",
  "src/components/screens/Home/sections/Faqs/Faqs.js",
  "src/components/screens/Home/sections/Hero/Hero.js",
  "src/components/screens/Home/sections/Integrations/Integrations.js",
  "src/components/screens/Home/sections/Pricing/Pricing.js",
  "src/components/screens/Home/sections/Productivity/Productivity.js",
  "src/components/screens/Home/sections/Usp/Usp.js"
];

for (const file of files) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if CustomContainer is already imported
    if (!content.includes('CustomContainer')) {
      const importStatement = "import CustomContainer from '@/components/ui/CustomContainer/CustomContainer';\n";
      const importRegex = /^import.*$/gm;
      let lastImportMatch;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        lastImportMatch = match;
      }
      
      if (lastImportMatch) {
        const insertPos = lastImportMatch.index + lastImportMatch[0].length + 1;
        content = content.slice(0, insertPos) + importStatement + content.slice(insertPos);
      } else {
        content = importStatement + content;
      }
    }
    
    // Replace opening tag
    content = content.replace(/<div className="container">/g, '<CustomContainer>');
    
    // Replace closing tag. Find </div> that precedes </section>
    content = content.replace(/<\/div>\s*<\/section>/g, '</CustomContainer>\n    </section>');
    
    fs.writeFileSync(filePath, content);
  }
}
console.log('Done');

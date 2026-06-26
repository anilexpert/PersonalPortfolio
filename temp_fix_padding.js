const fs = require('fs');
let content = fs.readFileSync('pages/case-studies/marketvisionai.js', 'utf8');
content = content.replace(/mb-16 md:mb-24 lg:mb-32/g, 'mb-10 md:mb-16');
content = content.replace(/className="relative mb-20 overflow-hidden"/g, 'className="relative mb-10 md:mb-16 overflow-hidden"');
fs.writeFileSync('pages/case-studies/marketvisionai.js', content);

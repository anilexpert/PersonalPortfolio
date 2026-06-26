const fs = require('fs');

function alignCaseStudy(file) {
    let content = fs.readFileSync(file, 'utf8');

    // Fix reversed gradients
    content = content.replace(/from-\[#0D63CC\] to-\[#00DA99\]/g, 'from-[#00DA99] to-[#0D63CC]');
    
    // Fix secondary to primary gradient to standard
    content = content.replace(/from-secondary to-primary/g, 'from-[#00DA99] to-[#0D63CC]');
    
    // Align h2 headings
    content = content.replace(/className="text-4xl font-bold text-text-primary mb-4"/g, 'className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-4"');
    
    fs.writeFileSync(file, content);
}

alignCaseStudy('pages/case-studies/marketvisionai.js');

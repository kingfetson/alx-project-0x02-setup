const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');

const pages = {
  home: `
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our Next.js app.</p>
    </div>
  );
};

export default Home;
`.trim(),

  about: `
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This page contains information about our project.</p>
    </div>
  );
};

export default About;
`.trim()
};

// Ensure pages directory exists
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}

// Create each page
Object.entries(pages).forEach(([filename, content]) => {
  const filePath = path.join(pagesDir, \`\${filename}.tsx\`);
  fs.writeFileSync(filePath, content + '\\n', 'utf8');
  console.log(\`✅ Created: pages/\${filename}.tsx\`);
});

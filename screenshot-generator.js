const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'homepage', url: 'http://localhost:3000', description: 'TaraNa Travel Planner - AI Travel Assistant for Philippines' },
  { name: 'plan-trip', url: 'http://localhost:3000/plan', description: 'Plan Your Philippine Adventure - Interactive Trip Planner' },
  { name: 'travel-guides', url: 'http://localhost:3000/guides', description: 'Philippines Travel Guides - Expert Local Insights' },
  { name: 'baguio-guide', url: 'http://localhost:3000/guides/baguio-summer-capital', description: 'Baguio City Travel Guide - Summer Capital of Philippines' },
  { name: 'palawan-guide', url: 'http://localhost:3000/guides/palawan-complete-guide', description: 'Palawan Complete Travel Guide - Island Paradise' },
  { name: 'about', url: 'http://localhost:3000/about', description: 'About TaraNa - Your AI Travel Companion' },
  { name: 'contact', url: 'http://localhost:3000/contact', description: 'Contact TaraNa Travel - Get in Touch' }
];

async function takeScreenshots() {
  console.log('Starting screenshot generation for Facebook demo...');
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'facebook-demo-screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 },
    deviceScaleFactor: 1
  });

  for (const page of pages) {
    try {
      console.log(`Capturing ${page.name}: ${page.description}`);
      const browserPage = await context.newPage();
      
      // Navigate to page
      await browserPage.goto(page.url, { waitUntil: 'networkidle' });
      
      // Wait for page to fully load
      await browserPage.waitForTimeout(2000);
      
      // Take screenshot
      const screenshotPath = path.join(screenshotsDir, `${page.name}.png`);
      await browserPage.screenshot({
        path: screenshotPath,
        fullPage: true,
        type: 'png'
      });
      
      console.log(`✅ Screenshot saved: ${screenshotPath}`);
      
      await browserPage.close();
      
      // Brief pause between screenshots
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Error capturing ${page.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('🎉 Screenshot generation complete!');
  
  // Generate summary file for Facebook demo
  const summaryPath = path.join(screenshotsDir, 'facebook-demo-summary.md');
  const summary = `# TaraNa Travel Planner - Facebook Demo Screenshots

## Website Overview
TaraNa.ph is an AI-powered travel assistant specifically designed for planning trips to the Philippines. Our platform combines artificial intelligence with local expertise to create personalized travel itineraries.

## Key Features Showcased
- **AI Travel Planning**: Intelligent itinerary generation based on user preferences
- **Local Expertise**: Comprehensive travel guides for Philippine destinations
- **Interactive Interface**: User-friendly design with modern UI components
- **Mobile Responsive**: Optimized for all devices

## Screenshots Captured

${pages.map(page => `### ${page.description}
- **File**: \`${page.name}.png\`
- **URL**: ${page.url}
- **Purpose**: ${page.description}
`).join('\n')}

## Usage for Facebook Demo
These screenshots can be used to:
1. **Showcase the platform** in Facebook posts and ads
2. **Demonstrate user journey** from landing page to trip planning
3. **Highlight key features** and user interface design
4. **Create carousel posts** showing different pages
5. **Support marketing content** with visual proof of concept

## Next Steps for Facebook Marketing
1. Create Facebook Business Page
2. Set up Facebook Pixel for tracking
3. Design engaging posts using these screenshots
4. Create video walkthroughs of the user experience
5. Launch targeted ads to travel enthusiasts

---
Generated on: ${new Date().toISOString()}
Website: https://tarana.ph (or your deployed URL)
Repository: https://github.com/edomasig/tarana-travel-planner
`;

  fs.writeFileSync(summaryPath, summary);
  console.log(`📝 Summary file created: ${summaryPath}`);
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run the screenshot generation
takeScreenshots().catch(console.error);

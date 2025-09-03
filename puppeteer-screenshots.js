const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'homepage', url: 'http://localhost:3000', description: 'TaraNa Travel Planner - AI Travel Assistant for Philippines' },
  { name: 'plan-trip', url: 'http://localhost:3000/plan', description: 'Plan Your Philippine Adventure - Interactive Trip Planner' },
  { name: 'travel-guides', url: 'http://localhost:3000/guides', description: 'Philippines Travel Guides - Expert Local Insights' },
  { name: 'baguio-guide', url: 'http://localhost:3000/guides/baguio-summer-capital', description: 'Baguio City Travel Guide - Summer Capital of Philippines' },
  { name: 'about', url: 'http://localhost:3000/about', description: 'About TaraNa - Your AI Travel Companion' },
  { name: 'contact', url: 'http://localhost:3000/contact', description: 'Contact TaraNa Travel - Get in Touch' }
];

async function takeScreenshots() {
  console.log('🚀 Starting screenshot generation for Facebook demo...');
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'facebook-demo-screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }

  let browser;
  try {
    // Launch browser
    browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    console.log('✅ Browser launched successfully');

    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1200, height: 800 });

    for (const pageInfo of pages) {
      try {
        console.log(`📸 Capturing ${pageInfo.name}: ${pageInfo.description}`);
        
        // Navigate to page with increased timeout
        await page.goto(pageInfo.url, { 
          waitUntil: 'networkidle2',
          timeout: 30000 
        });
        
        // Wait for page to fully load
        await page.waitForTimeout(3000);
        
        // Take screenshot
        const screenshotPath = path.join(screenshotsDir, `${pageInfo.name}.png`);
        await page.screenshot({
          path: screenshotPath,
          fullPage: true,
          type: 'png'
        });
        
        console.log(`✅ Screenshot saved: ${pageInfo.name}.png`);
        
        // Brief pause between screenshots
        await page.waitForTimeout(1000);
        
      } catch (error) {
        console.error(`❌ Error capturing ${pageInfo.name}:`, error.message);
      }
    }

  } catch (error) {
    console.error('❌ Browser error:', error.message);
  } finally {
    if (browser) {
      await browser.close();
      console.log('🔒 Browser closed');
    }
  }

  console.log('🎉 Screenshot generation complete!');
  
  // Create an HTML preview file
  const previewPath = path.join(screenshotsDir, 'preview.html');
  const previewHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaraNa Travel Planner - Facebook Demo Screenshots</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        .screenshot-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
        }
        .screenshot-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s;
        }
        .screenshot-card:hover {
            transform: translateY(-5px);
        }
        .screenshot-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
        .screenshot-info {
            padding: 20px;
        }
        .screenshot-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #333;
        }
        .screenshot-description {
            color: #666;
            line-height: 1.5;
        }
        .url {
            font-family: monospace;
            background-color: #f0f0f0;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            margin-top: 8px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🇵🇭 TaraNa Travel Planner</h1>
        <h2>Facebook Demo Screenshots</h2>
        <p>AI-powered travel assistant for the Philippines</p>
    </div>
    
    <div class="screenshot-grid">
        ${pages.map(page => `
        <div class="screenshot-card">
            <img src="${page.name}.png" alt="${page.description}" />
            <div class="screenshot-info">
                <div class="screenshot-title">${page.description}</div>
                <div class="url">${page.url}</div>
            </div>
        </div>
        `).join('')}
    </div>
    
    <div style="margin-top: 40px; text-align: center; color: #666;">
        <p>Generated on: ${new Date().toISOString()}</p>
        <p>For Facebook marketing and social media promotion</p>
    </div>
</body>
</html>
  `;

  fs.writeFileSync(previewPath, previewHtml);
  console.log(`📱 Preview file created: preview.html`);
  console.log(`📁 All files saved to: ${screenshotsDir}`);
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run the screenshot generation
takeScreenshots().catch(console.error);

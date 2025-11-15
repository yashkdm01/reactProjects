# Troubleshooting Guide - Portfolio Website

## Issue: Blank Dark Screen on localhost:5173

### Step 1: Check Terminal
Terminal should show:
\`\`\`
  Local:   http://localhost:5173/
\`\`\`

If not showing, run:
\`\`\`bash
npm install
npm run dev
\`\`\`

### Step 2: Check Browser Console
Press F12 and click "Console" tab

**Look for these errors:**
- Module not found
- Cannot find module
- Unexpected token
- CSS variables undefined

**If you see errors:**
- Check file paths in import statements
- Make sure all files exist in correct locations
- Verify no typos in filenames (case-sensitive on Linux/Mac)

### Step 3: Clear Cache
Press Ctrl+Shift+Delete and clear:
- Cookies and cached images and files
- Check "All time"
- Click Clear data

### Step 4: Hard Refresh
Press Ctrl+Shift+R (or Cmd+Shift+R on Mac)

### Step 5: Try Simple Version
1. Copy entire code from SIMPLE_TEST_VERSION.jsx
2. Paste into src/App.jsx
3. Save file
4. Browser should refresh automatically

If simple version works:
- Your setup is correct
- Issue is in component files
- We need to fix the actual component files

If simple version STILL blank:
- Close terminal
- Delete node_modules folder
- Delete package-lock.json
- Run: npm install
- Run: npm run dev

### Step 6: Try Different Browser
Sometimes browser cache causes issues:
- Try Chrome
- Try Firefox
- Try Edge

### Step 7: Restart Everything
\`\`\`bash
# Stop dev server (Press Ctrl+C in terminal)
# Then run:
npm install
npm run dev
\`\`\`

### Step 8: Check Network Tab
Press F12 → Network tab
Refresh page
- All files should show green checkmark (200 status)
- If red (404): file not found
- If yellow: check for CSS issues

## Common Fixes

**Fix 1: Import Path Issues**
❌ Wrong: `import Hero from './Hero.jsx'`
✅ Correct: `import Hero from './sections/Hero'`

**Fix 2: Missing CSS Variables**
Make sure src/index.css has all CSS variables defined

**Fix 3: Missing Files**
If getting "Cannot find module" error:
- Create missing component file
- Add basic export: `export default function Component() { return <div>Test</div> }`

**Fix 4: Node Version**
Check: `node --version`
Should be v14 or higher

If not:
- Download latest Node.js from nodejs.org
- Restart computer after install

## Still Not Working?

1. Create new React project:
\`\`\`bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
npm run dev
\`\`\`

2. If this works, your Node/npm setup is fine
3. Copy src/main.jsx from this project to new one
4. Copy src/index.css from this project
5. Gradually add components one by one

## Questions to Answer

1. Does terminal show "Local: http://localhost:5173/"?
2. Does browser console (F12) show any red errors?
3. Does Network tab (F12) show all files loading with 200 status?
4. Did you try hard refresh (Ctrl+Shift+R)?
5. Did you try simple version from SIMPLE_TEST_VERSION.jsx?

Answer these and we can debug properly!

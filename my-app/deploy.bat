@echo off
echo 🚀 TanStack Table Demo - Quick Deploy Script
echo ==============================================

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing git repository...
    git init
    git add .
    git commit -m "Initial commit: TanStack Table Demo with column lines"
    echo ✅ Git repository initialized
) else (
    echo 📁 Git repository already exists
)

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the project
echo 🔨 Building project...
npm run build

echo.
echo 🎉 Project ready for deployment!
echo.
echo 📋 Next steps:
echo 1. Push to GitHub:
echo    git remote add origin https://github.com/YOUR_USERNAME/tanstack-table-demo.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 2. Deploy to Vercel:
echo    - Go to https://vercel.com
echo    - Sign in with GitHub
echo    - Click 'New Project'
echo    - Import your repository
echo    - Click 'Deploy'
echo.
echo 3. Alternative: Deploy to Netlify:
echo    - Go to https://netlify.com
echo    - Drag and drop the 'dist' folder
echo.
echo ✨ Your table features:
echo    ✅ 10 columns with specified widths
echo    ✅ Column 1,2,3: 10%% each
echo    ✅ Column 9,10: 15%% each
echo    ✅ Column 4,5,6,7,8: 8.75%% each
echo    ✅ Full page width - no scrollbar
echo    ✅ Visible column lines
echo    ✅ Responsive design

pause

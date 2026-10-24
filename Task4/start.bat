@echo off
echo ===================================================
echo Starting VibePlayer Web App (Task 4)...
echo ===================================================
cd /d "%~dp0"
echo Opening VibePlayer on http://localhost:5500/index.html
start http://localhost:5500/index.html
python -m http.server 5500
pause

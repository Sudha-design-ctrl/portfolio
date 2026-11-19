@echo off
cd /d d:\MyPortfolio
git add app/components/Preloader.tsx
git rm --cached app/loading.tsx 2>nul
git add -u
git commit -m "cinematic-intro-letter-reveal"
git push origin main

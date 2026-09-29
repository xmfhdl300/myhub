@echo off
chcp 65001 > nul
title Dovemayo Web Server (Windows)
cd /d "%~dp0"

echo ========================================================
echo   Dovemayo Portfolio Web Server (Windows)
echo ========================================================
echo.

if not exist "dist" (
    echo [1/2] Production 빌드 생성 중...
    call npm run build
) else (
    echo [1/2] dist 빌드 폴더 확인 완료.
)

echo.
echo [2/2] 웹 서버를 시작합니다...
echo (서버를 종료하려면 이 창을 닫거나 Ctrl+C 를 누르세요)
echo.

node server.cjs

pause

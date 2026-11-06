@echo off
echo Iniciando servidor techouse...
cd /d "%~dp0"
call npm.cmd run dev
pause

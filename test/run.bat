
@echo off  
:loop  
cd E:\webStudy\vue\test 
call npm run build
ping -n 3 127.1> nul
goto loop
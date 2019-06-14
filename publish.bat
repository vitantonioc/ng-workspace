@echo off

title Publicacion en NPM!
echo Publicacion en NPM de las librerias!
echo Publicacion CORE!
npm publish ./dist/tfl-core/ & npm publish ./dist/tfl-toolbox/ & npm publish ./dist/tfl-componentes/
echo Fin publicacion!
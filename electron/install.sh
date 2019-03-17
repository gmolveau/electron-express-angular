#!/bin/sh
npm install electron electron-packager;
cd express && npm install body-parser compression express morgan;
npm install -g @angular/cli && ng new angular;

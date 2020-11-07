#!/bin/bash
npm install -g firebase-tools
npm install
cp package.json ./firebase/functions/package.json
cd firebase/functions
npm install
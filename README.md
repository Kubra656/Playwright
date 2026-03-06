# KDP automation using Playwright framework

## Setup
Refer the website also https://playwright.dev/docs/intro
Install the following
## nodejs
Go to nodejs.org. Download the recommended version. Install the msi file. Check by typing node in command prompt

## Visual Studio code
Got to https://code.visualstudio.com/ and follow steps

## Playwright module
npm init playwright@latest 
Type yes to all

## ES Lint
Go to extensions in vs code. Type ES lint. Download from microsoft.com

# Playwright runner extension
Go to playwright test in vscode(extensions). Install it

# git
Download git for microsoft as per windows. Install setup. 

## Framework Creation
Copy all for first time
 mkdir -p src/tests
 mkdir -p src/pages
 mkdir -p src/utils
 mkdir -p src/config
 mkdir -p src/api
 mkdir -p src/reporting
 mkdir -p src/logging
 mkdir -p src/data

Go to playwright.config.ts --> Change the path -->  testDir: './src/tests' 

## Installation of browser engine
npx playwright install 

## Run the tests

npx playwright test login.spec.ts --headed

## generate report

npx playwright show-report

## Run tests only in chromium 
Comment all the other browsers under projects in playwright.config.ts file

## Create a new git repository 
echo "# Playwright" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Kubra656/Playwright.git
git push -u origin main

## Push an existing repository 
git remote add origin https://github.com/Kubra656/Playwright.git
git branch -M main
git push -u origin main

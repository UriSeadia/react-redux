#!/bin/bash

# Install/Update nodejs - https://nodejs.org/en/download/

# TODO: script for creating app with typescript
exit 1

# The recommended method for generating a project
npx create-react-app myapp

# OR with typescript
npx create-react-app myapp --template typescript
cd myapp
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

# If you get any errors about missing templates or how a global Create React App install is no longer supported even when using this command, 
# you likely need to remove the global package from your system:
npm uninstall -g create-react-app

# An extra step needed for Mac/Linux users - manually delete the folder:
rm -rf /usr/local/bin/create-react-app

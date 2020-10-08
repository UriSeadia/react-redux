#!/bin/bash

function usage()
{
cat << EOM
Usage:
  For TypeScript: $0 ts myapp
  For JavaScript: $0 js myapp
EOM
}

if [ -z $1 ] || [ -z $2 ]
then
  usage
  exit 1
fi

if [ $1 != "ts" ] && [ $1 != "js" ]
then
  echo "First argument must be 'ts' or 'js'"
  exit 1
fi

if [ $1 = "ts" ]
then
  npx create-react-app $2 --template typescript
  cd $2
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
fi

if [ $1 = "js" ]
then
  npx create-react-app $2
  exit 1
fi

# If you get any errors about missing templates or how a global Create React App install is no longer supported even when using this command, 
# you likely need to remove the global package from your system: 'npm uninstall -g create-react-app'
# An extra step needed for Mac/Linux users - manually delete the folder: 'rm -rf /usr/local/bin/create-react-app'

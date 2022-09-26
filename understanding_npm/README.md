## This follower discuss how to use NPM packages 
This specifically installed nodemon, used to watch for changes. 

nodemon was installed via --sav-dev so it will only be used in development. 

Start = npm start 
Should watch for all changes made

- Node_Modules 
Can be deleted and reinstalled via the npm install process. 
This folder is currently added to .gitignore folder to prevent a large download. 

To add nodemon in debugger modem go the menu -> Run -> Add Configuration
Click on the .vscode folder and find launch.json
Within configuration add json information: 
      ```
      "restart": true, 
      "runtimeExecutable": "nodemon",
      "console": "integratedTerminal", 
      ```

This will looks for nodemon globally, so make sure you have a global install. 
Nodemon needs to shut down separately in the debugging. 
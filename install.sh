# install vs code extension
code --install-extension "/workspace/PreNotebook/z-comp/formulahendry.auto-rename-tag-0.1.8.vsix" 
code --install-extension "/workspace/PreNotebook/z-comp/rangav.vscode-thunder-client-1.9.0.vsix"

cd backend 
npm install --save 
npm install -D -g nodemon
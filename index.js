// Renderer process

'use strict';

const ipc = require('electron').ipcRenderer;

window.addEventListener('contextmenu', (e) => {
    // const position = { x: e.x, y: e.y };
    var selectedText = window.getSelection().toString();

    console.log('Send text:', selectedText);

    e.preventDefault();
    ipc.send('show-menu', { selectedText });
}, false);

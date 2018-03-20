'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let win;

app.on('ready', () => {
    win = new BrowserWindow({ width: 1000, height: 800 });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html')
    }));

    win.on('closed', () => {
        win = null
    });

    win.webContents.on('crashed', (event) => {
        console.log('crashed!', event)
    });
});

'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.webContents.once('dom-ready', () => {
        win.minimize();
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html')
    }));

    win.on('closed', () => {
        win = null
    });

    win.setMenu(null);

    console.log(process.versions);
});

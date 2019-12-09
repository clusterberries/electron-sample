'use strict';

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html')
    }));

    win.on('closed', () => {
        win = null
    });

    win.setMenu(null);
    win.toggleDevTools();

    console.log(process.versions);
});

ipcMain.on('print', () => {
    console.log('print');
    win.webContents.print({}, (success, errorResult) => {
        console.log('errorResult', errorResult);
    });
});

'use strict';

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
let win;
let childWin;

app.on('ready', () => {
    // console.log(process.versions);

    win = new BrowserWindow({
        width: 600,
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


    childWin = new BrowserWindow({
        width: 500,
        height: 400,
        show: true
    });

    childWin.loadURL(url.format({
        pathname: path.join(__dirname, 'child.html')
    }));

    childWin.setMenu(null);
});

ipcMain.on('flash', (event, isBlinking) => {
    console.log('flash frame:', isBlinking);
    childWin.flashFrame(isBlinking);
});

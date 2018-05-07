'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 200,
        height: 40,
        show: false,
        resizable: false,
        x: 300,
        y: 300,
        alwaysOnTop: true,
        frame: false,
        transparent: true
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html')
    }));

    win.on('ready-to-show', () => {
        console.log('ready event');
        win.show();
    });

    win.on('closed', () => {
        win = null
    });
});

'use strict';

const { app, BrowserWindow, globalShortcut } = require('electron');
const { systemPreferences } = require('electron');
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

    // Register a 'CommandOrControl+X' shortcut listener.
    const ret = globalShortcut.register('CommandOrControl+X', () => {
        console.log('CommandOrControl+X is pressed');
    });

    if (!ret) {
        console.log('registration failed');
    }

    // Check whether a shortcut is registered.
    console.log(globalShortcut.isRegistered('CommandOrControl+X'));
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

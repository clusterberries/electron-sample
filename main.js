'use strict';

const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const url = require('url');
let win;

app.on('ready', () => {
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
    win.toggleDevTools();


    protocol.interceptFileProtocol('file', (request, cb) => {
        // load test.html instead of index.html
        let url = request.url.replace(/file:[/\\]*/, '');
        url = url.replace('index.html', 'test.html');
        console.log('file request!', request.url, url);
        cb(url);
    }, err => {
        console.log('err', err);
    });

    console.log(process.versions);
});

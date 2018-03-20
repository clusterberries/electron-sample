// Main process

'use strict';

const { app, BrowserWindow, ipcMain, Menu, MenuItem } = require('electron');
const path = require('path');
const url = require('url');
let win;

app.on('ready', () => {
    win = new BrowserWindow({ width: 1000, height: 800 });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html')
    }));

    win.toggleDevTools();

    win.on('closed', () => {
        win = null
    });

    win.webContents.on('crashed', (event) => {
        console.log('crashed!', event)
    });


    // Create context menu
    const menu = new Menu();
    const menuItem = new MenuItem({
        label: 'Item 1',
        click: () => {
            console.log('click item 1')
        }
    });
    menu.append(menuItem);

    ipcMain.on('show-menu', (event, data) => {
        console.log('show context menu', data.selectedText);
        menu.popup(win);
    })
});

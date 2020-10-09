
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const path = require('path');

module.exports = {
    showpdf, getPdfHtmlURL
};

function showpdf(pdfurl, options) {
    "use strict";

    if (options === undefined || options === null) {
        //using default options
        options = {
            width: 800, height: 600,
            webPreferences: {
                nodeIntegration: false
            },
            title: 'PDF Viewer'
        }
    }
    var win = new BrowserWindow(options);
    win.setMenu(null);

    var PDF_URL = 'file://' + path.join(__dirname, 'pdfjs', 'web', 'viewer.html?file=');
    win.loadURL(PDF_URL + pdfurl);

    win.on('closed', function () {
        win = null;
    });

	win.on('ready-to-show', function () {
        win = null;
    });

    return win;
}

function getPdfHtmlURL(pdfurl) {
    return 'file://' + path.join(__dirname, 'pdfjs', 'web', 'viewer.html?file=') + pdfurl;
}

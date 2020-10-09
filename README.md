# Electron pdf viewer

A node module for view pdf file in electron applications. Improve from origin project elpdf

![screenshot](assets/pdfviewer.png)

##Introduction
electron-pdf-viewer module use pdf.js library from Mozilla.

When you create a new pdfview object, You get a BrowserWindow instance back from the call.

##Install
    
    npm install electron-pdf-viewer --save

## Usage

Used with pdf.js in render process in electron.

    var pdfview = require('electron-pdf-viewer');
	
    //set pdf path
    var pdfurl ='https://www.canon.com.cn/products/printer/pixma-fax/images/speedtest.pdf';  
    // you can get full URL to display PDF by using getPdfHtmlURL() function
    const displayPdfUrl = pdfview.getPdfHtmlURL(pdfurl);
    const options = {
    width: 800,
    height: 600,
    webPreferences: {
    	nodeIntegration: false,
	contextIsolation: true
      }
    }
    // If you dont provive options, default options will be use
    var win = pdfview.showpdf(pdfurl, options);
    win.show();

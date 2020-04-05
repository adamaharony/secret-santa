/*      Made by Adam A.     */


const { app, BrowserWindow} = require("electron");
const path = require("path");


function create_window() {

    // Creating the browser window:
    const main_window = new BrowserWindow( {
        width: 1200,
        height: 800
    });

    // Loading the app's main activity:
    main_window.loadFile("./GUI/main_activity.html");
}


app.whenReady().then(create_window);


/*
============================================================
            EVENT LISTENERS ARE OVER HERE
============================================================
 */

// Make the app close everything when we tell it to (macOS is known to keep apps open):
app.on("window-all-closed", () => {
    // We make sure everything is not being closed in macOS:
    if (process.platform !== "darwin")
        app.quit();
});


// When we run the app we need it to run the first window:
app.on("activate", () => {
   if (browser_window.getAllWindows().length === 0)
       create_window();
});
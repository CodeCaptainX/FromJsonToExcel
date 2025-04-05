// import { app, BrowserWindow } from "electron";
// import * as path from "path";

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   if (process.env.VITE_DEV_SERVER_URL) {
//     win.loadURL(process.env.VITE_DEV_SERVER_URL);
//   } else {
//     win.loadFile(path.join(__dirname, "../dist/index.html"));
//   }
// };

// app.whenReady().then(() => {
//   createWindow();
//   app.on("activate", () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });

// import { app, BrowserWindow } from "electron";
// import * as path from "path";
// import isDev from "electron-is-dev"; // 👈 NEW

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   if (isDev) {
//     win.loadURL("http://localhost:5173"); // 👈 Dev server
//   } else {
//     win.loadFile(path.join(__dirname, "../dist/index.html")); // 👈 Built file
//   }
// };

// app.whenReady().then(() => {
//   createWindow();

//   app.on("activate", () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });

import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const devUrl = process.env.VITE_DEV_SERVER_URL;

  if (devUrl) {
    win.loadURL(devUrl);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

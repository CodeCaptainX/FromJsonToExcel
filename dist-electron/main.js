"use strict";
// import { app, BrowserWindow } from "electron";
// import * as path from "path";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const url_1 = require("url");
const __dirname = path_1.default.dirname((0, url_1.fileURLToPath)(import.meta.url));
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.js"),
        },
    });
    const devUrl = process.env.VITE_DEV_SERVER_URL;
    if (devUrl) {
        win.loadURL(devUrl);
    }
    else {
        win.loadFile(path_1.default.join(__dirname, "../dist/index.html"));
    }
};
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on("activate", () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});

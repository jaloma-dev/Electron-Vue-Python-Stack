'use strict';

const packager = require('electron-packager');

async function bundleElectronApp(options){
    const appPaths = await packager(options)
    console.log(`Electron app bundles created:\n${appPaths.join("\n")}`);
}

let options = {
    executableName: 'EVP',
    out: 'build/',
    dir: '.',
    platform: 'win32',
    arch: 'x64',
    ignore: [
        /gui/,
        /api/,
        /build/,
        /env/,
        /node_modules/,
    ],
    overwrite: true,
}
bundleElectronApp(options);
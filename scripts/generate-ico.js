const fs = require('fs');
const png = fs.readFileSync('public/favicon.png');

// ICO header: 6 bytes
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);  // reserved, must be 0
header.writeUInt16LE(1, 2);  // type: 1 = ICO
header.writeUInt16LE(1, 4);  // 1 image in file

// ICO directory entry: 16 bytes
const dir = Buffer.alloc(16);
dir.writeUInt8(0, 0);    // width: 0 means 256
dir.writeUInt8(0, 1);    // height: 0 means 256
dir.writeUInt8(0, 2);    // color palette: 0 = no palette
dir.writeUInt8(0, 3);    // reserved
dir.writeUInt16LE(1, 4); // color planes
dir.writeUInt16LE(32, 6);// bits per pixel
dir.writeUInt32LE(png.length, 8);  // image data size
dir.writeUInt32LE(22, 12); // offset to image data (6+16=22)

const ico = Buffer.concat([header, dir, png]);
fs.writeFileSync('public/favicon.ico', ico);
console.log('Done:', ico.length, 'bytes');
console.log('Header check:', ico[0].toString(16), ico[1].toString(16), ico[2].toString(16), ico[3].toString(16));

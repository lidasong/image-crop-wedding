const fs = require('fs')
const path = require('path')
const Jimp = require("jimp");
const JPEG = require('jpeg-js');

const log = console.log
const error = console.error

Jimp.decoders['image/jpeg'] = (data) => JPEG.decode(data, { maxMemoryUsageInMB: 1024 });
const dirs = fs.readdirSync('./imgs')
dirs.forEach(dir => {
    Jimp.read(path.resolve(__dirname, 'imgs', dir), (err, lenna) => {
        if (err) {
            error(dir + " : 失败")
        };
        lenna
          .cover(1800, 3200)
          .quality(100)
          .write(path.resolve(__dirname, 'crop',dir));
          log(dir + " : 成功")
      });
})
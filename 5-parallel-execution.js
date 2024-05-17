import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN

export function getDirectorySize(directoryPath, callback) {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return callback(err);
      }
  
      async.map(files, (file, cb) => {
        const filePath = path.join(directoryPath, file);
        fs.stat(filePath, (err, stats) => {
          if (err) {
            return cb(err);
          }
          if (stats.isFile()) {
            cb(null, stats.size);
          } else {
            cb(null, 0);
          }
        });
      }, (err, fileSizes) => {
        if (err) {
          return callback(err);
        }
  
        const totalSize = _.sumBy(fileSizes);
        callback(null, totalSize);
      });
    });
  }
// END

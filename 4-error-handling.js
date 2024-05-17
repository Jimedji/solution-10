import fs from 'fs';

// BEGIN

export function move(sourcePath, destinationPath, callback) {
  fs.readFile(sourcePath, (readError, data) => {
    if (readError) {
      callback(readError);
      return;
    }

    fs.writeFile(destinationPath, data, (writeError) => {
      if (writeError) {
        callback(writeError);
        return;
      }

      fs.unlink(sourcePath, (deleteError) => {
        if (deleteError) {
          callback(deleteError);
          return;
        }

        callback(null);
      });
    });
  });
}
// END

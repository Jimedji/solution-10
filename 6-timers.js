import fs from 'fs';

// BEGIN


const watch = (filepath, interval, callback) => {
  let prevMtime = null;
  const timerId = setInterval(async () => {
    try {
      const stats = await fs.promises.stat(filepath);
      const currentMtime = stats.mtimeMs;
      if (prevMtime && prevMtime !== currentMtime) {
        callback(null);
      }
      prevMtime = currentMtime;
    } catch (err) {
      clearInterval(timerId);
      callback(err);
    }
  }, interval);

  return timerId;
};

export default watch;
// END

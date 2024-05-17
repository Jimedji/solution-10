import fs from 'fs';

// BEGIN

export async function compareFileSizes(filePath1, filePath2, callback) {
    try {
        const stats1 = await fs.promises.stat(filePath1);
        const stats2 = await fs.promises.stat(filePath2);

        if (stats1.size > stats2.size) {
            callback(null, 1);
        } else if (stats1.size === stats2.size) {
            callback(null, 0);
        } else {
            callback(null, -1);
        }
    } catch (err) {
        callback(err, null);
    }
}

// END
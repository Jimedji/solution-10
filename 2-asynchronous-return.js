import fs from 'fs';

// BEGIN
export default function write(filePath, data, callback) {
    const fs = require('fs/promises');
    
    async function writeToFile() {
    try {
    await fs.writeFile(filePath, data);
    callback();
    } catch (error) {
    console.error('Ошибка при записи файла:', error);
    }
    }
    
    writeToFile();
    }
// END
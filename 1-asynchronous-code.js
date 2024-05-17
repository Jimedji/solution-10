import fs from 'fs';

// BEGIN
export default async function print(filePath) {
    try {
    const fs = require('fs/promises');
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
    } catch (error) {
    console.error('Ошибка при чтении файла:', error);
    }
    }
// END

import fs from 'fs/promises';

// BEGIN

async function touch(filePath) {
  try {
   
    await fs.access(filePath, fs.constants.F_OK);
    
    console.log('File already exists');
  } catch (error) {
    
    await fs.writeFile(filePath, '');
    console.log('File created');
  }
}

export { touch };

// END
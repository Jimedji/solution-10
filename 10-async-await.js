import fs from 'fs/promises';

// BEGIN
export async function exchange(file1, file2) {
    try {
      const content1 = await fs.readFile(file1, 'utf8');
      const content2 = await fs.readFile(file2, 'utf8');
  
      await fs.writeFile(file1, content2);
      await fs.writeFile(file2, content1);
    } catch (error) {
      console.error('Error exchanging files:', error);
    }
  }
// END
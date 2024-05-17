import fs from 'fs/promises';

// BEGIN
export async function getTypes(paths) {
    const results = await Promise.all(
      paths.map(async (path) => {
        try {
          const stats = await fs.stat(path);
          return stats.isDirectory() ? 'directory' : 'file';
        } catch (error) {
          return null;
        }
      })
    );
    return results;
  }
  
// END
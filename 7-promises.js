import fs from 'fs/promises';

// BEGIN
async function reverse(filePath) {
  try {

    const contents = await fs.readFile(filePath, 'utf8');
    const lines = contents.split('\n');
    const reversedLines = lines.reverse();
    const reversedContents = reversedLines.join('\n');
    await fs.writeFile(filePath, reversedContents);
    console.log(reversedContents);
  } catch (error) {
    console.error('Error:', error);
  }
}

export { reverse };
// END
const { mkdirSync, copyFileSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

// Resolve the input beside this script, regardless of the working directory.
const inputFile = join(__dirname, 'entry.png');
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
const outputFile = join(outputDirectory, 'entry.png');
copyFileSync(inputFile, outputFile);

const sourceBytes = readFileSync(inputFile);
const outputBytes = readFileSync(outputFile);
if (!outputBytes.equals(sourceBytes)) {
  throw new Error(`Output verification failed: ${outputFile} does not match ${inputFile}`);
}

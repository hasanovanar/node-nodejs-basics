import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const inputFilePath = path.join(__dirname, "files", "fileToCompress.txt");
  const outputFilePath = path.join(__dirname, "files", "archive.gz");

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);

  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();

import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const inputFilePath = path.join(__dirname, "files", "archive.gz");
  const outputFilePath = path.join(__dirname, "files", "fileToCompress.txt");

  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);

  const gunzip = createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();

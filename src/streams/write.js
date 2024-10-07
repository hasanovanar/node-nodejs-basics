import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  const stream = createWriteStream(filePath, { encoding: "utf-8" });

  process.stdin.pipe(stream);
};

await write();

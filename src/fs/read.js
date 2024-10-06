import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const fileContent = await readFile(filePath, {
      encoding: "utf-8",
    });
    console.log(fileContent);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();

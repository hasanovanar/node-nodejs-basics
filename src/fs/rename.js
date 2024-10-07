import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToWrongFile = path.join(__dirname, "files", "wrongFilename.txt");
const pathToProperFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    try {
      await fs.access(pathToProperFile);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }
    await fs.rename(pathToWrongFile, pathToProperFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();

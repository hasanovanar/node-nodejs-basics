import { readdir, stat } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToDir = path.join(__dirname, "files");

const list = async () => {
  try {
    const totalList = await readdir(pathToDir, { recursive: true });

    const filesArray = [];
    for (const item of totalList) {
      const pathToItem = path.join(pathToDir, item);
      const typeOfItem = await stat(pathToItem);

      if (typeOfItem.isFile()) {
        filesArray.push(item);
      }
    }

    console.log(filesArray);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();

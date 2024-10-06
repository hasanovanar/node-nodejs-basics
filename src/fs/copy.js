import { cp } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, "files");
const destDir = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await cp(srcDir, destDir, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();

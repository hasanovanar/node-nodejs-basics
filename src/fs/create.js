import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and young", {
      flag: "wx",
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();

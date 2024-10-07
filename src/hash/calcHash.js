import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

  const fileContent = await readFile(filePath);

  const hash = createHash("sha256").update(fileContent).digest("hex");

  console.log(hash);
};

await calculateHash();

import { Transform } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const reversedText = chunk.toString().trim().split("").reverse().join("");
      callback(null, reversedText + "\n");
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();

import fs from "fs";
import path from "path";

const DATA_DIR = path.join(
  process.cwd(),
  "data"
);

export function readStorage<T>(
  fileName: string
): T[] {
  try {
    const filePath = path.join(
      DATA_DIR,
      fileName
    );

    const content =
      fs.readFileSync(
        filePath,
        "utf8"
      );

    return JSON.parse(content);

  } catch (error) {

    console.error(
      `READ STORAGE ERROR: ${fileName}`
    );

    console.error(error);

    return [];
  }
}

export function writeStorage<T>(
  fileName: string,
  data: T[]
) {
  try {

    const filePath = path.join(
      DATA_DIR,
      fileName
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(
        data,
        null,
        2
      )
    );

  } catch (error) {

    console.error(
      `WRITE STORAGE ERROR: ${fileName}`
    );

    console.error(error);

  }
}
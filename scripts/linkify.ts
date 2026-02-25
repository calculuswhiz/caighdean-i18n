const input = `
11.7.2
11.7.3
`;

const outBuffer: string[] = [];

for (const line of input.split("\n")) {
  if (line.trim() === "")
    continue;

  if (line.includes('.') || /^\d+$/.test(line)) {
    const parts = line.split(".");
    const chapterNum = parts[0];

    outBuffer.push(
      `link:./chapter${chapterNum}.html#sec_${parts.join("_")}[${line}]`
    );
  } else if (line.includes("Tábla")) {
    const tableKey = line.split(" ")[1];
    const chapterNum = tableKey.slice(0, -1);
    outBuffer.push(
      `link:./chapter${chapterNum}.html#table${tableKey}[${line}]`
    );
  } else if (line.includes("Roghanna")) {
    outBuffer.push(
      `link:./tableOfOptions.html[Tábla na Roghanna]`
    );
  }
}

console.log(outBuffer.join(" "));

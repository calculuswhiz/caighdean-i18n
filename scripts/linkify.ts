const input = `
3.3.4.c
3.3.8.a
3.3.10
3.3.12
3.3.13
`;

const outBuffer: string[] = [];

for (const line of input.split("\n")) {
  if (line.trim() === "")
    continue;

  if (line.includes('.')) {
    const parts = line.split(".");
    const chapterNum = parts[0];

    outBuffer.push(
      `link:./chapter${chapterNum}.html#sec_${parts.join("_")}[${line}]`
    );
  } else if (line.includes("Tábla")) {
    const tableKey = line.split(" ")[1];
    const chapterNum = tableKey[0];
    outBuffer.push(
      `link:./chapter${chapterNum}.html#table${tableKey}[${line}]`
    );
  } else if (line.includes("Roghanna")) {
    outBuffer.push(
      `link:./tableOfOptions.html[Tábla&nbsp;na&nbsp;Roghanna]`
    );
  }
}

console.log(outBuffer.join(" "));

const input = `
3.1.2.d
3.3.1.iv
9.5.2.c
10.3.2.b.ii
Tábla 11G
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

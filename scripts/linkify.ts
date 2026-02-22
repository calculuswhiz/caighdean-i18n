const input = `
1.1.5.h
1.1.5.i
3.1.3
10.6.4.a.iii
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
      `link:./tableOfOptions.html[Tábla na Roghanna]`
    );
  }
}

console.log(outBuffer.join(" "));

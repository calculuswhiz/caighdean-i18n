const input = `
7.2.1.B
7.2.2.B
7.2.5.B
`;

const outBuffer: string[] = [];

for (const line of input.split("\n")) {
  if (line.trim() === "")
    continue;

  const parts = line.split(".");
  const chapterNum = parts[0];

  outBuffer.push(
    `link:./chapter${chapterNum}.html#sec_${parts.join("_")}[${line}]`
  );
}

console.log(outBuffer.join(" "));

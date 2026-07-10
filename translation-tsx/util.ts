export function range(start: number, end: number, step = 1) {
  const result = [];
  for (let i = start; i <= end; i += step)
    result.push(i);

  return result;
}

/** Runtime non-null assertion */
export function _nn<T>(val: T, message = 'Value is null or undefined'): NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error(message);
  }
  return val as NonNullable<T>;
}

const romanMap = {
  "1": 'i',
  "2": 'ii',
  "3": 'iii',
  "4": 'iv',
  "5": 'v',
  "6": 'vi',
  "7": 'vii',
  "8": 'viii',
  "9": 'ix',
  "10": 'x'
} as const;

type Range<T extends number, B extends number[] = []> = B["length"] extends T
  ? B
  : Range<T, [...B, [...B, 0]["length"]]>;

type RomanRange<T extends number, R = Range<T>, B extends string[] = []>
  = R extends [infer H extends number, ...infer Rest]
  ? (`${H}` extends keyof typeof romanMap
    ? RomanRange<R["length"], Rest, [...B, typeof romanMap[`${H}`]]>
    : never)
  : B;

export function romanCount<T extends number>(num: T): RomanRange<T> {
  return range(1, num)
    .map(n => {
      const trueKey = n.toString();
      if (trueKey in romanMap) {
        return _nn(
          romanMap[trueKey as keyof typeof romanMap],
          `No Roman numeral mapping for ${n}`
        );
      }
      throw new Error(`No Roman numeral mapping for ${n}`);
    }) as RomanRange<T>;
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
export function alphaRange(endLetter: string, uppercase = false): string {
  const endIndex = alphabet.indexOf(endLetter.toLowerCase());
  if (endIndex === -1)
    throw new Error(`Invalid end letter: ${endLetter}`);

  const letters = alphabet.slice(0, endIndex + 1);
  return uppercase ? letters.toUpperCase() : letters;
}
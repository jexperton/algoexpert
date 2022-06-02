export function knuthMorrisPrattAlgorithm(string: string, substring: string) {
  const pattern = getPattern(substring);
  let i = 0;
  let j = 0;
  while (i + substring.length - j <= string.length) {
    if (string[i] === substring[j]) {
      if (j === substring.length - 1) return true;
      i++;
      j++;
    } else if (j > 0) j = pattern[j - 1] + 1;
    else i++;
  }
  return false;
}

function getPattern(substring: string): number[] {
  const pattern = Array.from({ length: substring.length }, () => -1);
  let i = 1;
  let j = 0;
  while (i < substring.length) {
    if (substring[i] === substring[j]) pattern[i++] = j++;
    else if (j > 0) j = pattern[j - 1] + 1;
    else i++;
  }
  return pattern;
}

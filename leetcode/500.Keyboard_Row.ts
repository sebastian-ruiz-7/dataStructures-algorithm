function findWords(words: string[]): string[] {
  const firstRowSet = new Set([
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
  ]);
  const secondRowSet = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
  const thirdRowSet = new Set(["z", "x", "c", "v", "b", "n", "m"]);

  const result: string[] = [];

  for (const word of words) {
    const lowerWord = word.toLowerCase();
    const selectedRow = firstRowSet.has(lowerWord[0])
      ? firstRowSet
      : secondRowSet.has(lowerWord[0])
        ? secondRowSet
        : thirdRowSet.has(lowerWord[0])
          ? thirdRowSet
          : null;

    if (!selectedRow) continue;

    if (couldFormTheWordInTheRow(lowerWord, selectedRow)) {
      result.push(word);
    }
  }

  return result;
}

function couldFormTheWordInTheRow(word: string, rowSet: Set<string>): boolean {
  for (let i = 1; i < word.length; i++) {
    if (!rowSet.has(word[i])) return false;
  }

  return true;
}

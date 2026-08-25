/*
 * Un anagrama es una palabra creada a partir de la reordenación de las letras de otra palabra. Ej: saco - caso
 * Dado un array de strings, devuelve los anagramas agrupados. Cualquier orden es válido.
 *
 * Ejemplo:
 *  Input: words = ["saco", "arresto", "programa", "rastreo", "caso"].
 *  Output: [["saco", "caso"], ["arresto", "rastreo"], ["programa"]].
 */

const groupAnagrams = (words: string[]): string[][] => {
  const resultArray: string[][] = [];
  const hashMap = new Map<string, number>();

  for (let i = 0; i < words.length; i++) {
    console.log("word", words[i]);
    const wordToLowerCase = words[i].toLocaleLowerCase("es-MX").split("");

    const characterArray = wordToLowerCase.map((ch) => ch.charCodeAt(0));

    const orderedCharArray = characterArray.sort((a, b) => a - b);

    const hashKey = orderedCharArray.join("#");
    console.log("hash key", hashKey);

    const hashIndex = hashMap.get(hashKey);

    if (hashIndex != undefined) {
      resultArray[hashIndex].push(words[i]);
    } else {
      hashMap.set(hashKey, resultArray.length);
      resultArray[resultArray.length] = [words[i]];
    }
  }

  console.log(resultArray);
  return resultArray;
};

groupAnagrams(["saco", "arresto", "programa", "rastreo", "caso"]);

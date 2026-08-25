/**
 * Dado un método que recibe un String, comprobar si todos los caracteres del String son únicos, es decir, que no se repite ningún caracter.
 *
 * isUnique("abcde") // true
 * isUnique("abcdea") // false
 *
 */

export const isUnique = (str: string): boolean => {
  if (str.length === 0) {
    return true;
  }

  let result = true;
  const characterMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (!characterMap.get(character)) {
      characterMap.set(character, 1);
      continue;
    }

    //character found
    result = false;
    break;
  }

  return result;
};

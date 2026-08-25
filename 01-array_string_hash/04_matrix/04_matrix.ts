/*
 * Dada una matriz, escribe un algoritmo para establecer ceros en la fila F y columna C si existe un
 * 0 en la celda F:C
 *
 * Ejemplo:
 *  Input: 2 1 3 0 2
 *         7 4 1 3 8
 *         4 0 1 2 1
 *         9 3 4 1 9
 *
 *  Output: 0 0 0 0 0
 *          7 0 1 0 8
 *          0 0 0 0 0
 *          9 0 4 0 9
 */

export const transformedMatrix = (matrix: number[][]): number[][] => {
  const rowLegth = matrix[0].length;
  const columnMapIndex = new Map<number, number>();

  for (let i = 0; i < matrix.length; i++) {
    const currentRow = matrix[i];

    if (currentRow.length != rowLegth) {
      throw new Error("Mismatch row length");
    }

    for (let j = 0; j < currentRow.length; j++) {
      if (currentRow[j] === 0) {
        const newZeroRow = Array(currentRow.length).fill(0);
        matrix[i] = newZeroRow;
        if (columnMapIndex.get(j) == undefined) {
          columnMapIndex.set(j, 1);
        }
        break;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (const columnIndex of columnMapIndex.keys()) {
      matrix[i][columnIndex] = 0;
    }
  }

  return matrix;
};

console.log([
  [2, 1, 3, 0, 2],
  [7, 4, 1, 3, 8],
  [4, 0, 1, 2, 1],
  [9, 3, 4, 1, 9],
]);

console.log(
  transformedMatrix([
    [2, 1, 3, 0, 2],
    [7, 4, 1, 3, 8],
    [4, 0, 1, 2, 1],
    [9, 3, 4, 1, 9],
  ]),
);

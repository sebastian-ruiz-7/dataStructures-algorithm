/*
 * Dado un array de números enteros y un target, retorna los índices de dos
 * números para los que la suma de ambos sea igual al target.
 *
 * Puedes asumir que hay solamente una solución.
 *
 * Ejemplo 1:
 *  Input: nums = [9,2,5,6], target = 7
 *  Output: [1,2]
 *  Explicación: nums[1] + nums[2] == 7, devolvemos [1, 2].
 *
 * Ejemplo 2:
 *  Input: nums = [9,2,5,6], target = 100
 *  Output: null
 */

export const twoSum = (nums: number[], target: number) => {
  let currentValue = nums[0];

  let isEqualIndex = null;

  for (let i = 1; i < nums.length; i++) {
    if (currentValue + nums[i] === target) {
      isEqualIndex = i;
      break;
    }

    currentValue = nums[i];
  }

  if (isEqualIndex === null) {
    return isEqualIndex;
  }

  const array = [isEqualIndex - 1, isEqualIndex];

  return array;
};

twoSum([9, 2, 5, 6], 7);

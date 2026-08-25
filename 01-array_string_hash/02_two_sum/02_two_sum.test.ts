import { describe, expect, it } from "vitest";
import { twoSum } from "./02_two_sum";

describe("isUnique", () => {
  const array = [9, 2, 5, 6];
  it("validate sum of two if target is 7", () => {
    const resultArray = twoSum(array, 7) as number[];

    console.log(resultArray);

    expect(Array.isArray(resultArray)).toBe(true);
    expect(resultArray?.length).toBe(2);

    expect(resultArray[0]).toBe(1);
    expect(resultArray[1]).toBe(2);
  });

  it("return null", () => {
    const resultArray = twoSum(array, 50);

    expect(resultArray).toBeNull();
  });
});

import { describe, expect, it } from "vitest";
import { isUnique } from "./01_is_unique";

describe("isUnique", () => {
  it("returns true when all characters are unique", () => {
    expect(isUnique("abcde")).toBe(true);
  });

  it("returns false when a character repeats", () => {
    expect(isUnique("abcdea")).toBe(false);
  });

  it("returns true for an empty string", () => {
    expect(isUnique("")).toBe(true);
  });

  it("returns trur for 'aAbBcCdDeE'", () => {
    expect(isUnique("aAbBcCdDeE")).toBe(true);
  });
});

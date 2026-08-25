import { describe, expect, it } from "vitest";
import { transformedMatrix } from "./04_matrix";

describe("transformedMatrix", () => {
	it("sets row and column to zero for each zero cell", () => {
		const input = [
			[2, 1, 3, 0, 2],
			[7, 4, 1, 3, 8],
			[4, 0, 1, 2, 1],
			[9, 3, 4, 1, 9],
		];

		const expected = [
			[0, 0, 0, 0, 0],
			[7, 0, 1, 0, 8],
			[0, 0, 0, 0, 0],
			[9, 0, 4, 0, 9],
		];

		expect(transformedMatrix(input)).toEqual(expected);
	});

	it("returns same matrix when there are no zeros", () => {
		const input = [
			[1, 2],
			[3, 4],
		];

		const expected = [
			[1, 2],
			[3, 4],
		];

		expect(transformedMatrix(input)).toEqual(expected);
	});

	it("handles a matrix where first row has a zero", () => {
		const input = [
			[1, 0, 3],
			[4, 5, 6],
			[7, 8, 9],
		];

		const expected = [
			[0, 0, 0],
			[4, 0, 6],
			[7, 0, 9],
		];

		expect(transformedMatrix(input)).toEqual(expected);
	});

	it("handles a matrix where first column has a zero", () => {
		const input = [
			[1, 2, 3],
			[0, 5, 6],
			[7, 8, 9],
		];

		const expected = [
			[0, 2, 3],
			[0, 0, 0],
			[0, 8, 9],
		];

		expect(transformedMatrix(input)).toEqual(expected);
	});

	it("handles single row matrix", () => {
		const input = [[1, 0, 3, 4]];
		const expected = [[0, 0, 0, 0]];

		expect(transformedMatrix(input)).toEqual(expected);
	});

	it("handles single column matrix", () => {
		const input = [[1], [0], [3]];
		const expected = [[0], [0], [0]];

		expect(transformedMatrix(input)).toEqual(expected);
	});

	it("throws for ragged matrix rows", () => {
		const input = [
			[1, 2, 3],
			[4, 5],
		];

		expect(() => transformedMatrix(input)).toThrow("Mismatch row length");
	});
});

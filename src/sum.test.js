import { sum } from "./sum";

describe("sum", () => {
  it("return sum", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

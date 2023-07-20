import { getDateFromString } from "../getDateFromString";

describe("Utils testing", () => {
  // "2022-08-28T16:54:00Z",
  test("getDateFromString is returning only date", () => {
    // split by "T"
    expect(getDateFromString("2022-08-28T16:54:00Z")).toBe("2022-08-28");
  });
});

import randomOptions from "./randomOptions";

describe("randomOptions()", () => {
  test("randomOptions to return rock", () => {
    global.Math.random = () => 0.1;
    expect(randomOptions()).toEqual("rock");
  });
  test("randomOptions to return paper", () => {
    global.Math.random = () => 0.4;
    expect(randomOptions()).toEqual("paper");
  });
  test("randomOptions to return rock", () => {
    global.Math.random = () => 0.9;
    expect(randomOptions()).toEqual("scissors");
  });
});

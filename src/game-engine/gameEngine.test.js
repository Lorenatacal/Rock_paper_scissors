import choseWinner from "./gameEngine";

describe("choseWinner()", () => {
  test("to be defined", () => {
    expect(typeof choseWinner).toBe("function");
  });
  test("should return Draw if both user and computer chose paper", () => {
    let userValue = "paper";
    let computerValue = "paper";
    let winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
  test("should return Draw if both user and computer chose scissor", () => {
    let userValue = "scissor";
    let computerValue = "scissor";
    let winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
  test("should return Draw if both user and computer chose rock", () => {
    let userValue = "rock";
    let computerValue = "rock";
    let winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
});

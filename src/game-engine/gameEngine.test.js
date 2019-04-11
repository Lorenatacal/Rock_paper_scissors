import choseWinner from "./gameEngine";

describe("choseWinner()", () => {
  let userValue;
  let computerValue;
  let winner;
  test("to be defined", () => {
    expect(typeof choseWinner).toBe("function");
  });
  test("should return Draw if both user and computer chose paper", () => {
    userValue = "paper";
    computerValue = "paper";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
  test("should return Draw if both user and computer chose scissor", () => {
    userValue = "scissor";
    computerValue = "scissor";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
  test("should return Draw if both user and computer chose rock", () => {
    userValue = "rock";
    computerValue = "rock";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
  test("should return 'User won' if user choses rock and computer scissor", () => {
    userValue = "rock";
    computerValue = "scissor";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("User won");
  });
  test("should return 'User won' if user choses scissor and computer paper", () => {
    userValue = "scissor";
    computerValue = "paper";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("User won");
  });
  test("should return 'User won' if user choses paper and computer rock", () => {
    userValue = "paper";
    computerValue = "rock";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("User won");
  });
  test("should return 'Computer won' if computer choses rock and user scissor", () => {
    userValue = "scissor";
    computerValue = "rock";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Computer won");
  });
  test("should return 'Computer won' if computer choses scissor and user paper", () => {
    userValue = "paper";
    computerValue = "scissor";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Computer won");
  });
  test("should return 'Computer won' if computer choses paper and user rock", () => {
    userValue = "rock";
    computerValue = "paper";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Computer won");
  });
});

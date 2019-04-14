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
  test("should return Draw if both user and computer chose scissors", () => {
    userValue = "scissors";
    computerValue = "scissors";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
  test("should return Draw if both user and computer chose rock", () => {
    userValue = "rock";
    computerValue = "rock";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Draw");
  });
  test("should return 'User won' if user choses rock and computer scissors", () => {
    userValue = "rock";
    computerValue = "scissors";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("User won");
  });
  test("should return 'User won' if user choses scissors and computer paper", () => {
    userValue = "scissors";
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
  test("should return 'Computer won' if computer choses rock and user scissors", () => {
    userValue = "scissors";
    computerValue = "rock";
    winner = choseWinner(userValue, computerValue);
    expect(winner).toEqual("Computer won");
  });
  test("should return 'Computer won' if computer choses scissors and user paper", () => {
    userValue = "paper";
    computerValue = "scissors";
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

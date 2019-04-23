import choseWinner from "./gameEngine";

describe("choseWinner()", () => {
  let userValue;
  let computerValue;
  let winner;
  let userScore = 0;
  let computerScore = 0;
  test("to be defined", () => {
    expect(typeof choseWinner).toBe("function");
  });
  test("should return Draw if both user and computer chose paper", () => {
    userValue = "paper";
    computerValue = "paper";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("Draw");
    expect(winner.userScore).toEqual(0);
    expect(winner.computerScore).toEqual(0);
  });
  test("should return Draw if both user and computer chose scissors", () => {
    userValue = "scissors";
    computerValue = "scissors";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("Draw");
    expect(winner.userScore).toEqual(0);
    expect(winner.computerScore).toEqual(0);
  });
  test("should return Draw if both user and computer chose rock", () => {
    userValue = "rock";
    computerValue = "rock";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("Draw");
    expect(winner.userScore).toEqual(0);
    expect(winner.computerScore).toEqual(0);
  });
  test("should return 'User won' if user choses rock and computer scissors", () => {
    userValue = "rock";
    computerValue = "scissors";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("User won");
    expect(winner.userScore).toEqual(1);
    expect(winner.computerScore).toEqual(0);
  });
  test("should return 'User won' if user choses scissors and computer paper", () => {
    userValue = "scissors";
    computerValue = "paper";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("User won");
    expect(winner.userScore).toEqual(1);
    expect(winner.computerScore).toEqual(0);
  });
  test("should return 'User won' if user choses paper and computer rock", () => {
    userValue = "paper";
    computerValue = "rock";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("User won");
    expect(winner.userScore).toEqual(1);
    expect(winner.computerScore).toEqual(0);
  });
  test("should return 'Computer won' if computer choses rock and user scissors", () => {
    userValue = "scissors";
    computerValue = "rock";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("Computer won");
    expect(winner.userScore).toEqual(0);
    expect(winner.computerScore).toEqual(1);
  });
  test("should return 'Computer won' if computer choses scissors and user paper", () => {
    userValue = "paper";
    computerValue = "scissors";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("Computer won");
    expect(winner.userScore).toEqual(0);
    expect(winner.computerScore).toEqual(1);
  });
  test("should return 'Computer won' if computer choses paper and user rock", () => {
    userValue = "rock";
    computerValue = "paper";
    userScore;
    computerScore;
    winner = choseWinner(userValue, computerValue);
    expect(winner.winner).toEqual("Computer won");
    expect(winner.userScore).toEqual(0);
    expect(winner.computerScore).toEqual(1);
  });
});

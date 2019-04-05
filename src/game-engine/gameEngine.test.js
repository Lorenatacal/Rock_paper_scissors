import choseWinner from "./gameEngine";

test("choseWinner() to be defined", () => {
  expect(typeof choseWinner).toBe("function");
});
test("choseWinner() should console.log Draw if both user and computer chose paper", () => {
  let userValue = "paper";
  let computerValue = "paper";
  let winner = choseWinner(userValue, computerValue);
  expect(winner).toEqual("Draw");
});

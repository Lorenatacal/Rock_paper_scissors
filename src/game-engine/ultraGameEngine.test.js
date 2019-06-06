import gameWinner from "./ultraGameEngine";

test("gameWinner() should retun 1 if we pass 'scissorsrock' as argument", () => {
  expect(gameWinner("scissorsrock")).toEqual(1);
});
test("gameWinner() should return -1 if we pass 'rockscissors' as argument", () => {
  expect(gameWinner("rockscissors")).toEqual(-1);
});

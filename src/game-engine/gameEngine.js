export default function choseWinner(
  userValue,
  computerValue,
  userScore = 0,
  computerScore = 0
) {
  if (
    (userValue === "rock" && computerValue === "scissors") ||
    (userValue === "scissors" && computerValue === "paper") ||
    (userValue === "paper" && computerValue === "rock")
  ) {
    return {
      winner: "User won",
      userScore: userScore + 1,
      computerScore
    };
  }
  if (
    (userValue === "scissors" && computerValue === "rock") ||
    (userValue === "paper" && computerValue === "scissors") ||
    (userValue === "rock" && computerValue === "paper")
  ) {
    return {
      winner: "Computer won",
      userScore,
      computerScore: computerScore + 1
    };
  }
  return {
    winner: "Draw",
    userScore,
    computerScore
  };
}

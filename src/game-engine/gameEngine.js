export default function choseWinner(userValue, computerValue) {
  if (
    (userValue === "rock" && computerValue === "scissor") ||
    (userValue === "scissor" && computerValue === "paper") ||
    (userValue === "paper" && computerValue === "rock")
  ) {
    return "User won";
  }
  if (
    (userValue === "scissor" && computerValue === "rock") ||
    (userValue === "paper" && computerValue === "scissor") ||
    (userValue === "rock" && computerValue === "paper")
  ) {
    return "Computer won";
  }
  return "Draw";
}

export default function choseWinner(userValue, computerValue) {
  if (
    (userValue === "paper" && computerValue === "paper") ||
    (userValue === "scissor" && computerValue === "scissor") ||
    (userValue === "rock" && computerValue === "rock")
  ) {
    return "Draw";
  }
  if (
    (userValue === "rock" && computerValue === "scissor") ||
    (userValue === "scissor" && computerValue === "paper") ||
    (userValue === "paper" && computerValue === "rock")
  ) {
    return "User won";
  }
  if (userValue === "scissor" && computerValue === "rock") {
    return "Computer won";
  }
}

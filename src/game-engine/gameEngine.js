export default function choseWinner(userValue, computerValue) {
  if (userValue === "paper" && computerValue === "paper") {
    return "Draw";
  }
  if (userValue === "scissor" && computerValue === "scissor") {
    return "Draw";
  }
  if (userValue === "rock" && computerValue === "rock") {
    return "Draw";
  }
  if (
    (userValue === "rock" && computerValue === "scissor") ||
    (userValue === "scissor" && computerValue === "paper") ||
    (userValue === "paper" && computerValue === "rock")
  ) {
    return "User won";
  }
}

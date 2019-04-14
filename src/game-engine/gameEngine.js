export default function choseWinner(userValue, computerValue) {
  // console.log(userValue, "user", computerValue, "comp");
  if (
    (userValue === "rock" && computerValue === "scissors") ||
    (userValue === "scissors" && computerValue === "paper") ||
    (userValue === "paper" && computerValue === "rock")
  ) {
    console.log(userValue, "user", computerValue, "comp");
    return "User won";
  }
  if (
    (userValue === "scissors" && computerValue === "rock") ||
    (userValue === "paper" && computerValue === "scissors") ||
    (userValue === "rock" && computerValue === "paper")
  ) {
    console.log({ userValue, computerValue });
    return "Computer won";
  }
  return "Draw";
}

export default function gameWinner(option) {
  let rules = {
    scissorsrock: 1,
    rockscissors: -1
  };
  return rules[option];
}

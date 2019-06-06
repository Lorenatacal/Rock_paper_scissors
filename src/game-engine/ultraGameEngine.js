export default function gameWinner(option) {
  let rules = {
    scissorsrock: 1,
    rockscissors: -1,
    rockrock: 0
  };
  return rules[option];
}

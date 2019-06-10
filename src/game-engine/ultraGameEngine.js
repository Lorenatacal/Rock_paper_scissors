export const rules = {
  scissorsrock: 1,
  scissorspaper: 1,
  paperrock: 1,
  rockscissors: -1,
  paperscissors: -1,
  rockpaper: -1,
  rockrock: 0,
  scissorsscissors: 0,
  paperpaper: 0
};

export default function gameWinner(option) {
  return rules[option];
}

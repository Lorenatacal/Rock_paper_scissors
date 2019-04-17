let options = ["rock", "paper", "scissors"];

export default function randomOptions() {
  const index = Math.random() * options.length;
  return options[Math.floor(index)];
}

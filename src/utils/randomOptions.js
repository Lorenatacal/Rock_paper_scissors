let options = ["rock", "paper", "scissorss"];

export default function randomOptions() {
  const index = Math.random() * options.length;
  return options[Math.floor(index)];
}

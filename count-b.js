function countBs(string) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") counted += 1;
  }
  return counted;
}

console.log(countBs("Baba Bolaji Bu ni Bombay."));

let words = ['non', 'banan', 'mashina', 'asal', 'olma', 'Aziza', 'gul'];

let withN = [];
let withoutN = [];

for (let word of words) {
  if (word.toLowerCase().includes('n')) {
    withN.push(word);
  } else {
    withoutN.push(word);
  }
}

console.log(withN, "'n' harfi ishtirok etgan so'zlar");
console.log(withoutN, "'n' harfi ishtirok etmagan so'zlar");
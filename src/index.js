const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  return expr
    .split('**********')
    .map((word) => {
      word = String(word);
      const arr = [];
      for (let i = 0; i < word.length / 10; i++) {
        let element = word
          .slice(i * 10, i * 10 + 10)
          .replaceAll('10', '.')
          .replaceAll('11', '-')
          .replaceAll(0, '');
        arr.push(MORSE_TABLE[element]);
      }
      return arr.join('');
    })
    .join(' ');
}

module.exports = {
  decode,
};

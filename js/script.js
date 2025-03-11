const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
};
const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
};

function getLatinCharacterList(string) {
    return string.split("");
}

function getMorseCharacterList(string) {
    return string.split(" ");
}

function translateLatinCharacter(character) {
    for (const char in latinToMorse) {
        if (char === character) {
            return latinToMorse[char];
        }
    }
    return "/";
}

function translateMorseCharacter(character) {
    for (const char in morseToLatin) {
        if (char === character) {
            return morseToLatin[char];
        }
    }
    return " ";
}

function encode(string) {
    const arrayOfString = getLatinCharacterList(string);

    arrayOfString.forEach((char) => {
        console.log(translateLatinCharacter(char));
    });
}

function decode(string) {
    const arrayOfString = getMorseCharacterList(string);

    arrayOfString.forEach((char) => {
        console.log(translateMorseCharacter(char));
    });
}

encode("HELLO WORLD");
decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
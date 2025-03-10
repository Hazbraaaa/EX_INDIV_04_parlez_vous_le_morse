const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
};

function getLatinCharacterList(string) {
    return string.split("");
}

function translateLatinCharacter(character) {
    for (const char in latinToMorse) {
        if (char === character) {
            return latinToMorse[char];
        }
    }
}
function encode(string) {
    const arrayOfString = getLatinCharacterList(string);

    arrayOfString.forEach((char) => {
        console.log(translateLatinCharacter(char));
        
    })
}

encode("HELLO");
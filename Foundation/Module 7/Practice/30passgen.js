
function generatePassword(lenght, includeSymbols, includeUpperCase, includeLowerCase, includeNumbers) {

    const LowerCaseChars = "abcdefghijklmnopqrstuvwxy";
    const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumbersChars = "0123456789";
    const SymbolsChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? LowerCaseChars : "";

    allowedChars += includeUpperCase ? UpperCaseChars : "";

    allowedChars += includeNumbers ? NumbersChars : "";

    allowedChars += includeSymbols ? SymbolsChars : "";


    if(length<=0){
        return '(password length must be at least 1)`;
    }
    if(allowedChars.length===0){
        return '(At least 1 set of character needs to be selected)`;
    }
    return '';
}

const passwordLength = 12;
const includeSymbols = true;
const includeLowerCase = true;
const includeUpperCase = true;
const inlcudeNumbers = true;

const password = generatePassword(
    passwordLength,
    includeSymbols,
    includeLowerCase,
    includeUpperCase,
    inlcudeNumbers);

console.log('Generated password ${password}');
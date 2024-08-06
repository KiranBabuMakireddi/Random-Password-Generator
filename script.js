const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789"
const specialCharacters="@%+/!+=;/?>.<,&%^()}[{]";
const allChars=upperCase+lowerCase+specialCharacters;
let password=document.getElementById("password");
let length=12;
function PasswordGen(){
    let passcode="";
    passcode+=upperCase[Math.floor(Math.random()*upperCase.length)];
    passcode+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    passcode+=numbers[Math.floor(Math.random()*numbers.length)];
    passcode+=specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
    while(passcode.length<length){
        passcode+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    password.value=passcode;
}
function copyPassword(){
    password.select();
    document.execCommand(copy);
}
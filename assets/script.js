// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate the password
function generatePassword() {

    var passwordOut = ''; //implicitly declare string 

    rules = getUserParams() //get user input

    switch (rules) {
        case -1: //Failed due to prompt being cancelled
            window.alert('Please enter a valid password Length.');
            return '';
        case -2: //Failed due to incorrect value for length being provided
            window.alert("Please enter a valid length for the password between 8-128.\nPlease try again...");
            return '';
        case -3: //failed due to less than one ruleset being selected
            window.alert("You must select at least one type of character set for the password.\nPlease try again...");
            return '';
        default:
            break; //if object returned, continue       
    }

    //print rules
    console.log(rules);

    //Don't declare dictionary object until required
    const dictionary = {
        lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',],
        uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
        numeric: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
        //excluded whitespace from this list for possible ambiguity
        special: ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',],

        constructPasswordString: function (rulesIn) {
            let passwordString = [];
            if(rulesIn.lower){
                passwordString = passwordString.concat(this.lowercase);
            }
            if(rulesIn.upper){
                passwordString = passwordString.concat(this.uppercase);
            }
            if(rulesIn.numeric){
                passwordString = passwordString.concat(this.numeric);
            }
            if(rulesIn.numeric){
                passwordString = passwordString.concat(this.special);
            }
            
            return passwordString;
        },

    };

    //build a string which contains all possible characters for the password according the user selections
    let passwordOptions = dictionary.constructPasswordString(rules);

    //Log to validate password options array
    console.log(passwordOptions);

    //build password from possible options
    for(let i = 0; i < rules.length; i++)
    {
        passwordOut += passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    }

    return passwordOut;
}

// function constructPasswordString(rules, dictionary){

// }


function getUserParams() {
    var passwordRules = {
        length: 0,
        lower: false,
        upper: false,
        numeric: false,
        special: false,
    };

    var pwLength = window.prompt("How long do you want your password to be?\nNOTE: Password must be between 8 and 128 characters long")
    if (pwLength === null) {
        return -1; //User hit cancel
    } else if (isNaN(parseInt(pwLength)) || parseInt(pwLength) < 8 || parseInt(pwLength) > 128) {
        return -2;
    } else {
        passwordRules.length = parseInt(pwLength);
    };

    passwordRules.lower = window.confirm("Do you want Lower Case letters (e.g. abcd) in your password?");
    passwordRules.upper = window.confirm("Do you want Upper Case letters (e.g. ABCD) in your password?");
    passwordRules.numeric = window.confirm("Do you want numbers (e.g. 1234) in your password?");
    passwordRules.special = window.confirm("Do you want special characters (e.g. #$%^) in your password?");

    if (!passwordRules.lower && !passwordRules.upper && !passwordRules.numeric && !passwordRules.special) {
        return -3;
    }

    return passwordRules;

}

//get user parameters
//  password is no shorter than 8 characters and no more than 128 characters
//  password must contain a non-zero number of these categories of lower, upper, numeric, special char
//  



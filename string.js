var exports = module.exports = {};

function PasswordMessage(m){
    this.name = 'Password Message';
    this.message = m;
}
function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(character<min || character>max){
        return false;
    }
    else{
        return false;
    }
}
exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}
exports.containsUpper =function(str){
    let hasUpper = FALSE;
    try{
        for(let x=0;x<str.length;x++){
            if(inRange(str>=65 && <=90)=true){
            hasUpper = true;
            throw new PasswordMessage("Password has an uppercase letter.");
        }
    }
        if(hasUpper = FALSE){
            throw new PasswordMessage("Password does not have an uppercase letter.");
        }
    }
        catch(e){
            console.log(e.name+": "+e.message);
            return hasUpper;
    }
}
exports.containsLower =function(str){
    let hasLower = FALSE;
    try{
        for(let x=0;x<str.length;x++){
            if(inRange(str>=97 && <=122)=true){
            hasLower = true;
            throw new PasswordMessage("Password has an lowercase letter.");
        }
    }
        if(hasLower = FALSE){
            throw new PasswordMessage("Password does not have an lowercase letter.");
        }
    }
        catch(e){
            console.log(e.name+": "+e.message);
            return hasLower;
    }
}
exports.containsNumerical =function(str){
    let hasNumerical = FALSE;
    try{
        for(let x=0;x<str.length;x++){
            if(inRange(str>=48 && <=57)=true){
            hasNumerical = true;
            throw new PasswordMessage("Password has an numerical letter.");
        }
    }
        if(hasNumerical = FALSE){
            throw new PasswordMessage("Password does not have an numerical letter.");
        }
    }
        catch(e){
            console.log(e.name+": "+e.message);
            return hasNumerical;
    }
}


exports.containsSpecial =function(str){

}




function reverseString(string){
    if (string.length <= 1){
        return string.charAt(0);
    }

   //TO VIEW CALLSTACK console.log(string + " " + string.charAt(0));

    return reverseString(string.slice(1)) + string[0]; 

}


console.log(reverseString("Hello"));
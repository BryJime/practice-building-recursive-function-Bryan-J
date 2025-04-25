


function reverseString(string){
    if (string.length <= 1){
        return string.charAt(0);
    }

   //TO VIEW CALLSTACK console.log(string + " " + string.charAt(0));

    return reverseString(string.slice(1)) + string[0]; 

}


console.log(reverseString("Hello"));



/* COMMENTS FOR Practice Solution: Functions and Scope - 4 ASSIGNMENT:

I notice that in the practice solution my base case is different. 
In my own code I return the first character in the string at the index 0. 
And when the recursive case is called it slices the character at index 0 
and returns all the characters after the 1st index peeling off one character at a time. 
The characters taken out are added recursively, reversing the string. 
In the solution the recursive case returns the last character in the length of the 
string and then adds the rest of the string recursively by slicing the string by each 
character. 

This tells me that even though my code was different, the solution offered a 
different approach that I wouldn't have thought of. They ultimately do the same thing 
but having a different perspective is interesting to see. 

*/
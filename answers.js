// First comment

// function takes a string and returns the first character of the string.

function firstCharacter(str) {
    return str[0];
}

console.log(firstCharacter("hello"));

// function that takes a string and returns the last character of a string


function lastCharacter(str) {
    return str[str.length-1];
}

console.log(lastCharacter("hello"));

//function that takes a string and a number, and returns the character at the position represented by the number.

function stringNumber(str, num) {
    return str[num-1];
}

console.log(stringNumber("hello", 2));

//function that takes two numbers and adds them together.

function add(num1,num2) {
    return num1 + num2;
}

console.log(add(2,3));

// There is a reference error if I do not use a number or if I use a string it
// concatenates the strings.

// function that takes two numbers and multiplies them together. 

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2,3));

// Passing something other than a number results in NaN

function calculateWithString(num1,num2,str) {
    if (str === "add") {
        return num1 + num2;
    } 
    else if (str === "subtract") {
            return num1 - num2
        } 
    else if (str === "mult") {
        return num1 * num2;
    }
    else if (str ==="div") {
        return num1 / num2;
    } else {
        return 0;
    }
}

console.log(calculateWithString(3,4,'multi'));

// function that takes a string and a number, and returns the string repeated that many number of times

function stringRepeat(str,num) {
    var arrayOfStrings = [];
    for (var i=0; i<num; i+=1) {
        arrayOfStrings.push(str);
    }
    return arrayOfStrings.join('');
}

// function that takes a string, and returns the reverse of that string

function reverse(str) {
    var reversedStr = "";
    for (var i=str.length-1; i>=0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;

}

// function that takes a number and returns the factorial of a number. 

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    var numbers = num;
    for (var i=num-1; i>=1; i--) {
        numbers = numbers * i;
        
    }
    return numbers;
}
// Create a variable to store the factorial
// Set this variable to be equivalent to num
// Multiply it by num - 1
// Repeat, until num = 1

//function that takes a phrase as a string, and returns the longest word in that phrase. 

function longestWord(phrase) {
    var arrStrings = phrase.split(' ');
    console.log(arrStrings);
    var longestSoFar = "";
    for (var i=0; i<arrStrings.length; i++) {
        if (arrStrings[i].length > longestSoFar.length) {
            longestSoFar = arrStrings[i];
        }
    }
     return longestSoFar; 
}

// function that takes a phrase, and returns the same phrase with every word capitalized.

function capitalized(phrase) {
    var lowerCase = phrase.toLowerCase();
    var phraseArray = lowerCase.split(' ');
    var firstLetterCapital = "";
    var restOfWord = "";
    var capitals = "";
    for (var i=0; i<phraseArray.length; i++) {
       firstLetterCapital = phraseArray[i][0].toUpperCase();
       restOfWord = phraseArray[i].substring(1);
       capitals = capitals + " " + firstLetterCapital + restOfWord; 
       
       
    }
    return capitals;
}
console.log(capitalized("hEllo wOrld").trim());

// function that takes an array and returns the largest number of the array

function largestNumber(arr) {
    var largest = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
        return largest;
   
}

console.log(largestNumber([1,2,3,10,2,3,6,4]));

// Write a function that takes an array, and returns a filtered array. The filtered array should only contain the truthy values from the initial array.

function truthyFilter(arr) {
    var filteredArray = [];
    for (var i=0; i<arr.length; i++) {
        if (arr[i]) {
            filteredArray.push(arr[i]); 
        }
    }
    return filteredArray;
    
}

console.log(truthyFilter([2,false,3,9,0,1]));

// function that takes an array of numbers, and returns the sum of all the numbers in the array

function sumArray(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3]));


// function that takes two arrays, and returns an array of all elements that are only in one array

function findUniqueElements(arr1, arr2) {
    var uniqueNumbers = [];
    for (var i=0; i<arr1.length; i++) {
           if (arr2.indexOf(arr1[i]) === -1) {
               uniqueNumbers.push(arr1[i]);
           }
    }
    for (var i=0; i<arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            uniqueNumbers.push(arr2[i]);
        }
    }
    return uniqueNumbers;
}

console.log(findUniqueElements([1,2,3],[1,2,4,5]));

// function that takes an array and a function as arguments. The function should return a new array that maps every element of the input array by passing it through the function you received

function map(arr, func) {
    var newArray = [];
    for (var i=0; i<arr.length; i++) {
         newArray.push(func(arr[i]));
    }
    return newArray;
}

console.log(map([1,2,3], function double(num){ return num * 2; }));





// 1-using + operator combine your partner first and last name .

function combine(str1, str2) {
  return str1 + " " + str2;
}
// 2-find if the number 13 is a multiple of 3 or not.

const isMultipleOf3 = (num) => {
  const div = parseInt(num / 3);

  return num === div * 3;
};

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
var ages = [13, 14, 13, 15, 16, 17, 19, 13, 16, 15];
let sum = 0;
for (age in ages) {
  sum += ages[age];
}
var longuer = ages.length;
console.log(sum / longuer);

// 4-calculate your age in seconds.
// 1 - Write functions larger and smaller that each accept two strings as arguments,
// and return the larger and smaller strings, respectively

function AgesInSeconds(age) {
  const ageinsecond = age * 365 * 24 * 60 * 60;
  return ageinsecond;
}

console.log(AgesInSeconds(15));

// 1 - Write functions larger and smaller that each accept two strings as arguments,
// and return the larger and smaller strings, respectively

function Larger(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}
function Larger(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

// 2 - Write a function called counter that, when invoked, always returns a number that
// is one more than the previous invocation.
// For instance:

function counting(repeat) {
  let result = [];
  for (let i = 1; i < repeat + 1; i++) {
    result.push(i);
  }
  result.toString();
  return result;
}

// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
// counting(3); // => '1, 2, 3'

// 3- Write a function shortestWord that works like longestWord,
// but returns the shortest word instead.

function shortestWord() {
if (str1.length > str2.length) {
          return str1;
        } else {
          return str2;
        }
      
function Larger(str1, str2) {
if (str1.length > str2.length) {
          return str1;
        } else {
          return str2;
        }
      }
  
}

// 1 - Complete the function cube that returns the cube of x:

function cube(a) {
  return a * a * a;
}
console.log(cube(3));

// 2 - Write a function sameLength that accepts two strings as arguments,
// and returns true if those strings have the same length, and false otherwise.

function sameLength(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

// 3 - Write a function called scoreToGrade that accepts a number as a parameter
// and returns a string representing a letter grade corresponding to that score.

function scoreToGrade(code) {
  if (code >= 14 && code <= 20) {
    return "A";
  } else if (code < 14 && code > 12) {
    return "B";
  } else if (code < 12 && code > 10) {
    return "C";
  } else if (code < 10 && code > 8) {
    return "D";
  } else if (code < 8) {
    return "F";
  }
}

console.log(scoreToGrade(13));

// Repeating a String n Times: Let's write a function called repeatString that
//  takes two parameters: a string str, which is the string to be repeated,
// and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

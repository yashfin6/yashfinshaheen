/*Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.*/

const states = ['Jharkhand', 'delhi', 'uttarakhand', 'Uttar Pradesh', 'mumbai', 'karnatka','assam',];

const statesWithoutVowels = states.filter(state => !(/[aeiouAEIOU]/.test(state[0])));

console.log(statesWithoutVowels);


/*Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.*/

const str = 'I love my India';
const reverseWords = (str='') => {
const strArr = str.split(' ');
strArr.reverse();
const reversedStr = strArr.join(' ');
return reversedStr;
};
console.log(reverseWords(str));

/*Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/

let string = 'INDIA';
string = string.split('');
string.splice(3,0,'O', 'N', 'E', 'S');
string = string.join('');

console.log(string);

/*Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.*/

const findlettertype = (str) => {
    const result = { Vowels: 0, Consonants : 0 }
    const VOWELS = ["a","e","i","o","u"]
    
    for(let char of str){
      if(VOWELS.includes(char.toLowerCase())){
        result["Vowels"] = result["Vowels"] + 1
      }else {
        result["Consonants"] = result["Consonants"] + 1
      }
    }
    
    return result
  }
  
  console.log(findlettertype("Archi Snehi"))

  /*Q6) inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5.*/

let Arr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result = Arr.filter(num => num > 5);

console.log(result);

/*Q7) const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];
Use array.map and array.reduce.*/

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    const average = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log(output);

/*Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.*/

let n = 1234;

function getSum(n) {
    let sum = 0;
    while (n > 0 || sum > 9) {
         if(n == 0) { 
            n = sum; 
            sum = 0; 
         } 
         sum = sum + n % 10;
         n = Math.floor(n / 10);
    }
    return sum;
}
console.log(getSum(n));

/*Q9) Write a function to count the number of words in a paragraph.*/

function countWords(sentence) {
    
    let count = 1;
 
    for (let char of sentence) {
        if (char === ' ') {
            count++;
        }
    }
 
    return count;
}
 
let sentence = "hello world";
console.log("Number of words:", countWords(sentence));

/*Q10) Write a function to reverse a string.
Input - Hello
Outpur - olleH*/
function reverseString(str) {
    const strRev =  str.split('').reverse().join('');
    console.log(strRev);
}
reverseString("hello");






  






const name="vivek";
const repoCount=10;

// console.log(name+repoCount+" value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName= new String('vivekkr')
// console.log(gameName[0]);

// console.log(gameName.__proto__);//emptyObject {}

// console.log(gameName.length);//for finding length
// console.log(gameName.toUpperCase());// for all chararer in uppercase
// console.log(gameName.charAt(3));// for finding index no. of character
// console.log(gameName.indexOf('k'));//for finding index of character


// const newString = gameName.substring(0,4);
// console.log(newString);

// const anotherString = gameName.slice(-7, 5);
// console.log(anotherString);

const url="https://vivek.com/vivek%20kumar";//%20 means browser will automatically convert spacing in %20
console.log(url.replace('%20','-'));

console.log(url.includes('anisul'));// this function checks anisul is present in url or not
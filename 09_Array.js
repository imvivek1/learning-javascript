//array

const myArr=[0,1,2,3,4];
const cities=["delhi","kolkata","mumbai"];

const myarray2=new Array(1,2,3,4,5);


// console.log(myArr[1]);//1
// console.log(myarray2);//[ 1, 2, 3, 4, 5 ]

//Array methods

// myarray2.push(6);//6 added in myarray2
// console.log(myarray2);//[ 1, 2, 3, 4, 5 ]
// myarray2.push(7);
// console.log(myarray2);//[ 1, 2, 3, 4, 5]



// myarray2.pop(7);
// console.log(myarray2);//[ 1, 2, 3, 4, 5]


myarray2.pop();//remove last value
// console.log(myarray2);//[ 1, 2, 3, 4]


myarray2.unshift(0);//o will be added in starting index
// console.log(myarray2);//[ 0, 1, 2, 3, 4 ]


myarray2.shift();//remove starting index
// console.log(myarray2);//[ 1, 2, 3, 4 ]


// console.log(myarray2.includes(9));//fasle   it checks value available in index or not

// console.log(myarray2.indexOf(3));//2 checks value at indexes


// console.log(typeof myarray);


const newArray= myarray2.join();

// console.log(myarray2);
// console.log(newArray);


// slice, splice

console.log("A",myArr);//A [ 0, 1, 2, 3, 4 ]

const myn1=myArr.slice(1,3);
console.log(myn1);//[ 1, 2 ]

console.log("B",myArr);//B [ 0, 1, 2, 3, 4 ]

const myn2=myArr.splice(1,3);

console.log("c",myArr);//c [ 0, 4 ]
console.log(myn2);//[ 1, 2, 3 ]
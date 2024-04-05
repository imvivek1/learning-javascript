// #Primitive
//7 type:String,Number, Boolean, null, undefined, Symbol, BigInt


// const score=100;
// const scoreValue=100.3;

// const IsLoggedIn=false;
// const outsideTemp=null;//null means null
// let userEmail;//undefined


// const id= Symbol('123');
// const anotherId= Symbol('123');

// console.log(id===anotherId);
// const bigNumber = 614368683773

//non-primtve or refrence type
 //Array, Objects, Functions

// const hero=["spiderman", "captain","thor"];
// let myObj={
//   name:"vivek",
//   age:21,

// }

// console.log(myObj);

// let MyFun=function()
// {
//   console.log("hello World");
// }
// MyFun();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//memory types:
   //Stack(Primitive), Heap(Non-Primitive)
     //in stack memory variable will be copied
     //in heap momory variable you will get a refrence of original value

//  let myname="vivek";
//  let anotherName=myname;
// anotherName="Anisul";


//  console.log(myname);
//  console.log(anotherName);//copy 


let MyIdentity={
  id:12345,
  name:"vivek",
  mail:"vivek@gmail.com",

}
let MyIdentity2=MyIdentity;
// console.table([MyIdentity2]);
MyIdentity2.mail="vivek@google.com"
//in heap beacuse of refrence value will also be changed not copy 
//copy will be in stack
console.table([MyIdentity2]);
console.table(MyIdentity.mail);
console.table(MyIdentity2.mail);
//in both scenario output will be vivek@google.com because in heap due to refrence value will also be changed


let myDate=new Date()
// console.log(myDate.toLocaleString()); //10/4/2024, 12:40:13 am
// console.log(myDate.toJSON());//2024-04-09T19:10:58.689Z
// console.log(myDate.toTimeString());//00:41:19 GMT+0530 (India Standard Time)
// console.log(myDate.toString());//Wed Apr 10 2024 00:41:37 GMT+0530 (India Standard Time)
// console.log(typeof myDate);//object

// let myCreatedDate= new Date(2023,0,23);
let myCreatedDate= new Date(2023,0,23,5,3);
let myCreatedDate1= new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleDateString());//23/1/2023
// console.log(myCreatedDate.toLocaleString());//23/1/2023, 5:03:00 am

let myTimeStamp=Date.now();
// console.log(myTimeStamp);//1712690125136 milisecond
// console.log(myCreatedDate.getTime());//1674430380000 comparing between myTimeStamp 
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);//+1 because it start from 0
// console.log(newDate.getDay());

// console.log(`the day is ${newDate.getDay()}`);//string interpolation

newDate.toLocaleString('default',{
    weekday: "long",

});
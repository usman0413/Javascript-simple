//word vs keyword
//variable and constants

//Variables ko data store krny ky liye use kiya jata ha
//var const let

//hoisting

//primitives
//reference = () [] {}

//example of primitive  var = 20;
// example of reference  var = [30,12]


// var a = [1,2,3,4];
// var b = a;

// b.pop();
//  console.log(a)

//conditionals -  if else else-if

// let marks = -1;
//  if (marks>=80){
//     console.log("A")
//  } else if(marks>=70){
//     console.log("B")
//  } else if (marks>=60){
//      console.log("C")
//  } else if (marks>=50){
//         console.log("D")
//  } else if(marks <= 49 & marks >= 0 ){
//     console.log("F")
//  } else {
//     console.log("marks are not valid")
//  }


//loops - loop ka mtlb repeat 

//for loop - agr ksi ko zyada print krna hai to loop use hota hai
// for(var i=0; i<11; i++){
//      console.log(i);
// }

// program to display text 5 times
// const n = 11;

// looping from i = 1 to 5
// for (let i = 0; i <= n; i++) {
//     console.log(`I love Javascript`);
// }
// for(let i=25; i<51; i++){
//     console.log(i)
// }

//loop -  while loop
 
// let a =  12;
// while(a<20){
//   a++;
//   console.log(a)
// }


//FUNCTIONS :
// Function = code ko naam dena 
//FUNCTION Ka mtlb ap kuch code likh kr koi naam da skty ho & baad ma usy use kr skty ho with that names  as many times
//functions mainly 3  tareeky ki hoti hai : 
// 1) jab ap apna code foran ni chalana chahty fututr ma chalana chahty ho 
// 2) jab aapka code ap resuse krna chahty ho  
// 3) jab aap code chalana chahty ho har baar with different data

// function abcd(){

// }

//1)
// function usman(){
//     console.log("hello I'm usman")
// }

// usman();

// 2)

// function abcs(){
//     console.log("lorem ipsum");
//    console.log("UMT");
//    console.log("UCP");
//    console.log("BUI");
//    console.log("SUL");
//    console.log("SCS");
//  }

//  abcs();

//Parameters - jis ma values store hoti arguments wali
// Arguments - real value jo hm dety hain function chalaty  waqt

//Example of parameters and arguments
//function abcd(a,b,c,d){  - these are parameters mtlb is ma jo values pass hoti hain usy parameters khty hain
  // console.log(a,b,c,d)
// }
// abcd(21,33,22,44); - these are arguments mtlb meny jo  value b yaha di hai usy arguments khty hain

// arrays - hm ek variable ma ek value store kr paty hain par jb hmy ek sa zyada value store krni ho tb ph ruse hota hai 
// array ka mtlbb ye ky array apko freedomm deta hai ek sa zyada values use krny ki

//array is a group off values

// let a = [12,13,24]; // a is array 
//  console.log(a)

// let arr = [1,2,3,4,5,6,7,8,9,10,11]

// console.log (arr [2]);

//push pop shift unshift splice
//  let arr =  [ 1,2,3,4,5,6]
//   console.log(arr.push(7))

// let arr =  [ 1,2,3,4,5,6]
//   console.log(arr.pop())

//array ky start ma ek member add krny ky liye use hota hai unshift

// let arr =  [ 1,2,3,4,5,6]
//   console.log(arr.unshift(0))


//ek value hatany ky liye use hota hai shift

// let arr =  [ 1,2,3,4,5,6]
//   console.log(arr.shift())

// let arr =  [ 1,2,3,4,5,6]
//   console.log(arr.splice(2,2))


// aik sa zyada bndy ki bt ki to hua array 
//ek hi bndy  ki sari bt ki to hua array

//object hai ek bndy ki details ko hold krna , in a key value pair

// 1) Blank object

// var a = {};

 // 2) filled object
//   var usman = { 
//    age : 21,  //property
//    name : "usman",  //property
//    height : 5.7,  //property
//    email : "usman123@gmail.com",  //property
//    university : "UMT",  //property
//    loogyekya : function(){ } //this is method
// }

// usman.university =  "UOL";

// console.log(usman)

//functions() arrays[] objects{}++ - are  reference 

let a = [0,1,2,3,4];
let b = [...a];

// function first(){
//     console.log(window);
//     second();
// }
// function second(){
//     console.log('second');
//     third();
// }
// function third(){
//     console.log('third');
// }
// first();

// alert("Hello World");
// [1,2].forEach(alert);

// let age;
// console.log(age);

// const name=`hello i m fine`;
// alert(NaN ** 2);
// alert(typeof(name));

// let x= NaN;
// console.log(x, typeof x);
// let isgreater= 4>1;
// alert(isgreater);
// let y;
// console.log(y, typeof y);
// let z= null;
// console.log(z, typeof z);

// alert('this is an alert');
// let a = prompt('How old are you??', 25);
// alert(`you are ${a} years old`);

// let isgreater= confirm('is 4 greater than 1');
// alert(isgreater);

// document.write('this is a statement');

// Type conversion
// let a='31';
// console.log(typeof a);      // String
// a= Number(a);
// a +=1;
// console.log(typeof a);      //Number
// alert(a);
// let a='';
// console.log(typeof a);
// a= Number(a);
// console.log(typeof a);

// let a='31';
// let b='32';
// let c='33';
// console.log(+a + +b);

// function typeconversion(){
//     let num = document.getElementById("userinput").value;
//     num= Boolean(num);
//     console.log(+num, typeof +num);
// }

// let x;
// let y;
// let z;
// x= String(3.14);
// console.log(x, typeof x);
// y=Boolean('');
// console.log(y, typeof y);

// console.log('this is first string ' + 'this is a second string');
// console.log('6' - 2);
// console.log('7' % 2);


// let num= 2;
// num+=2;
// console.log(++num);
// console.log(num);
// console.log(num++);
// console.log(num);


// console.log(5>4 || 4>8);
// console.log(5<4 && 4<8);
// console.log(!!true);

// console.log('tree' > 'trie');

// let age= prompt('enter your age?', '');
// if(age < 10)
// alert('You are a child');
// else if(age<18 && age>=10)
// alert('You are a teenager');
// else if(age >=18)
// alert('You are an adult');

// let num= 4>8 ?4 :8;
// alert(`Maximum number is ${num}`);

// let num= 3;
// while(num<6)
// {
//     alert(num);
//     num++;
// }

// for(let i=0; i<3; i++)
//     alert(i);

// let sum=0;
// while(true){
//     let value= prompt('enter the value', '');
//     if(!value)
//         break;
//     sum += +value;
// }
// alert(sum);



// let msg2= "I'm 30 years old"
// function abc(a,b){
//     // console.log(a+b);

//     msg2= "I'm 25 years old";
//     // let msg2= "I'm 25 years old";
//     let msg = 'My name is '
//     console.log(msg+a+b+msg2);
// }

// abc('john', ' doe');
// console.log(msg);    msg is not defined
// console.log(msg2);


// function abc(a,b)
// {
    //return;            //by default undefined
    // return a+b;
// }
// console.log(abc(11,22));           //33
//console.log(abc() === undefined);          // true

// sayHi();     sayHi() before initialization
// let sayHi = function(){
//     console.log('hello world');
// }
// sayHi();

//Arrow function
// let sum= (a,b) => a+b;
// console.log(sum(10,22));

// let num= 10_00_000;          //increase readablity
//let num= 1e5;      //i.e. 100000
// let num= 1e-5         //i.e. 0.00001
// console.log(num);

// let n=255;
// console.log(n.toString(16));          //ff
// console.log(n.toString(2));           //11111111


// let num= 12.47456;
// console.log(Math.round(num));          //12
// console.log(Math.round(num*100)/100);          //12.47 to round off upto 2 decimal places
// console.log(num.toFixed(3));          //12.475
// console.log(parseInt("100px155"));
// console.log(parseFloat('12.45em'))
// console.log(parseFloat('e12.63em'))

// let str= 'this is a string';
// console.log(str.length);
// console.log(str[0]);
// console.log(str[-3]);
// console.log(str.indexOf('is'));


// let str= 'this is a string and is an example'
// let substr= 'is';
// for(let i =0;i<str.length-substr.length; i++){
//     if(str.substring(i, i+2)== 'is')
//         console.log(i);
// }
// let j = 0;
// let k=0;
// while(j< str.length)
// {
//     let x=  str.indexOf('is');
//     str= str.substring(x+1);
//     if(x==-1)
//         break;
//     else{
//         k=k+x;
//         console.log(k);
//       j= x+2;  
//     }
// }

// console.log(str.slice(-3, -1));
// console.log(str.substring(1,3));


/***********Arrayys**********/



// let arr= new Array(5);
// console.log(arr);        empty array

// let arr= [1,2,3,4,5,6,'apples', 'mangoes', true, function(){alert('Hello WoRld!')}];
// console.log(arr);
// console.log(arr[9]);
// console.log(arr.pop());            //last elemnt //O(1)=>complexity
// console.log(arr);
// console.log(arr.push('false', 45));      // add false and 45 as elements at last  // o/p => length
// console.log(arr);
// console.log(arr.shift());       //complexity=> O(n)   // deletes first element of arr and shift others
// console.log(arr.unshift('23', 67));           //adds elements at first and shifts other elements      // o/p => length 
// console.log(arr);


// let arr2= [];
// arr2[255]= 1;
// console.log(arr2);
// console.log(arr2.length);

// console.log([2] == [2]);        //false
// let arr= [1,2,3,4,5,6,7,8,9];
// let arr2= arr;
// console.log(arr[2] == arr2[2]);    // true

// let arr= [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(arr[1][1]);
// console.log(arr);

// /****array flatten*******/ ==>> to convert a 2d array in a 1d array

// let sum= 0;
// let k=0;
// let arr1= [];
// for(let i=0; i<arr.length; i++)
// {
//     for(let j=0; j<arr[1].length; j++)
//     {
//         arr1[k++]= arr[i][j];
//         sum= sum+ arr[i][j];
//         console.log(i+" "+j);
//     }
// }
// console.log("sum = "+sum);
// console.log(arr1);
// console.log(arr1.slice(1,5));     // return new array

// let arr= ['mango', 'apples', 'banana'];
// arr.splice(2,0, 'grapes');
// console.log(arr);


// arr.forEach(alert);

//filter   =>   creates array of elements satifying the condition in function
// let ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// console.log(result);
// function checkAdult(age) {
//   return age >= 18;
// }

// let str= 'This is a dev class';
// let j,s="";
// for(let i= 0; i<str.length; )
// {
//     let str1= "";
//     for( j=i; j<str.length; j++)
//     {
//         if(str[i]!=" ")
//             str1= str[i]+str1;
//         else
//         {
//             break;
//         }
//     }
//     s= s+str1+" ";
//     i=j;
// }
// console.log(s);                //some error






// let s= 'This is a dev class';          o/p=   sihT si a ved ssalc
// let result= "";
// let str= s.split(" ");
// for(let i=0; i<str.length; i++)
// {
//     let temp= str[i];
//     let ans="";
//     for(let j=temp.length-1; j>=0;j--)
//     {
//         ans= ans+temp.charAt(j);
//     }
//     result = result+ans+" ";
// }
// console.log(result);

//  let s= 'This is a dev class';



// let obj= {
//     name: 'John',
//     "hello1" : 1,
//     "hello2" : 2,
//     welcome :function()
//     {
//         console.log('welcome');
//     },
//     arr1 : ['maruti', 'swift', 'baleno'],
//     'new car' : 'audi',          //multiple words in sinhle quotes and accessed using [] not by.

// }
// console.log(obj.name);               //john
// console.log(obj.arr1[1]);            // swift
// console.log(obj["hello1"]);         //1
// console.log(Object.keys(obj));       //['name', 'hello1', 'hello2', 'welcome', 'arr1']
// console.log(Object.values(obj));      //['John', 1, 2, ƒ, Array(3)]
// console.log(obj["new car"]);         // audi
// obj['isadult'] = true;
// console.log(obj);           

 

/***** TO PRINT CHARACTERS AND THEIR FREQUENCY *****/
// let obj={}
// let str= "aabc bbca caab ddac";
// for(let i of str)
// {
//     if(!obj[i])
//         obj[i] = 1;
//     else
//         obj[i]++;
// }
// delete obj[" "];
// console.log(obj);




// let person= {
//     name: 'John',
//     age: 23,
// }
// person  = null; 
// console.log(person);



/*

GARBAGE COLLECTION ---
1. Global vaeiables
2. Functions still to execute 



PROTOTYPES
It is mechanism through which objects can inherit property of one another
(Inheritance-- parent to child property inherit)

*/

// let person= {             // parent
//     firstname :'john',
//     age : 24,
// }
// let p1 = Object.create(person);

// console.log(person);      // object
// console.log(p1);          //empty
// console.log(p1.age);      //24

// let p1 = {
//     lastname : 'doe',
//     firstname : 'harry',
//     __proto__ :person           // to create prototype
// }
// let p2 = {
//     isadult : true, 
//     firstname : 'Kalia',
//     __proto__ : p1
// }
// console.log(p1.firstname);                              //harry
// console.log(p2.firstname);                             //kalia
// console.log(p2.__proto__ === p1);                        // true
// console.log(p1.__proto__ === person);                     //true
// console.log(p1.__proto__);                               //p1 ka prototype person h 
// console.log(person.__proto__ === Object.prototype);       //true by default for parent

/*
Object. prototype 
1. number.prototype
2. Array.prototype
3.String.prototype
*/


// let arr= [1,1,3];
// Array.prototype.pop = function()
//     {
//         console.log("welcome!")
//     }
// console.log(arr.pop());






/***** Callback ******/ 
// recursion is a subset of callback
// f1()
// |
// |       Do some work w1
// |
// f2()   call

// fs is a module that is storedn a constant fs.

// function print(val)
// {
//     console.log(val);
// }
// function add(n1, n2, print)
// {
//     let sum= n1+ n2;
//     print(sum);             //callback
// }
// add(2,3, print);
// function print(err, data)
// {
//     if(!err){
//         console.log(data);
//     }
// }
// const fs= require("fs");
// let arr= ['q.html', 'a1.html', 'a2.html', 'a3.html', 'a4.html', 'a5.html', 'a6.html'];
// for(let i=0; i<arr.length; i++)
//     fs.readFile(arr[i], 'utf-8', print);
                                    //files run parallely so will print in any order   i.e. Asynchronous-- we can never write a callback function
                                    // fs.readfile("file_name", format- "utf-8", callback- print)

          


// const fs= require("fs");
// let count = 0;
// function print(err, data)
// {
//     if(!err)
//     {
//         count++;
//     }
//     if(count<8)
//     {
//         console.log(data);
//     }
//     fs.readFile('a'+(count+1)+".html", 'utf-8', print)
// }
// fs.readFile('a1.html', 'utf-8', print);

// setTimeout(()=>
// {
//     console.log("this is a callback");
// }, 3000);

// let a =true;
// setTimeout(function()
// {
//     a=false;
// }, 10000);  //callback ko fire krega jb stack khali hoga
// while(a)
// {
//     console.log("hello");
// }

// let a=true;
// setInterval(function(){
//     if(a)
//     {
//         console.log("hello");
//     }
// }, 1000);
// setTimeout(function()
// {
//     a= false;
// }, 10082);









// promises     agr mese kam ho gya to resolve kr dunga ni to error through kr dunga
// const p = new Promise((function(resolve, reject){
//     setTimeout(()=>{
//         let randnum= Math.floor(Math.random() * 10);
//         console.log(randnum);
//         if(randnum %2==0){
//             resolve(randnum)
//         }
//         else{
//             reject();
//         }
//     },2000)
// }))
// p.then((data)=>{
//     console.log("resolved");
// }).catch((data)=>{
//     console.log("reject");
// })










// https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-time-to-pratice-with-promises

// function job() {
//     return 'hello world';
// }

// module.exports = job;


// const p = new Promise((function(resolve, reject){
//     setTimeout(()=>{

//     },2000)
// }))
// p.then((data)=>{
//     console.log(data);
// }).catch(data)




// ques 9 

// function job(data) {
//     return new Promise((resolve, reject)=>{
//         if(typeof(data) != 'number'){
//             reject("error");
//         }
//         else if(data % 2 ==1){
//             setTimeout(()=>{
//                 resolve("odd")
//             },1000)
//         }
//         else if(data%2==0){
//             setTimeout(()=>{
//                 reject("even");
//             },2000)
//         }
//     })
// }

// module.exports = job;





// const fs= require("fs");
// // const { resolve } = require("path");
// let readFilePromise = fs.promises.readFile("a1.html", "utf-8");
// // console.log(readFilePromise);
// // resolve(readFilePromise);
// readFilePromise.then((data)=>{
//     console.log(data);
// })

// async function abc(){
// let data = await fs.promises.readFile("a1.html", "utf-8");
// console.log(readFilePromise);
// }
// abc();
// function abc(){
//     return new Promise((resolve, reject)=>{
//         console.log()
//     })
// }


async function abc () {
    await fs.promises.writeFile("q1.html", "hello");
    let data = await fs.promises.readFile("q2.html", "utf-8");
    console.log(data);
    return "how are you";
}

async function main() {
    let data = await abc();
    console.log(data);
}
main();
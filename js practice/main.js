// try{
//     console.log("Try catch start");
//     // dkmvj;


// // setTimeout(()=>{
// //     bthkm;
// // },1000);
//     throw new SyntaxError("this is a Syntax Error")


//     console.log("try block ends");
// }
// catch(err)
// {
//     console.log(err);
//     // console.log("error aa gya");
//     // console.log(err.stack);

// }


// const json= '{"name": "john"}';
// try{
//     console.log("Try block start");  
//     let arr= JSON.parse(json);

// }
// catch(err){
//     console.log("Age not found");
// }


// const person = {
//     name :"kartik",
//     age : 25,
//     hobbies: ["khana", "pina", "sona"],
//     "married hai" : false,
//     sayname: function(){
//         console.log("Hello world!!");
//     }
// }

// const person2 = {
//     address : "New delhi",
//     favcolor: ["red", "green", "blue"],
//     __proto__ :person
// }
// console.log(person["married hai"]);
// for(let key in person){
//     console.log(person[key]);
// }

// console.log(Object.values(person));

// console.log(person2.name);

// let obj1 ={
//     name: "john"
// }
// let obj2= obj1;
// console.log(obj2.name)
// obj1 = null;
// console.log(obj1.name);


// function fun(){
//     console.log(this);
//     return 1;
// }
// fun();

// let p2= {
//     d:4,
//     e:5,
//     fun :function(){
//         console.log(this);
//     }
// }
// let newfun= p2.fun.bind(p1);
// console.log(newfun())

// let arr= [1,2,3,4,5,6,7,8];
// let newarr= newPollyFill(arr,ab);
// console.log(newarr);
// newarr= newFilter(arr,(x) => x%2 == 0);
// console.log(newarr);
// function newPollyFill(arr, cb){
//     let newArr= [];
//     for(let i=0; i<arr.length; i++){
//         newarr.push(cb(arr[i]));
//     }
//     return newArr;
// }
// function cb(x){
//     return x*x;
// }
// function newFilter()


// var x= +true;
// var y= !'Amit';
// console.log(x);
// console.log(y);

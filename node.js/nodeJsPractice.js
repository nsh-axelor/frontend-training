const fs = require("fs")
const path = require('path')
const os = require('os')
const http = require('http');
const chalk = require('chalk')
const { resolve } = require("path");
const { rejects } = require("assert");


console.log("Hello From Nandit");
const args = process.argv.slice(2)

args.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

console.log(chalk.red("Hello in red"));

// let isPromiseResolved = true;
// const p = new Promise((resolve,reject) => {
//     if(isPromiseResolved){
//         resolve('Promise is resolved')
//         resolve('Promise is resolved')

//     }else{
//         reject("Promise is rejected")
//     }
// })

// p.then((message) => {
//     console.log("This is inside first then block and the message is -- "+message);
// })
// .then(() => console.log("This is inside second then block"))
// .catch((message) => {
//     console.log("This is inside catch block the message is -- "+message)
// })


// Timers Example
// setTimeout((name) =>console.log("Hello "+name),2000,"Nandit")
// console.log("This is before setTimeOut");

// // SetInterval Example
// const intervalId = setInterval(() =>{
//     console.log("Hello from setInterval")
// },1000)

// setTimeout(() => clearInterval(intervalId),3000)



// File State Example
// fs.stat("./forFSPractice.txt",(err,stat) => {
//     if(err){
//         console.log(err.message);
//         return
//     }else{
//         console.log("Is this Directory -- "+stat.isDirectory());
//         console.log("Is this File -- "+stat.isFile());
//         console.log("File Size -- "+stat.size);
//     }
// })


// Path Example
// const dummyPath = "Nandit/Shail/shah.txt";
// console.log(dummyPath);
// console.log(path.dirname(dummyPath))
// console.log(path.basename(dummyPath))
// console.log(path.resolve('.'));

// const dummyFolderPath = 'D:/Axelor-FrontEnd/frontend/node.js/practice-folder'
// try{
//     if(!fs.existsSync(dummyFolderPath)){
//         fs.mkdirSync(dummyFolderPath)
//         console.log("New Folder Created");
//     }else{
//         console.log("Folder Already Exist");
//     }
// }catch(err){
//     console.log(err);
// }

// fs.readdirSync('D:/Axelor-FrontEnd/frontend/node.js').map(fileName => {
//     console.log(path.join('D:/Axelor-FrontEnd/frontend/node.js', fileName))
// })


// fs.rename(dummyFolderPath,'D:/Axelor-FrontEnd/frontend/node.js/practice-folder(renamed)',(err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Folder is renamed");
//     }
// })


// fs.rmdir("./practice-folder(renamed)", { recursive: true }, (err) => {
//     if (err) {
//         throw err;
//     }
//     // console.log(`${"/practice-folder(renamed)"} is deleted!`);
// });



// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());


// console.log(http.METHODS);
// console.log(http.STATUS_CODES);


// Prmoises Practice
// function promisePractice(){
//     let err = false;

//     return new Promise((resolve,reject) => {
//         if(!err){
//             console.log(chalk.green("The Promise is resolved"));
//             resolve()
//         }else{
//             console.log(chalk.red("The promise is not resolved"));
//             reject("Due to error = 'True'")
//         }
//     })
// }
// promisePractice().then(() =>{
//     console.log(chalk.green("Thanks for resolving Promise"));
// }
// ).catch((msg) => {
//     console.log(chalk.red("Reason - "+msg));
// })




// Async - Await Example

// async function asynAwaitExample() {

//     console.log(2);
//     try {
//         console.log(3);
//         await wait()
//         return 5
//     } catch (error) {
//         console.log(error);
//     }
// }

// function wait(){
//     setTimeout(() => {},2000)
// }

// console.log(1);
// asynAwaitExample().then((result) => {
//     console.log(result);
// })
// console.log(6);
// console.log(7);
// console.log(8);

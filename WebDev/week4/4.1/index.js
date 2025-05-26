const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   let words = 0;
//   for (let i = 0; i<data.length; i++) {
//     // console.log("hey")
//     if (data[i] === " ") {
//       words++;
//     }
//   }
//   console.log(words + 1);
// });

// fs.readFile(process.argv[2],'utf-8',function(err,data){
//     console.log('hey')
//     // const arr = data.split(" ")
//     // console.log(arr.length)
//     console.log(data)
// })
// // console.log(process.argv[4])
// console.log(process.argv)



//performing it with commander library
const {Command} = require('commander')
const program = new Command()

//word counter
program
    .name('word_counter')
    .description('CLI counter for total words in a file')
    .version('0.8.0')

program
    .command('word-count')
    .argument('<file>','file to split')
    .action((file)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err){
                console.log(err)
            }else{
                const words = data.split(" ").length
                console.log(`There are ${words} in ${file}`)
            }
        })
    })

    

//line counter
program
    .description("counts number of lines")
    .command('line-count')
    .argument('<file>','Add your file here')
    .action((file)=>{
        fs.readFile(file,'utf-8',function(err,data){
            if(err){
                console.log("Error => ",err)
            }else{
                const lines = data.split("\n").length
                console.log(`There are total ${lines} in file ${file}.`)
            }
        })
    })

program.parse()
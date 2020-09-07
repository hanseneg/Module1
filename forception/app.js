

/* Write a function that takes two arrays as parameters. 
The first array will be an array of people's names, and the second array will be the alphabet. 
Using a for loop within a for loop, create and return array that looks like this: */
//"Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L......

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
//turns string into an array
var alphArray = alphabet.split("")
//console.log(alphArray)
//new array?
var fin = []

//define function
//for loop within a for loop
//push adds items to the end of array
function combineArrays(people, alphArray){
    for(let i = 0; i < people.length; i++){
        fin.push(people[i] + ":")
        for(let j = 0; j < alphArray.length; j++){
        fin.push(alphArray[j])
        }
    }
    console.log(fin)
}
//execute function
combineArrays(people, alphArray)
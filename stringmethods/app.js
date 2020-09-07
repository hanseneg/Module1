var string1 = "Hello"
var upper = string1.toUpperCase()
var lower = string1.toLowerCase()
var combineUpperAndLower = upper + lower
//console.log(combineUpperAndLower)

var string2 = "Hello World"

var middleNum = (string2.length / 2)
var findMiddleIndex = Math.floor(middleNum)
//console.log(findMiddleIndex)



var firstHalf = string2.slice(0, findMiddleIndex)
//console.log(firstHalf)

var secondHalf = string2.slice(findMiddleIndex)
var upper2 = firstHalf.toUpperCase()
var lower2 = secondHalf.toLocaleLowerCase()
var combineUpperAndLower2 = upper2 + lower2
//console.log(combineUpperAndLower2)

var string3 = "hello, how are you today?"
function capitalLetters(str){
   str = str.split(" ");
   for(var i = 0; i < str.length; i++){
       str[i] = str[i][0].toUpperCase() + str[i].substring(1);
   }
   return str.join(" ");
}
console.log(capitalLetters(string3))
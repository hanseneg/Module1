//preliminaries

/* for (var i = 0; i < 10; i++){
    console.log(i)
}
 */

/* for (var i = 9; i >= 0; i--){
    console.log(i)
} */

/* var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
} */

//bronze medal

/* var array = []
for(var i = 0; i < 10; i++){
    array.push(i)
}
console.log(array) */

/* for(var i = 0; i < 101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
} */

/* var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var fruitArray = []
for(var i = 0; i < fruit.length; i++){
    if(i % 2 === 0){
        fruitArray.push(fruit[i])
    }
}
console.log(fruitArray) */

//silver medal

/* var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ] */
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

 /*  for(var i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
  } */
  /* var names = []
  for(var i = 0; i < peopleArray.length; i++){
      names.push(peopleArray[i].name)
  }
  console.log(names)

  var occupations = []
  for(var i = 0; i < peopleArray.length; i++){
      occupations.push(peopleArray[i].occupation)
  }
console.log(occupations) */

/* var names = []
for(var i = 0; i < peopleArray.length; i++){
    if(i % 2 === 0){
        names.push(peopleArray[i].name)
    }
}
console.log(names)

var occupations = []
for(var i = 0; i < peopleArray.length; i++){
    if(i % 2 !== 0){
        occupations.push(peopleArray[i].occupation)
    }
}
console.log(occupations) */

//gold medal

/* [[0, 0, 0], 
[0, 0, 0], 
[0, 0, 0]] */

var array = [[]]
for(var i = 0; i < 3; i++){
    array.push([])
    for(var j = 0; j < 3; j++){
        array[i].push(0)
    }
}
console.log(array)

/* [[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]] */

/* [[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]] */

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.
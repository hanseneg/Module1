
/*  1. Remove the last item from the vegetable array.
    2. Remove the first item from the fruit array.
    3. Find the index of "orange."
    4. Add that number to the end of the fruit array.
    5. Use the length property to find the length of the vegetable array.
    6. Add that number to the end of the vegetable array.
    7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
    8. Remove 2 elements from your new array starting at index 4 with one method.
    9. Reverse your array.
    10. Turn the array into a string and return it. */

    //solution: 3,pepper,1,watermelon,orange,apple

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//1
vegetables.pop()
//2
fruit.shift()
//3
var orangeIndex = fruit.indexOf("orange")
//4
fruit.push(orangeIndex)
//5
var vLength = vegetables.length;
//6
vegetables.push(vLength)
//7
var food = fruit.concat(vegetables)
//8
food.splice(4, 2)
//9
food.reverse()
//10
food.join(" ")
console.log(food)


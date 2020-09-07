function fizzBuzz(){
    const array = []
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
            array.push("fizzbuzz")
            continue
        }else if(i % 3 === 0){
            console.log("fizz");
            array.push("fizz")
            continue
        }else if(i % 5 === 0){
            console.log("buzz");
            array.push("buzz")
            continue
        }
        console.log(i)
    }
    return array
}
fizzBuzz()




const readlineSync = require('readline-sync');
let isAlive = true
let hasKey = false

while(isAlive === true){
    const question = readlineSync.keyIn('Would you like to [o] open the door, [f] find the key, or [p] put hand in the hole?', {limit: ['o', 'f', 'p']})
    if(question === 'p'){
        console.log('you died')
        isAlive = false
    } else if(question === 'f'){
        console.log('you found the key! now open the door')
        isAlive = true
        hasKey = true
    } else if(question === 'o'){
        if(hasKey === false) {
            console.log('find the key first')
        } else {
            console.log('nice!')
            isAlive = false
        }
    }
}
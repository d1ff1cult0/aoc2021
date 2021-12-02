let fs = require('fs');
let text = fs.readFileSync("/Users/d1ff1cult/Documents/KUL 2021-2022/aoc2021/Day2/input.txt", 'utf-8');
let array = (text.split('\n'))

function part1(){
    let horizontal = 0
    let vertical = 0
    for(let i = 0; i < array.length; i++){
        let direction = array[i].split(' ')[0]
        let amount = parseInt(array[i].split(' ')[1])
        if(direction === 'forward'){
            horizontal += amount
        }
        if(direction === 'down'){
            vertical += amount
        }
        if(direction === 'up'){
            vertical -= amount
        }
    }
    return [horizontal, vertical]
}

function part2(){
    let horizontal = 0
    let vertical = 0
    let aim = 0
    for(let i = 0; i<array.length ; i++){
        let direction = array[i].split(' ')[0]
        let amount = parseInt(array[i].split(' ')[1])
        if(direction === 'forward'){
            horizontal += amount
            vertical += aim*amount
        }
        if(direction === 'down'){
            aim += amount
        }
        if(direction === 'up'){
            aim -= amount
        }
    }
    return [horizontal, vertical]
}

console.log(part2()[0]*part2()[1])
console.log(part1(), part1()[0]*part1()[1])
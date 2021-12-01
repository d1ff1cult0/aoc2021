let fs = require('fs');
let text = fs.readFileSync("/Users/d1ff1cult/Documents/KUL 2021-2022/aoc2021/Day1/input1.txt", 'utf-8');
let array = (text.split('\n')).map((i) => Number(i));

function part1(){
    let increased = 0
    for(let i = 0; i<array.length; i++){
        if(array[i] > array[i-1]){
            increased++
        }
    }
    return increased
}

function part2(){
    let increased = 0
    for(let i = 0; i<array.length; i++){
        if(i+3 < array.length){
            let prev_sum = array[i]+array[i+1]+array[i+2]
            let current_sum = array[i+1]+array[i+2]+array[i+3]
            if(prev_sum < current_sum){
                increased++
            }
        }
    }
    return increased
}
console.log(part1(), part2())


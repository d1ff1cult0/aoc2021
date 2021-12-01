function amount_of_increased(){
    let fs = require('fs');
    let text = fs.readFileSync("/Users/d1ff1cult/Documents/KUL 2021-2022/aoc2021/Day1/input1.txt", 'utf-8');
    let textByLine = text.split('\n')
    let increased = 0
    let decreased = 0

    for(let i = 1; i<textByLine.length; i++){
        if(textByLine[i] < textByLine[i+1]){
            increased++
        }else {
            decreased++
        }
    }

    return [increased, decreased, increased+decreased]
}

console.log(amount_of_increased())

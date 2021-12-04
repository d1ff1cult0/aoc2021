let fs = require('fs');
let text = fs.readFileSync("/Users/d1ff1cult/Documents/KUL 2021-2022/aoc2021/Day4/input.txt", 'utf-8');
let boards = (text.split('\n'))

let new_boards = []
let nboards = []
let numbers_drawn = [17,25,31,22,79,72,58,47,62,50,30,91,11,63,66,83,33,75,44,18,56,81,32,46,93,13,41,65,14,95,19,38,8,35,52,7,12,70,84,23,4,42,90,60,6,40,97,16,27,86,5,48,54,64,29,67,26,89,99,53,34,0,57,3,92,37,59,9,21,78,51,80,73,82,76,28,88,96,45,69,98,1,2,71,68,49,36,15,55,39,87,77,74,94,61,85,10,43,20,24]

function fine_print_matrix(){
    for(let i = 0; i<boards.length; i++){
        if(boards[i] === ''){
            boards.splice(i, 1)
            boards.pop(' ')
        }
    }

    for(let i = 0; i<(boards.length); i+=5){
        new_boards.push(boards.slice(i,i+5))
    }
    for(let i = 0; i<(boards.length); i+=5){
        nboards.push(boards.slice(i,i+5))
    }

    for(let j = 0; j<new_boards.length; j++){
        for(let i = 0; i<5; i++){
            new_boards[j][i] = nboards[j][i].split(' ').map(Number)
        }
    }
    for(let j = 0; j<new_boards.length; j++){
        for(let i = 0; i<5; i++){
            for(let k = 0; k<5; k++)
            if(new_boards[j][i][k] === 0 && new_boards[j][i].length>5){
                    new_boards[j][i].splice(k, 1)
                    k--
            }
        }
    }
}

fine_print_matrix()

function draw_number(){
    for(let drawn = 0; drawn<numbers_drawn.length; drawn++){
        for(let j = 0; j<new_boards.length; j++){
            for(let i = 0; i<5; i++){
                for(let k = 0; k<5; k++){
                    if(new_boards[j][i][k] === numbers_drawn[drawn]){
                        let prev_value = new_boards[j][i][k]
                        new_boards[j][i][k] = -1
                        check_win(j, i, k, prev_value)
                    }
                }
            }
        }
    }
}

function check_win(board, row, column, prev){
    //horizontaal
    let h = 0
    for(let i = 0; i<5; i++){
        for(let k = 0; i<5; i++){
            if(new_boards[board][i][k] === -1){
                h++
                if(h === 5){
                    new_boards.slice(board, 1)
                    bingo_found(board, row, column, prev)
                }
            }
        }
    }
    //Verticaal
    let v = 0
    for(let i = 0; i<5; i++){
        if(new_boards[board][i][column] === -1){
            v++
            if(v === 5){
                new_boards.slice(board, 1)
                bingo_found(board, row, column, prev)
            }
        }
    }
}

function bingo_found(which_board, wrow, wcolumn, wprev){
    let sum = 0

    for(let i = 0; i<5; i++){
        for(let j = 0; j<5; j++){
            if(new_boards[which_board][i][j] !== -1){
                sum += new_boards[which_board][i][j]
            }
        }
    }
    if(sum !== 0){
        sum = sum*wprev
        console.log(new_boards)
        console.log(sum)
    }
}

draw_number()
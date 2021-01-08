let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]


let turn = 'X'

let winner = ''

let w = ''
let z = ''

let random1 = ''
let random2 = ''

var v = document.getElementById("myAudio2"); 

function reset() {
    document.getElementById(`00`).innerText = ``
    document.getElementById(`01`).innerText = ``
    document.getElementById(`02`).innerText = ``
    document.getElementById(`10`).innerText = ``
    document.getElementById(`11`).innerText = ``
    document.getElementById(`12`).innerText = ``
    document.getElementById(`20`).innerText = ``
    document.getElementById(`21`).innerText = ``
    document.getElementById(`22`).innerText = ``
    document.getElementById(`winner`).innerText = `The winner is `
    board[0][0] = ''
    board[0][1] = ''
    board[0][2] = ''
    board[1][3] = ''
    board[1][1] = ''
    board[1][2] = ''
    board[2][0] = ''
    board[2][1] = ''
    board[2][2] = ''
    random1 = '';
    random2 = '';

}




function press(x, y) {

    // if (turn == "X") {
    //     turn = "O"
    // } else {
    //     turn = "X"
    // }

    board[x][y] = turn


    computerTurn()

    console.log(w);
    console.log(z);

    board[w][z] = 'O'


    document.getElementById(`${x}${y}`).innerText = turn
    document.getElementById(`${w}${z}`).innerText = 'O'
    v.play()

    if (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X' ||
        board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X' ||
        board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X' ||
        board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X' ||
        board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X' ||
        board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X' ||
        board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X' ||
        board[2][0] == 'X' && board[1][1] == 'X' && board[0][2] == 'X') {
        winner = turn
        console.log(winner);
        document.getElementById(`winner`).innerText = `The winner is You`
    } else
        if (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O' ||
            board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O' ||
            board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O' ||
            board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O' ||
            board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O' ||
            board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O' ||
            board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O' ||
            board[2][0] == 'O' && board[1][1] == 'O' && board[0][2] == 'O') {
            winner = turn
            console.log(winner);
            document.getElementById(`winner`).innerText = `The winner is Computer`
        }

    console.log(board);
}

function computerTurn() {
    random1 = Math.floor(Math.random() * 3)
    random2 = Math.floor(Math.random() * 3)
    let random = `${random1}${random2}`

    if (board[random1][random2] != "X" && board[random1][random2] != "O") {
        console.log("ok");
        console.log(`${random1}${random2}`);
        w = random1;
        z = random2;
    } else {
        console.log("not");
        computerTurn()
    }

}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 


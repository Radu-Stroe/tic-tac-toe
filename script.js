const board = document.querySelector('#board');
const startButton = document.querySelector('.start');
const restartButton = document.querySelector('.restart');
const message = document.querySelector('#message h2');
const input = document.querySelector('#message input');


let playerFlag = true;

//LOCAL STORAGE
// const gameBoardLocalStorage = (() => {
//     const saveToLocalStorage = () => {
//         localStorage.setItem('gameBoard', JSON.stringify(gameBoard.array));
//         window.location = window.location;
//       }
      
//     const loadFromLocalStorage = () => {
//         if(localStorage.getItem('gameBoard') != null) {
//             console.log(gameBoard.array)
//             gameBoard.array = JSON.parse(localStorage.getItem('gameBoard')).array;
//             console.log(gameBoard.array)
//         }
//     };
//     return { saveToLocalStorage, loadFromLocalStorage};
// })();

//PLAYERS
let players = (name, symbol) => {
    return {name, symbol }
};
let player = players('', 'X');
let computer = players('Computer', 'O');

//GAMEBOARD
let gameBoard = (() => {
    let array = [
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}, 
        {marked: '', symbol: ''}
    ];



    const renderGameBoard = () => {
        array.forEach((element) => {
            let div = document.createElement('div');
            div.classList.add('boardElement');
            div.addEventListener('click', () => {
                if(playerFlag) {
                    div.textContent = player.symbol;
                    array[array.indexOf(element)].symbol = player.symbol;
                    playerFlag = false;
                } else {
                    div.textContent = computer.symbol;
                    array[array.indexOf(element)].symbol = computer.symbol;
                    playerFlag = true;
                }
                element.marked = true;
                game.gameWinner();
            }, {once : true})
            board.appendChild(div);
        })
    }
    return { array, renderGameBoard }; 
})();


const game = (() => {
    // EVENT LISTENERS
    startButton.addEventListener('click', () => {
        player.name = input.value;
        message.textContent = '';
        message.style.margin = '50px';
        input.style.display = 'none';
        startButton.style.display = 'none';
        gameBoard.renderGameBoard();
    })
    restartButton.addEventListener('click', () => {
        window.location = window.location;
    });


    const gameWinner = () => {
        if (gameBoard.array[0].symbol === 'X' && gameBoard.array[1].symbol === 'X' && gameBoard.array[2].symbol === 'X' || 
            gameBoard.array[3].symbol === 'X' && gameBoard.array[4].symbol === 'X' && gameBoard.array[5].symbol === 'X' || 
            gameBoard.array[6].symbol === 'X' && gameBoard.array[7].symbol === 'X' && gameBoard.array[8].symbol === 'X' || 
            gameBoard.array[0].symbol === 'X' && gameBoard.array[3].symbol === 'X' && gameBoard.array[6].symbol === 'X' || 
            gameBoard.array[1].symbol === 'X' && gameBoard.array[4].symbol === 'X' && gameBoard.array[7].symbol === 'X' || 
            gameBoard.array[2].symbol === 'X' && gameBoard.array[5].symbol === 'X' && gameBoard.array[8].symbol === 'X' || 
            gameBoard.array[0].symbol === 'X' && gameBoard.array[4].symbol === 'X' && gameBoard.array[8].symbol === 'X' || 
            gameBoard.array[2].symbol === 'X' && gameBoard.array[4].symbol === 'X' && gameBoard.array[6].symbol === 'X'
        ) {
            message.textContent = `${player.name} won!`;
        } else if (
            gameBoard.array[0].symbol === 'O' && gameBoard.array[1].symbol === 'O' && gameBoard.array[2].symbol === 'O' || 
            gameBoard.array[3].symbol === 'O' && gameBoard.array[4].symbol === 'O' && gameBoard.array[5].symbol === 'O' || 
            gameBoard.array[6].symbol === 'O' && gameBoard.array[7].symbol === 'O' && gameBoard.array[8].symbol === 'O' || 
            gameBoard.array[0].symbol === 'O' && gameBoard.array[3].symbol === 'O' && gameBoard.array[6].symbol === 'O' || 
            gameBoard.array[1].symbol === 'O' && gameBoard.array[4].symbol === 'O' && gameBoard.array[7].symbol === 'O' || 
            gameBoard.array[2].symbol === 'O' && gameBoard.array[5].symbol === 'O' && gameBoard.array[8].symbol === 'O' || 
            gameBoard.array[0].symbol === 'O' && gameBoard.array[4].symbol === 'O' && gameBoard.array[8].symbol === 'O' || 
            gameBoard.array[2].symbol === 'O' && gameBoard.array[4].symbol === 'O' && gameBoard.array[6].symbol === 'O'
        ) {
            message.textContent = `${computer.name} won!`;
        } else if (
            gameBoard.array[0].marked && gameBoard.array[1].marked && gameBoard.array[2].marked && 
            gameBoard.array[3].marked && gameBoard.array[4].marked && gameBoard.array[5].marked && 
            gameBoard.array[6].marked && gameBoard.array[7].marked && gameBoard.array[8].marked
        ) {
            message.textContent = `It's a draw!`;
        }
    }

    return { gameWinner };
})()

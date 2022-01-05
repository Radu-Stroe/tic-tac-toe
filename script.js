const board = document.querySelector('#board');
const restart = document.querySelector('.restart');
const message = document.querySelector('#message p');

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
let player = (symbol) => {
    return {symbol }
};

let firstPlayer = player('X');
let secondPlayer = player('O');

//GAMEBOARD
let gameBoard = (() => {
    let array = [
        {symbol: ''}, 
        {symbol: ''}, 
        {symbol: ''}, 
        {symbol: ''}, 
        {symbol: ''}, 
        {symbol: ''}, 
        {symbol: ''}, 
        {symbol: ''}, 
        {symbol: ''}
    ];
    const renderGameBoard = () => {
        array.forEach((element) => {
            let div = document.createElement('div');
            div.classList.add('boardElement');
            div.addEventListener('click', () => {
                if(playerFlag) {
                    div.textContent = firstPlayer.symbol;
                    array[array.indexOf(element)].symbol = firstPlayer.symbol;
                    playerFlag = false;
                } else {
                    div.textContent = secondPlayer.symbol;
                    array[array.indexOf(element)].symbol = secondPlayer.symbol;
                    playerFlag = true;
                }
                game.gameWinner();
            }, {once : true})
            board.appendChild(div);
        })
    }
    return { array, renderGameBoard }; 
})();


const game = (() => {
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
            message.textContent = 'Player 1 won !';
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
            message.textContent = 'Player 2 won !'
        }
    }

    restart.addEventListener('click', () => {
        window.location = window.location;
    });
    return { gameWinner };
})()

gameBoard.renderGameBoard();

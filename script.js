const board = document.querySelector('#board');
const restart = document.querySelector('.restart');

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
            }, {once : true})
            board.appendChild(div);
        })
    }
    return { array, renderGameBoard }; 
})();


const game = (() => {
    
    restart.addEventListener('click', () => {
        window.location = window.location;
    });
})()

gameBoard.renderGameBoard();

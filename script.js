const board = document.querySelector('#board');

let gameBoard = (() => {
    let array = [
        {marked: false, symbol: 'X'}, 
        {marked: false, symbol: ''}, 
        {marked: false, symbol: 'X'}, 
        {marked: false, symbol: ''}, 
        {marked: false, symbol: 'X'}, 
        {marked: false, symbol: ''}, 
        {marked: false, symbol: ''}, 
        {marked: false, symbol: 'X'}, 
        {marked: false, symbol: ''}
    ];
    array.forEach((element) => {
        let div = document.createElement('div');
        div.textContent = element.symbol;
        div.classList.add('boardElement');
        board.appendChild(div);
    })
    return { array }; 
})();

const gameBoardLocalStorage = (() => {
    const saveToLocalStorage = () => {
        localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
        window.location = window.location;
      }
      
    const loadFromLocalStorage = () => {
        // if(localStorage.getItem('gameBoard') === null) {
        //     library.books = [];
        // } else {
            // library.books = [...JSON.parse(localStorage.getItem('library'))];
        // }
        gameBoard.array = JSON.parse(localStorage.getItem('gameBoard'));
    };
    return { saveToLocalStorage, loadFromLocalStorage};
})();

let player = (name, symbol) => {
    return { name, symbol }
};

let firstPlayer = player('Dorel', 'X');
let secondPlayer = player('Gigel', 'O');

var cards = [
    {
    rank: "queen",
    suit: "hearts",
    cardImage: "image/queen-of-hearts.png"
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "image/queen-of-diamonds.png"
    },
    {
    rank: "king",
    suit: "hearts",
    cardImage: "image/king-of-hearts.png"
    },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "image/queen-of-diamonds.png"
    }
];

var cardsInPlay = [];  
var checkForMatch = function(){
    if(cardsInPlay.length == 2){
        if(cardsInPlay[0] === cardsInPlay[1]){
        alert("Good, you found a match");
    }else{
        alert("Sorry try it again");
    }        
}
};

var flipCard = function(){
    var cardId = parseInt(this.getAttribute('data-id'),10);
    console.log("user flipped " + (cards[cardId].rank));
    this.src = cards[cardId].cardImage;
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
};

var createBoard = function(){
    for (var i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};


createBoard();
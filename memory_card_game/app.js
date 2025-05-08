const cardArray = [
    {
        name: 'chick',
        img: 'images/chick.png'
    },
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'fish',
        img: 'images/fish.png'
    },
    {
        name: 'frog',
        img: 'images/frog.png'
    },
    {
        name: 'hamster',
        img: 'images/hamster.png'
    },
    {
        name: 'panda',
        img: 'images/panda.png'
    },
    {
        name: 'chick',
        img: 'images/chick.png'
    },
    {
        name: 'dog',
        img: 'images/dog.png'
    },
    {
        name: 'fish',
        img: 'images/fish.png'
    },
    {
        name: 'frog',
        img: 'images/frog.png'
    },
    {
        name: 'hamster',
        img: 'images/hamster.png'
    },
    {
        name: 'panda',
        img: 'images/panda.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
let score = document.getElementById('score')
let cardChosen = []
let cardChosenID = []
const cardWon = []

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)

    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneID = cardChosenID[0];
    const optionTwoID = cardChosenID[1];

    if (optionOneID === optionTwoID) {
        // Aynı karta iki kere tıklanmışsa uyar ve tekrar kapat
        cards[optionOneID].setAttribute('src', 'images/blank.png');
        alert("Aynı karta iki kez tıkladınız!");
    } else if (cardChosen[0] === cardChosen[1]) {
        // Doğru eşleşme
        cards[optionOneID].setAttribute('src', 'images/ok.png');
        cards[optionTwoID].setAttribute('src', 'images/ok.png');
        cards[optionOneID].removeEventListener('click', flipCard);
        cards[optionTwoID].removeEventListener('click', flipCard);
        cardWon.push(cardChosen);
    } else {
        // Eşleşme yok, kartları geri çevir
        cards[optionOneID].setAttribute('src', 'images/blank.png');
        cards[optionTwoID].setAttribute('src', 'images/blank.png');
    }

    // Skoru güncelle
    score.textContent = cardWon.length;

    // Seçilen kartları sıfırla
    cardChosen = [];
    cardChosenID = [];

    // Oyun bitti mi kontrol et
    if (cardWon.length === cardArray.length / 2) {
        score.innerHTML = 'Tebrikler kazandınız!';
    }
}
  

function flipCard(){
    const cardID = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardID].name)
    cardChosenID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardChosen.length == 2){
        setTimeout(checkMatch,500)
    }
}
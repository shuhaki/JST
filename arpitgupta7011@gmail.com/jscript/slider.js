let scroll = document.getElementsByClassName("container")[0];
let cards = scroll.getElementsByClassName("block");
let details = block.getElementsByClassName("details");

function forward(){ 
    scroll.append(cards[0]);
}

function reverse(){
    scroll.prepend(cards[cards.length - 1]);
}
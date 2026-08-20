// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
let count = 0
function cardCounter(card){
  if (card >= 2 &&  card<= 6){
    count += 1
  }else if(card >=7 && card <=9){
    count = count
  }else if(card == 10 || card === "J" || card === "Q" || card === "K" || card === "A"){
    count -= 1
  }
  if(count >= 1){
    return`${count} Bet`
  }else{
    return`${count} Hold`
  }
}
let cards = 6
console.log(cardCounter(cards))
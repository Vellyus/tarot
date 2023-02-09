import { cardData } from "./cardData"
import { Card } from "./Card"

export function Cards() {

  function getRandomCards() {
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }

    const cardsInRandomOrder = shuffleArray(cardData)
    const randomCards = [cardsInRandomOrder[0], cardsInRandomOrder[1], cardsInRandomOrder[2]]
    return randomCards
  }

  const randomCards = getRandomCards()

  return (
    <div className="cards">
      <Card name={ randomCards[0].name } />
      <Card name={ randomCards[1].name } />
      <Card name={ randomCards[2].name } />
    </div>

  )
}




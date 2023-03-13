import { cardData } from "./cardData"
import { Card } from "./Card"

const majorArcana = cardData.filter(card => card.number < 21)

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

    // const cardsInRandomOrder = shuffleArray(cardData)
    const cardsInRandomOrder = shuffleArray(majorArcana)

    const randomCards = [cardsInRandomOrder[0], cardsInRandomOrder[1], cardsInRandomOrder[2]]
    return randomCards
  }

  const randomCards = getRandomCards()

  return (
    <div className="cards">
      <img src={ randomCards[0].img } />
      <Card
        name={ randomCards[0].name }
        keywords={ randomCards[0].keywords }
        desc={ randomCards[0].desc } />
      {/* <img src={ randomCards[1].img } />
      <Card name={ randomCards[1].name } />
      <img src={ randomCards[2].img } />
      <Card name={ randomCards[2].name } /> */}
    </div>

  )
}




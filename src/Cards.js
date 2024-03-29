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
      <Card
        cardIndex={ 0 }
        img={ randomCards[0].img }
        name={ randomCards[0].name }
        keywords={ randomCards[0].keywords }
        desc={ randomCards[0].desc } />
      <Card
        cardIndex={ 1 }
        img={ randomCards[1].img }
        name={ randomCards[1].name }
        keywords={ randomCards[1].keywords }
        desc={ randomCards[1].desc } />
      <Card
        cardIndex={ 2 }
        img={ randomCards[2].img }
        name={ randomCards[2].name }
        keywords={ randomCards[2].keywords }
        desc={ randomCards[2].desc } />
    </div>
  )
}




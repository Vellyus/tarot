import { Cards } from "./Cards"

export function Reading() {
  return (
    <div className="readingDiv">
      {/* <h1>Click to reveal the cards</h1> */ }
      <h1>Click to reveal the card</h1>
      <div className="cardsDiv">
        <Cards />
      </div>
    </div>
  )
}
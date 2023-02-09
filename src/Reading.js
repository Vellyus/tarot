import { Cards } from "./Cards"

export function Reading() {
  return (
    <div className="readingDiv">
      <h1>Click to reveal the cards</h1>
      <div className="cardsDiv">
        <Cards />
      </div>
    </div>
  )
}
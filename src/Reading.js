import { Cards } from "./Cards"

export function Reading() {
  return (
    <div className="readingDiv">
      <h2>Click to reveal the cards</h2>
      <div className="cardsDiv">
        <Cards />
      </div>
    </div>
  )
}
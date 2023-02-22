import animateScrollTo from "animated-scroll-to"
export function Intro() {

  const handleStartButton = () => {
    const introDiv = document.querySelector(".introDiv")
    const readingDiv = document.querySelector(".readingDiv")

    readingDiv.style.display = "block"
    animateScrollTo(readingDiv, { speed: 100, easing: (t) => { return t }, minDuration: 500 }).then(hasScrolledToPosition => {
      if (hasScrolledToPosition) introDiv.style.display = "none"
    })
  }
  return (
    <div className="introDiv">
      <h1>Tarot Reading</h1>
      <p>Before you start the reading focus on one particular question. When you have the question in mind press the Start Button to start the reading.</p>
      <button onClick={ () => handleStartButton() }>Start</button>
    </div>
  )
}
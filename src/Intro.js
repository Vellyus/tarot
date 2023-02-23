export function Intro() {

  const handleStartButton = () => {
    const introDiv = document.querySelector(".introDiv")
    const readingDiv = document.querySelector(".readingDiv")

    readingDiv.style.display = "block"
    document.querySelector("body").style.animation = "goUp 1.5s"
    introDiv.style.animationTimingFunction = "ease-out"
    introDiv.style.animationFillMode = "forwards"
    setTimeout(() => introDiv.style.display = "none", 1500)
  }
  return (
    <div className="introDiv">
      <h1>Tarot Reading</h1>
      <p>Before you start the reading focus on one particular question. When you have the question in mind press the Start Button to start the reading.</p>
      <button onClick={ () => handleStartButton() }>Start</button>
    </div>
  )
}
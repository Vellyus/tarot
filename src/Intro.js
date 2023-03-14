export function Intro() {

  const handleStartButton = () => {
    const introDiv = document.querySelector(".introDiv")
    const readingDiv = document.querySelector(".readingDiv")
    const body = document.querySelector("body")
    const paragraphs = document.querySelectorAll(".card p")
    const buttons = document.querySelectorAll(".card button")

    readingDiv.style.display = "block"
    paragraphs[0].style.display = "block"
    buttons[0].style.display = "initial"
    readingDiv.classList.add("appeared")
    readingDiv.style.animationTimingFunction = "ease-out"
    readingDiv.style.animationFillMode = "forwards"
    readingDiv.style.animation = "fadeIn 2.5s"
    setTimeout(() => readingDiv.style.opacity = 1, 2500)

    body.style.animationTimingFunction = "ease-out"
    body.style.animationFillMode = "forwards"
    body.style.animation = "goUp 1.5s"

    introDiv.style.animationTimingFunction = "ease-out"
    introDiv.style.animationFillMode = "forwards"
    introDiv.style.animation = "fadeOut 1.5s"
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
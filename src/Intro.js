import { useEffect } from "react"
export function Intro() {

  const handleStartButton = () => {
    const introDiv = document.querySelector(".introDiv")
    const readingDiv = document.querySelector(".readingDiv")
    const body = document.querySelector("body")
    const wrapper = document.querySelector(".wrapper")
    const overlay = document.querySelector(".overlay")

    readingDiv.style.display = "block"
    readingDiv.classList.add("appeared")
    readingDiv.style.animationTimingFunction = "ease-out"
    readingDiv.style.animationFillMode = "forwards"
    readingDiv.style.animation = "fadeIn 2.5s"
    setTimeout(() => readingDiv.style.opacity = 1, 2500)

    wrapper.style.animationTimingFunction = "ease-out"
    wrapper.style.animationFillMode = "forwards"
    wrapper.style.animation = "goDown 1.5s"

    overlay.style.animationTimingFunction = "ease-out"
    overlay.style.animationFillMode = "forwards"
    overlay.style.animation = "goDown 1.5s"

    body.style.animationTimingFunction = "ease-in"
    body.style.animationFillMode = "forwards"
    body.style.animation = "goUp 1.5s"

    introDiv.style.animationTimingFunction = "ease-out"
    introDiv.style.animationFillMode = "forwards"
    introDiv.style.animation = "fadeOut 1.5s"
    setTimeout(() => introDiv.style.display = "none", 1500)
  }

  useEffect(() => {
    document.querySelector(".introDiv h1").style.animation = "fadeInFromBelow 2s ease-in-out"

    setTimeout(() => {
      document.querySelector(".introDiv p").style.animation = "fadeIn 1.5s"
      document.querySelector(".introDiv button").style.animation = "fadeIn 1.5s"
      document.querySelector(".introDiv p").style.visibility = "visible"
      document.querySelector(".introDiv button").style.visibility = "visible"
    }, 1500)

  })

  return (
    <div className="introDiv">
      <h1>Tarot Reading</h1>
      <p>Before you start the reading focus on one particular question. When you have the question in mind press the Start Button to start the reading!</p>
      <button onClick={ () => handleStartButton() }>Start</button>
    </div>
  )
}
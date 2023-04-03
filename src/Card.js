export function Card({ cardIndex, img, name, keywords, desc }) {

  let key = 0

  const handleReadMore = (e, i) => {
    const nextParagraph = e.target.parentElement.nextSibling
    nextParagraph.style.display = "block"
    e.target.style.display = "none"

    nextParagraph.style.animationTimingFunction = "ease-out"
    nextParagraph.style.animationFillMode = "forwards"
    nextParagraph.style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"
  }

  const handleCardFlip = (e, cardIndex) => {
    console.log(e.target.parentElement.parentElement.parentElement.children[3].children[0])
    const fronts = document.querySelectorAll(".cardImgFront")
    const backs = document.querySelectorAll(".cardImgBack")

    fronts[cardIndex].style.transform = "perspective(800px) rotateY(-180deg)"
    backs[cardIndex].style.transform = "perspective(800px) rotateY(0deg)"

    document.querySelectorAll(".cardImg")[cardIndex].style.cursor = "initial"

    // reveal text under the card
    const title = document.querySelectorAll("h3")[cardIndex]
    const keywords = document.querySelectorAll("h4")[cardIndex]
    const desc = e.target.parentElement.parentElement.parentElement.children[3].children[0]

    setTimeout(() => {

      title.style.display = "block"
      keywords.style.display = "block"
      desc.style.display = "block"

      title.style.animationTimingFunction = "ease-out"
      title.style.animationFillMode = "forwards"
      title.style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"

      keywords.style.animationTimingFunction = "ease-out"
      keywords.style.animationFillMode = "forwards"
      keywords.style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"

      desc.style.animationTimingFunction = "ease-out"
      desc.style.animationFillMode = "forwards"
      desc.style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"

      // hide "Click to reveal cards text when all cards are revealed"
      const titles = document.querySelectorAll("h3")
      const revealText = document.querySelector("h2")
      let titlesRevealed = 0
      for (let i = 0; i < titles.length; i++) {
        if (titles[i].style.display === "block") titlesRevealed++
      }
      if (titlesRevealed === titles.length) revealText.style.display = "none"
    }, 600)

  }

  return (
    <div className="card">
      <div className="cardImg" onClick={ (e) => handleCardFlip(e, cardIndex) }>
        <div className="cardImgFront">
          <img src="./cow-cards/background.jpg" alt="" />
        </div>
        <div className="cardImgBack">
          <img src={ img } alt="" />
        </div>
      </div>


      <h3 className="name">{ name }</h3>
      <h4 className="keywords">Keywords: { keywords }</h4>
      <div className="desc">
        { desc.map((p, i) => {
          if (i === desc.length - 1) return (<div className="descParagraph" key={ i }><p>{ p }</p></div>)
          else return (<div className="descParagraph" key={ i }><p> { p }</p> <button onClick={ (e) => handleReadMore(e, i) }>Read More</button></div>)
        }) }
      </div>
    </div>
  )
}
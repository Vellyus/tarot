export function Card({ img, name, keywords, desc }) {

  let key = 0

  const handleReadMore = (i) => {
    const descParagraphs = document.querySelectorAll(".descParagraph")
    const button = document.querySelectorAll(".descParagraph button")[i]
    descParagraphs[i + 1].style.display = "block"
    button.style.display = "none"

    descParagraphs[i + 1].style.animationTimingFunction = "ease-out"
    descParagraphs[i + 1].style.animationFillMode = "forwards"
    descParagraphs[i + 1].style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"

  }

  const handleCardFlip = () => {
    const front = document.querySelector(".cardImgFront")
    const back = document.querySelector(".cardImgBack")

    front.style.transform = "perspective(800px) rotateY(-180deg)"
    back.style.transform = "perspective(800px) rotateY(0deg)"

    // reveal text under the card
    const title = document.querySelector("h3")
    const keywords = document.querySelector("h4")
    const descParagraphs = document.querySelectorAll(".descParagraph")

    setTimeout(() => {
      title.style.display = "block"
      keywords.style.display = "block"
      descParagraphs[0].style.display = "block"


      title.style.animationTimingFunction = "ease-out"
      title.style.animationFillMode = "forwards"
      title.style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"

      keywords.style.animationTimingFunction = "ease-out"
      keywords.style.animationFillMode = "forwards"
      keywords.style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"

      descParagraphs[0].style.animationTimingFunction = "ease-out"
      descParagraphs[0].style.animationFillMode = "forwards"
      descParagraphs[0].style.animation = "fadeIn 1.5s, slideInFromBelow 1.5s"
    }, 600)

  }

  return (
    <div className="card" key={ key }>
      <div className="cardImg" onClick={ () => handleCardFlip() }>
        <div className="cardImgFront">
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
          else return (<div className="descParagraph" key={ i }><p> { p }</p> <button onClick={ () => handleReadMore(i) }>Read More</button></div>)
        }) }
      </div>
    </div>
  )
}
export function Card({ img, name, keywords, desc }) {

  const handleReadMore = (i) => {
    const descParagraphs = document.querySelectorAll(".descParagraph")
    const button = document.querySelectorAll(".descParagraph button")[i]
    descParagraphs[i + 1].style.display = "block"
    button.style.display = "none"
  }

  const handleCardFlip = () => {
    const front = document.querySelector(".cardImgFront")
    const back = document.querySelector(".cardImgBack")

    front.style.transform = "perspective(800px) rotateY(-180deg)"
    back.style.transform = "perspective(800px) rotateY(0deg)"
  }

  return (
    <div className="card">
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
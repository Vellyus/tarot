export function Card({ name, keywords, desc }) {

  const handleReadMore = (i) => {
    const descParagraphs = document.querySelectorAll(".descParagraph")
    descParagraphs[i + 1].style.display = "block"
  }

  return (
    <div className="card">
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
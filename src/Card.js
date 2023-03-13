export function Card({ name, keywords, desc }) {
  return (
    <div className="card">
      <h3 className="name">{ name }</h3>
      <h4 className="keywords">Keywords: { keywords }</h4>
      <div className="desc">
        { desc.map((p, i) => {
          if (i === desc.length - 1) return (<p>{ p }</p>)
          else return (<div><p> { p }</p> <button>Read More</button></div>)
        }) }
      </div>
    </div>
  )
}
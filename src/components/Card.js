const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} alt={text}/>
      <p>{text}</p>
    </div>
  )
}

export default Card;
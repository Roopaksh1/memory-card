const Card = ({ image, text, pos, checkSelection }) => {
  return (
    <div className="card" id={pos} onClick={checkSelection}>
      <img src={image} alt={text}/>
      <p>{text}</p>
    </div>
  )
}

export default Card;
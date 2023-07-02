function Card({character: {name, nickName, imageUrl, alt, background}}) {
  
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName ?? null}</h4>
      </div>
      <img src={imageUrl} alt={alt} />
      <p>{background}</p>
    </div>
  );
}

export default Card;

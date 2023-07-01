function Card(props) {
  const name = props.Character.name;
  const nickname = props.Character.nickName ?? null;
  const photo = props.Character.imageUrl;
  const alt = props.Character.alt;
  const text = props.Character.background;
  
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickname}</h4>
      </div>
      <img src={photo} alt={alt} />
      <p>{text}</p>
    </div>
  );
}

export default Card;

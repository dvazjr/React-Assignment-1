function Table(props, index) {
  const { Character, rowIndex} = props
  const names = Character.name || Character.nickName;
  const skillSet = Character.skillset;
  const votes = Character.votes;
  const rowClass = rowIndex % 2 === 0 ? "dark" : "light";
  

  return (
    <>
      <tr className={rowClass} key={index}>
        <td>{names}</td>
        <td>{skillSet}</td>
        <td>{votes}</td>
      </tr>
    </>
  );
}

export default Table;

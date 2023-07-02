function Rows({character: {name, skillset, votes}}, rowIndex) {
  //const { character, rowIndex} = props
  const rowClass = rowIndex % 2 === 0 ? "dark" : "light";
  return (
    <>
      <tr className={rowClass}>
        <td>{name}</td>
        <td>{skillset}</td>
        <td>{votes}</td>
      </tr>
    </>
  );
}

export default Rows;

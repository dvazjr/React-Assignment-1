import React from "react";
import NavButton from "./Components/button";
import { data } from "../public/fma-data";
import Card from "./Components/card";
import Table from "./Components/table";

function App() {
  const namesArray = ["About us", "Info", "Support Us"];
  const ratingTitles = ["Name", "Skillset", "Votes"];
  const sortedData = [...data].sort((a, b) => b.votes - a.votes);
  const topFiveCharacters = sortedData.slice(0, 5)

  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          {namesArray.map((name, index) => (
            <NavButton name={name} key={index}/>
          ))}
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              {ratingTitles.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
            {topFiveCharacters.map((Character, index) => (
              <Table Character={Character} rowIndex={index} />
            ))}
          </tbody>
        </table>
      </section>
      <section id="character-cards">
        {data.map((Character, index) => (
          <Card Character={Character} key={index} />
        ))}
      </section>
    </>
  );
}

export default App;

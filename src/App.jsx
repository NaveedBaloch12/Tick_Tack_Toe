import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [GameArr, setGameArr] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true); // true = Player X, false = Player O

  // GameButton Cilck Handler
  const ButtonClickHandler = (row, col) => {
    // Create a deep copy of GameArr
    const newGameArr = GameArr.map((rowArr) => [...rowArr]);
    // Update the specific cell
    newGameArr[col][row] = isPlayerXTurn? 'X' : 'O';
    // Set the updated array to state
    setGameArr(newGameArr);

    //Toggle Player
    toggleplayer();

    // Check if any player win

  };

  const toggleplayer = () =>
  {
    //toogle player
    if(isPlayerXTurn)
    {
      setIsPlayerXTurn(false);
    }
    else
    {
      setIsPlayerXTurn(true);
    }
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Welcome to Tick Tack Toe Game!</h1>
      <div className="Card p-2">
        <div className="GameBoard">
          <div className="row">
            {GameArr[0].map((value, index) => (
              <div key={index} className="col m-0 p-0">
                <button className="btn GameButton" type="button" onClick={() => ButtonClickHandler(index, 0)}>
                  {value}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {GameArr[1].map((value, index) => (
              <div key={index} className="col m-0 p-0">
                <button key={index} className="btn GameButton" type="button" onClick={() => ButtonClickHandler(index, 1)}>
                  {value}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {GameArr[2].map((value, index) => (
              <div key={index} className="col m-0 p-0">
                <button key={index} className="btn GameButton" type="button" onClick={() => ButtonClickHandler(index, 2)}>
                  {value}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

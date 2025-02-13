import { useState ,useEffect } from "react";
import "./App.css";
import GameLogic from "./gamelogic";

function App() {
  const [GameArr, setGameArr] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true); // true = Player X, false = Player O
  const [currentPlayer, setcurrentPlayer] = useState("1st Player")
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState("");


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

  };

  useEffect(() => {
    GameLogic(GameArr, setIsGameOver, setWinner);
  }, [GameArr]); 

  // Reset the game 
  const ResetGameHandler = () =>
  {
    setGameArr([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setIsPlayerXTurn(true);
    setcurrentPlayer("1st Player");
    setIsGameOver(false);
    setWinner("");
  }

  const toggleplayer = () =>
  {
    //toogle player
    if(isPlayerXTurn)
    {
      setIsPlayerXTurn(false);
      setcurrentPlayer("2nd Player");
    }
    else
    {
      setIsPlayerXTurn(true);
      setcurrentPlayer("1st Player");
    }
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center">Welcome to Tick Tack Toe Game!</h1>
      <div className="Card p-2 mt-3">
        <div className="GameBoard">
          <div className="row">
            {GameArr[0].map((value, index) => (
              <div key={index} className="col m-0 p-0">
                <button className="btn GameButton" type="button" disabled={value !==""} onClick={() => ButtonClickHandler(index, 0)}>
                  {value}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {GameArr[1].map((value, index) => (
              <div key={index} className="col m-0 p-0">
                <button className="btn GameButton" type="button" disabled={value !==""} onClick={() => ButtonClickHandler(index, 1)}>
                  {value}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            {GameArr[2].map((value, index) => (
              <div key={index} className="col m-0 p-0">
                <button className="btn GameButton" type="button" disabled={value !==""} onClick={() => ButtonClickHandler(index, 2)}>
                  {value}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-3">
          {
            isGameOver && (
              <h1>
                Game Over! <strong>{winner}</strong> Won!
              </h1>
            )
            || (
              <h3>Current Player: {currentPlayer}</h3>
            )
          }
          <button className="btn btn-primary" onClick={ResetGameHandler}> Reset Game </button>
        </div>
      </div>
    </div>
  );
}

export default App;

const GameLogic = (GameArr, setIsGameOver, setWinner) => {
    // Check if any player win
    for (let i = 0; i < 3; i++) {
        if (GameArr[i][0] === GameArr[i][1] && GameArr[i][1] === GameArr[i][2] && GameArr[i][0] !== "") {
            setIsGameOver(true);
            setWinner(GameArr[i][0] === 'X' ? 'Player 1 Won' : 'Player 2 Won');
            return;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (GameArr[0][i] === GameArr[1][i] && GameArr[1][i] === GameArr[2][i] && GameArr[0][i] !== "") {
            setIsGameOver(true);
            setWinner(GameArr[0][i] === 'X' ? 'Player 1 Won' : 'Player 2 Won');
            return;
        }
    }

    if (
        GameArr[0][0] !== "" &&
        GameArr[0][0] === GameArr[1][1] &&
        GameArr[1][1] === GameArr[2][2]
    ) {
        setWinner(GameArr[0][0] === 'X' ? 'Player 1 Won' : 'Player 2 Won');
        setIsGameOver(true);
        return;
    }

    if (
        GameArr[0][2] !== "" &&
        GameArr[0][2] === GameArr[1][1] &&
        GameArr[1][1] === GameArr[2][0]
    ) {
        setWinner(GameArr[0][2] === 'X' ? 'Player 1 Won' : 'Player 2 Won');
        setIsGameOver(true);
        return;
    }

    // Check for a draw
    if (GameArr.flat().every((cell) => cell !== "")) {
        setWinner("Draw");
        setIsGameOver(true);
    }
}

export default GameLogic;
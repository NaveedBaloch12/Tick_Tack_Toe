const  GameLogic = (GameArr, setIsGameOver, setWinner) =>
{
    // Check if any player win
    for (let i = 0; i < 3; i++)
    {
        if (GameArr[i][0] === GameArr[i][1] && GameArr[i][1] === GameArr[i][2] && GameArr[i][0]!== "")
        {
            setIsGameOver(true);
            setWinner(GameArr[i][0] === 'X' ? 'Player 1': 'Player 2');
            return;
        }
    }

    for (let i = 0; i < 3; i++)
    {
        if (GameArr[0][i] === GameArr[1][i] && GameArr[1][i] === GameArr[2][i] && GameArr[0][i]!== "")
        {
            setIsGameOver(true);
            setWinner(GameArr[i][0] === 'X' ? 'Player 1': 'Player 2');
            return;
        }
    }

    
}

export default GameLogic;
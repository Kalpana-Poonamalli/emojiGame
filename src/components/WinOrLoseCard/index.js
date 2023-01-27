// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playTheGameAgain} = props

  const playAgain = () => {
    playTheGameAgain(score)
  }

  return (
    <div className="win-container">
      {score === 13 ? (
        <div className="rows">
          <div className="center">
            <h1 className="lose">You Won</h1>
            <p className="score">Best Score</p>
            <p id="score" className="final-score">
              12/12
            </p>
            <button type="button" className="play-again">
              Play Again
            </button>
          </div>
          <div className="img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
              className="lose-img"
            />
          </div>
        </div>
      ) : (
        <div className="rows">
          <div className="center">
            <h1 className="lose">You Lose</h1>
            <h1 className="score">Score</h1>
            <p className="final-score">{score}/12</p>
            <button
              type="button"
              className="play-again"
              onClick={playAgain}
              data-testid="playAgain"
            >
              Play Again
            </button>
          </div>
          <div className="img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
              className="lose-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard

// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playTheGameAgain} = props

  const playAgain = () => {
    playTheGameAgain(score)
  }

  return (
    <div>
      {score === 12 ? (
        <div className="win-container won-2">
          <div className="rows">
            <div className="center">
              <h1 className="lose">You Won</h1>
              <p className="score">Best Score</p>
              <p id="score" className="final-score">
                {score}/12
              </p>
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
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                alt="win or lose"
                className="lose-img"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="win-container">
          <div className="rows">
            <div className="center">
              <h1 className="lose">You Lose</h1>
              <p className="score">Score</p>
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
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard

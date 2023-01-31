// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playTheGameAgain} = props

  const wonOrNot = score === 12 ? 'You Won' : 'You Lose'
  const bScore = score === 12 ? 'Best Score' : 'Score'
  const image =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const playAgain = () => {
    playTheGameAgain(score)
  }

  return (
    <div>
      <div className="win-container">
        <div className="rows">
          <div className="center">
            <h1 className="lose">{wonOrNot}</h1>
            <p className="score">{bScore}</p>
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
            <img src={image} alt="win or lose" className="lose-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard

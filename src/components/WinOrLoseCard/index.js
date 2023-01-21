// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score} = props

  return (
    <div className="win-or-loss-container">
      {score === 12 ? (
        <div>
          <div className="f1">
            <h1 className="lose">You Lose</h1>
            <h1 className="score">Score</h1>
            <p className="final-score">{score}/12</p>
            <button type="button" className="play-again">
              Play Again
            </button>
          </div>
          <div className="img">
            <img src="" alt="lose" className="lose-img" />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="lose">You Lose</h1>
            <h1 className="score">Score</h1>
            <p className="final-score">{score}/12</p>
            <button type="button" className="play-again">
              Play Again
            </button>
          </div>
          <div className="img">
            <img src="" alt="lose" className="lose-img" />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard

// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="navbar-logo"
          />
          <h1 className="navbar-heading">Emoji Game</h1>
        </div>
        {score === 12 ? (
          ''
        ) : (
          <div className="navbar-items">
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar

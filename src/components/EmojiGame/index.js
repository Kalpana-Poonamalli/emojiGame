/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {isGameProcess: true, scoreList: [], topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojiClicks = id => {
    const {scoreList} = this.state
    if (id in scoreList) {
      this.setState({isGameProcess: false})
    }
    this.setState(prevState => ({scoreList: (prevState.scoreList, id)}))
  }

  render() {
    const {isGameProcess, scoreList, topScore} = this.state
    console.log(scoreList)
    const score = scoreList.length
    const shuffledListOfEmojis = this.shuffledEmojisList()

    console.log(shuffledListOfEmojis)
    console.log(shuffledListOfEmojis[0])

    return (
      <div className="ec-container">
        <NavBar score={score} topScore={topScore} />
        {isGameProcess ? (
          <div className="emoji-container">
            {shuffledListOfEmojis.map(eachItem => (
              <EmojiCard
                eachItem={eachItem}
                key={eachItem.id}
                onEmojiClicks={this.onEmojiClicks}
              />
            ))}
          </div>
        ) : (
          <WinOrLoseCard score={score} />
        )}
      </div>
    )
  }
}

export default EmojiGame

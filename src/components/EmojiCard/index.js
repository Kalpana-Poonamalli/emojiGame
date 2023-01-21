// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachItem, onEmojiClicks} = props
  const {id, emojiName, emojiUrl} = eachItem

  const buttonClicks = () => {
    onEmojiClicks(id)
  }

  return (
    <li className="emoji-card-container">
      <button type="button" className="button" onClick={buttonClicks}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard

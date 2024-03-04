// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, goThroughArrow} = props
  const {suggestion} = suggestionItem

  const onArrowClick = () => {
    goThroughArrow(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="arrow-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
          onClick={onArrowClick}
        />
      </button>
    </li>
  )
}

export default SuggestionItem

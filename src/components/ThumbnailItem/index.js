// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {inputList, isActive, setActiveListItem} = props
  const {thumbnailUrl, thumbnailAltText, id} = inputList

  const setClassName = isActive ? 'img active' : 'img'

  const onClickBtn = () => {
    setActiveListItem(id)
  }

  return (
    <li className="li-container">
      <button type="button" className="btn" onClick={onClickBtn}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={setClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

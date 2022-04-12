// Write your code here
import './index.css'

const starFilled =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
const starRemoved =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred ? starFilled : starRemoved

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          testid="star"
          className="star-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem

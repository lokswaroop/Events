// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, eventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickEvent = () => {
    eventId(id)
  }

  return (
    <li className="list">
      <div>
        <button type="button" className="imageButton" onClick={onClickEvent}>
          <img src={imageUrl} alt={name} className={eventImageClassName} />
        </button>
        <h1 className="color">{name}</h1>
        <p className="color">{location}</p>
      </div>
    </li>
  )
}
export default EventItem

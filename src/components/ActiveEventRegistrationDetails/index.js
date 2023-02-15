// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderYetToRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegister"
      />
      <p>
        In this project, build an Events app by applying the concepts we have
        learned till now.
      </p>
      <button type="button" className="registerHereButton">
        Register Here
      </button>
    </div>
  )

  const renderRegister = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registerImage"
      />
      <p>You have already registered the event</p>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations"
        className="registrationsClosedImage"
      />
    </div>
  )

  const renderNoActive = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegister()
      case registrationStatus.registrationsClosed:
        return renderRegistrationClosed()
      default:
        return renderNoActive()
    }
  }

  return (
    <div className="container">{renderActiveEventRegistrationDetails()}</div>
  )
}
export default ActiveEventRegistrationDetails

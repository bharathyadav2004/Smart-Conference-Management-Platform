import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              <br></br>
              <span>
                - **Event Creation and Scheduling**: Tools for organizers to
                create and manage events.
              </span>
              <br></br>
              <span>
                - **Participant Registration**: Secure and intuitive
                registration process.
              </span>
              <br></br>
              <span>
                - **Session Management**: Organizers can manage speakers and
                session details.
              </span>
              <br></br>
              <span>
                - **AI-Driven Insights**: Feedback analytics and session
                recommendations.
              </span>
              <br></br>
              <span>
                - **Real-Time Translation**: Accessibility for multilingual
                participants.
              </span>
              <br></br>
              <span>
                - **Gamification**: Engagement through networking and point
                systems.
              </span>
            </p>
            <div className="steps-actions">
              <button className="thq-button-animated thq-button-filled steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text26 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text27 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text29 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text30 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text32 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text33 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text35 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text36 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step1Description:
    'Easily set up your conference by entering event details, dates, and locations.',
  step3Description:
    'Track attendee registrations, payments, and send out confirmations and reminders.',
  step2Title: 'Customize Agenda',
  step2Description:
    'Tailor the agenda to fit your conference schedule and add sessions, speakers, and breaks.',
  step1Title: 'Create Your Event',
  step3Title: 'Manage Registrations',
  step4Description:
    'Interact with attendees through polls, Q&A sessions, and networking opportunities during the event.',
  step4Title: 'Engage Attendees',
}

Steps.propTypes = {
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps

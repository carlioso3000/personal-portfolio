import './techBox.css'

function TechBox({ icon, text }) {
  return (
    <div className="box-content">
      <div className="box-icon">
        <i>{icon}</i>
      </div>
      <div className="box-text">
        <p className="box-text">{text}</p>
      </div>
    </div>
  )
}

export default TechBox;
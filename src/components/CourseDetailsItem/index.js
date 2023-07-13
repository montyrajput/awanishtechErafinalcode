import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="course-details-card">
      <div className="course-container">
        <img className="course-image" src={imageUrl} alt={name} />
        <div className="course-details-info">
          <h1 className="course-details-heading">{name}</h1>
          <p className="course-paragraph">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem

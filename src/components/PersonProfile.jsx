import PropTypes from 'prop-types';
function PersonProfile({ person }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">Birthday: {person.birth}</p>
        <p className="card-text">Eyes: {person.eyes}</p>
      </div>
    </div>
  );
}
 
PersonProfile.propTypes = { person: PropTypes.object.isRequired };
export default PersonProfile;
 
 
import PropTypes from 'prop-types';
import '../RatingBar.css';
 
function RatingBar({ rate }) {
  const maxStars = 10;
 
  return (
    <div className="rating-bar">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={index < rate ? 'filled-star' : 'empty-star'}>
          ★
        </span>
      ))}
    </div>
  );
}
 
RatingBar.propTypes = {
  rate: PropTypes.number.isRequired,
};
 
export default RatingBar;
 
 
import PropTypes from "prop-types";
import Top from "../Top";
import Bottom from "../Bottom";

function Card(props) {
  return (
    <div className="card">
      <Top name={props.name} img={props.img} />
      <Bottom tel={props.tel} email={props.email} />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;

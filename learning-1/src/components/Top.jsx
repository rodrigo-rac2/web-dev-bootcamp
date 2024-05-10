import PropTypes from "prop-types";
import Avatar from "./Avatar";

function Top(props) {
  return (
    <div className="top">
      <h2 className="name">{props.name}</h2>
      <Avatar img={props.img} />
    </div>
  );
}

Top.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Top;

import PropTypes from "prop-types";

function Button(props) {
  return (
    <button type="submit">{props.registered ? "Login" : "Register"}</button>
  );
}

Button.propTypes = {
  registered: PropTypes.bool.isRequired,
};

export default Button;

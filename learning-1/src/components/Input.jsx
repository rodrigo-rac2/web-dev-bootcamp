import PropTypes from 'prop-types';

export default function Input(props) {
    return <input type={props.type} placeholder={props.placeholder} />;
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

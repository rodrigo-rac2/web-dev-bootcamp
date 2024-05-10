import PropTypes from 'prop-types';

function Avatar(props) {
    return <img src={props.img} alt="avatar_img" className="circle-img " />
}

Avatar.propTypes = {
    img: PropTypes.string.isRequired
};

export default Avatar;
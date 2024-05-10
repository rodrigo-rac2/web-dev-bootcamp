import PropTypes from 'prop-types';

function Detail(props) {
    return (<p className="info">{props.info}</p>);
}

Detail.propTypes = {
    info: PropTypes.string.isRequired
};

export default Detail;
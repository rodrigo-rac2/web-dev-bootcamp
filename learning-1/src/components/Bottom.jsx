import PropTypes from 'prop-types';
import Detail from './Detail';

function Bottom(props) {
    return (
        <div className='bottom'>
            <Detail info={props.tel} />
            <Detail info={props.email} />
        </div>
    );
}

Bottom.propTypes = {
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default Bottom;
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.img} alt="avatar_img" className="circle-img " />
      </div>
      <div className="bottom">
        <p className="info bottom">{props.tel}</p>
        <p className="bottom info">{props.email}</p>
      </div>
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

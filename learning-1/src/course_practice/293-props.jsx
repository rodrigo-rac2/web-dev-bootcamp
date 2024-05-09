import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" width="200" height="200"/>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const contacts = [
  {
    name: "Beyonce",
    img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    tel: "+123 456 789",
    email: "b@b.com"
  },
  {
    name: "Jack Bauer",
    img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    tel: "+987 654 321",
    email: "jackbauer@jack.com"
  },
  {
    name: "Chuck Norris",
    img: "https://conteudo.imguol.com.br/c/entretenimento/77/2023/07/21/chuck-norris-em-walker-texas-ranger-1689963407852_v2_900x506.jpg",
    tel: "+918 372 574",
    email: "norris@chuck.com"
  }
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div>
  <h1>My contacts</h1>
  {contacts.map((contact, key) => (
    <Card
      key={key}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
      email={contact.email}
    /> 
  ))}
</div>
  )

import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const singers = [
  {
    name: "Kurt Cobain",
    img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/09/Nirvana-SP.jpg?w=1220&h=674&crop=1",
  },
  {
    name: "Lana Del Rey",
    img: "https://portalpopline.com.br/wp-content/uploads/2023/01/Lana-Del-Rey.png",
  },
  {
    name: "Brooke Fraser",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWO7u1mjBYXpvg-eRQ_8g0prhnAUtG6fqrRzh4sdzw99BEiRIop74dab-NJcwtQ476jd2rar5aSOoPPrM3KUHMkVg_pVSTdDNKVWoYDzmEq_6KySlYOZryz7F8hj3ciIS0693lithCqg6m/s1600/brooke-fraser-3.jpg",
  },
];

root.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      My Favorite Singers
    </h1>
      {singers.map((singer, index) => (
        <div key={index}>
        <img
          data-test-id={"singer-li-" + index}
          alt={singer.name}
          title={singer.name}
          src={singer.img} 
          className="square-img "
        />
        <br />{singer.name}
        <br />
        <br /> 
        </div>
      ))}
  </div>
);

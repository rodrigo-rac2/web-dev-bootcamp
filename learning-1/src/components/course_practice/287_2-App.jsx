import React from "react";
import { Heading } from "./components/Heading";
import { ImgMapDiv } from "./components/ImgMapDiv";

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

export function App() {
  return <div>
      <Heading />
      <ImgMapDiv list={singers} />
    </div>
}

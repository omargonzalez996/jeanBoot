import React from "react";
import "../styles/slider.css";
import { Carousel } from "react-bootstrap";

function Carrousel() {
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const data = [
    {
      url: "/carousel/1.jpg",
      title: "Einz",
      subtitle:
        "Lorem ipsum dolorinim veniam, quis nostrud exercitation ullamco laodo consequat.",
    },
    {
      url: "/carousel/2.jpg",
      title: "Swei",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      url: "/carousel/3.jpg",
      title: "Drei",
      subtitle:
        "Lorem ipsum dolor sit amet, consecteon ullamco laboris nisi ut aliquip consequat.",
    },
  ];

  return (
    <Carousel>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
          <img style={imgStyle} src={item.url} alt={`${item.title}.jpg`} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrousel;

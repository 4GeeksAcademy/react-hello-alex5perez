import React from 'react';
import '../../styles/index.css';
import image1 from '/src/img/image1.jpg';
import image2 from '/src/img/image2.png';
import image3 from '/src/img/image3.jpg';
import image4 from '/src/img/image4.jpg';
import PropTypes from "prop-types";

const Card = (props) => {
  const cardInfo = [
    {
      title: "Montañas",
      image: image1,
      description: "Imagen de las montañas",
      buttonUrl: "montañas.com",
    },
    {
      title: "God of War",
      image: image2,
      description: "Kratos pasandola bien",
      buttonUrl: "godofwar.com",
    },
    {
      title: "Resident Evil",
      image: image3,
      description: "Resident Evil Village wallpaper",
      buttonUrl: "capcom.com",
    },
    {
      title: "Outlast",
      image: image4,
      description: "Juego de Terror Outlast",
      buttonUrl: "outlast.com",
    },
  ];

  return (
    <div className="container my-4 p-0">
      <div className="row g-3">
        {cardInfo.map((props, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-12">
            <div class="card p-1">
              <img src={props.image} />
              <h5 className="card-title mt-3">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <a href={props.buttonUrl} className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default Card;
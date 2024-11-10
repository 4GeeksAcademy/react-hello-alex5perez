import React from 'react';
import '../../styles/index.css';
import image1 from '../../img/image1.jpg';
import image2 from '../../img/image2.png';
import image3 from '../../img/image3.jpg';
import image4 from '../../img/image4.jpg';

function Card() {
  return (
    <div class="container my-4">
      <div class="row d-flex justify-content-between">

        <div class="card col-md-3 col-sm-6 col-12">
          <img src={image1} />
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

        <div class="card col-md-3 col-sm-6 col-12">
          <img src={image2} />
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

        <div class="card col-md-3 col-sm-6 col-12">
          <img src={image3} />
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

        <div class="card col-md-3 col-sm-6 col-12">
          <img src={image4} />
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
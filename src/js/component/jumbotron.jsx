import React from 'react';

function Jumbotron() {
  return (
    <div className="container text-start p-4" style={{ backgroundColor: '#eaecef' }}>
      <h1 className="display-1"><strong>A Warm Welcome!</strong></h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium esse consequatur,
        sit temporibus nobis omnis perspiciatis ab nemo hic. Sit dolorum voluptas cum natus tenetur beatae debitis,
        consequatur nostrum?</p>
      <button type="button" className="btn btn-primary mb-3">Call to action!</button>
    </div>
  );
}

export default Jumbotron;
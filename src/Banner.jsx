import React from 'react';

const Banner = ()=>(
    <div className="main-banner img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt='baner' src="https://cdna.artstation.com/p/assets/images/images/014/597/858/large/hinkos-eigeiter-bg-t-v-62.jpg?1544636474" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="./" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
)

export default Banner;
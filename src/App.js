import React, {Fragment} from 'react';
// import logo from './logo.svg';
// import './App.css';
import './styles/styles.scss'    //estilos ed-grid
import Banner from './Banner'

const App = ()=> (
  // <Fragment>
  <>
    <div className='ed-grid m-grid-3'>
      <h1>holaaaa</h1>
      <p>parrafo</p>
    </div>
    <div>
      <h1>holaaaa 2</h1>
      <p>parrafo 2</p>
      <img alt='imagen' src='https://cdna.artstation.com/p/assets/images/images/014/597/858/large/hinkos-eigeiter-bg-t-v-62.jpg?1544636474' />
    </div>
    <Banner />
    <Banner />
    <Banner />
    <Banner />
    </>
  // </Fragment> //para exportar mas de un hijo
)
export default App;


//reglas
//toda etiqueta debe cerrarse
//2. todo elemento debe tener un solo padre
//3. apoyarse de los fragments para poder exportar mas de dos elementos
//class = className
//for = htmlFor
//nose puede utilizar if, qhite else  
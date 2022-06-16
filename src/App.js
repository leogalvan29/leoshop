
import Header from './components/Header';
import styles from '../src/css/Global.module.css'
//import Cuerpo from './components/Cuerpo';
import Welcome from './components/Welcome';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';

function App() {
  
   const [nombre,setNombre] = useState('juan')

  return (
    <div className="App">
      <Header/>
      <ItemListContainer/>
     
      <Welcome 
       nombre={nombre}
       setNombre={setNombre}
      />
    </div>
  );
}

export default App;

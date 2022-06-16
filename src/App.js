
import Header from './components/Header';
import styles from '../src/css/Global.module.css'
import Cuerpo from './components/Cuerpo';
//import Welcome from './components/Welcome';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer';

function App() {
  
   const [nombre,setNombre] = useState('juan')
   const [greeting, setGreeting] = useState('mensaje')

  return (
    <div className="App">
      <Header/>
      <ItemListContainer 
       
       greeting={greeting}
       setGreeting={setGreeting}
      
      />
      
      <Cuerpo/>
     
   
    </div>
  );
}

export default App;

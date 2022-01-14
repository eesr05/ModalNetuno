import { useState } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import Planet from './assets/netunoPlanet.png'
import Navbar from './components/Nav/Nav'
import SimpleSlider from './components/Carrousel/Carrousel'
import Grid from './components/Grid/Grid'

import './App.css';

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)

function handleOpen() {
  setIsOpen(true)
}

function handleClose() {
  setIsOpen(false)
}

const customStyles = {
  content:{
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    height:'500px',
    width:'550px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
  overlay: {
    background: '#AEC8F3',
    opacity: 1,
    
  }
}

  return (
    <>
     <Navbar />
   
    <div className="">
      <header className="App-header">
      
      
       
        <div className='container'>
         <img className="planeta-container"src={Planet} alt="Planeta Netuno">
       
         </img> 
         
         <div className="planeta-texto">
         <SimpleSlider />
          
         </div>
         <button className='modal-button' onClick={handleOpen}>Saiba Mais</button>
          <Modal isOpen={modalIsOpen} onRequestClose={handleClose} style={customStyles}>
            <p className="modal-text">
             <Grid />
            </p>
            <button className='modal-button' onClick={handleClose}>Close</button>
          </Modal>

         
        </div>
        
      </header>
      
    </div>
    </>
  );
}

export default App;

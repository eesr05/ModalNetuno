import React from 'react'
import './styles.css'
import logo from '../../../src/netuno.png'


function Navbar(){
    return(
        <div className="nav-top">
              <img src={logo} className="App-logo" alt="logo" />
            <p className="nav-p">Netuno</p>
        </div>
    )
}
export default Navbar
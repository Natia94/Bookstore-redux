import React from 'react'
import logo from '../bookstack.png';

function HomeComponent(props) {
    return(
        <div style={{
            height: '100vh',
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: '#258ea6'
          }}>
            <div style={{
         
          display: "flex",
          flexDirection: 'column',
          padding: "20px 20px",
          borderRadius: '10px',
          boxShadow: "0px 10px 50px #555",
          backgroundColor: '#ffffff'
        }}>
            <img height="400" width="600" src={logo} alt = ""/>
            </div>
        </div>
    )
}


export default HomeComponent
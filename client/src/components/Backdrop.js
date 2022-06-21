import React from 'react'
import "./Backdrop.css";


export const Backdrop = ( { click, show }) => {
  return show && <div className="backdrop" onClick={click}></div>;
}


 
import * as React from "react";
import { Link } from 'react-router-dom';
import "./Header.scss";

export const Header = () => {

  return (
    <>
      <header className='header'>
        <div className='headerFont'>
          my-tool
        </div>
        <div className='tool-menu'>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/toolb">About</Link></p>
          <p><Link to="/toolc">Service</Link></p>
      </div>
      </header>
    </>
  )
}

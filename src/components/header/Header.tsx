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
          <p><Link to="/my-tool/">Hash</Link></p>
          <p><Link to="/my-tool/stringTool">StringTool</Link></p>
          <p><Link to="/my-tool/toolc">Tool3</Link></p>
      </div>
      </header>
    </>
  )
}

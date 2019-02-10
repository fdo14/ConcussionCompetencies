import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <div class="item">
          <Link to='/'><i class="home icon homeIcon large"></i></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

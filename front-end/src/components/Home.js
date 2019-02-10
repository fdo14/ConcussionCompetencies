import React from 'react';
import { Link } from "react-router-dom";

import '../css/Home.css';
import '../css/Bootstrap.css';
import Background from '../img/blueBack.png';




class Home extends React.Component{
  renderPanels(buttonTitle, logo, link){
    return(
      <div className="col-md homeScreen panel">
        <div>
          <img className="icon" src={logo} />
        </div>
        <Link to={link}><button type="button" className="btn btn-primary btn-lg button btnBottom">{buttonTitle}</button></Link>
      </div>
    );
  }

  render(){
    const aboutLogo = require('../img/notebook.png');
    const blogLogo = require('../img/blog.png');
    const mailLogo = require('../img/mail.png');
    document.body.style = `background-image: url(${Background}); background-size: cover;background-attachment:fixed;background-position:center; `;
    return(
      <div>


        <div className="container">
          <div className="row align-items-center " style={{marginTop: 0}}>
            <div className="col panel titleScreen">
              <h1 class="display-4">Concussion Competencies</h1>
              <h5 style={{paddingBottom: 10}}><strong>A framework for school-based concussion management</strong></h5>
            </div>
          </div>
          <div className="row row align-items-center" style={{marginTop: 0}}>
            {this.renderPanels('Learn More', aboutLogo, '/about')}
            {this.renderPanels('Blog', blogLogo, '/blog')}
            {this.renderPanels('Contact Us', mailLogo, '/contact')}
          </div>
        </div>
      </div>
    );
  };
}

export default Home;

import React from 'react';
import { Link } from "react-router-dom";

import '../css/Home.css';
import '../css/Bootstrap.css';
import Background from '../img/blueBack.png';
import Book from '../img/book1.jpeg'




class Home extends React.Component{
  renderPanels(buttonTitle, logo, link, extraTitle){
    return(
      <div className="col-md homeScreen panel">
        <div>
          <img className="icon" src={logo} />
        </div>
        <Link to={link}>
          <button type="button" className="btn btn-primary btn-lg button btnBottom">
            {buttonTitle} <br />
            <div style={{fontSize: 15}}>{extraTitle}</div>
          </button>
        </Link>
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
            <div className="col-md panel titleScreen">
              <h1 class="display-4 mobileShrinkH3">Concussion Competencies</h1>
              <h5 class="mobileShrinkH6"><strong>A framework for school-based concussion management</strong></h5>
              <hr className="hrRule" />
              <div className="row" style={{marginTop:0}}>
                <div className="col-sm-3" onClick={() => window.open('https://www.amazon.com/Concussion-Competencies-school-based-concussion-management/dp/1727607090/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=','mywindow')}>
                  <img src={Book} className="bookDisplay"/>
                </div>
                <div className="col-sm-9 squishLeft">
                Concussions happen. Is your school ready to manage them properly?

Our book, Concussion Competencies, aims to help schools develop best-practice strategies to address the challenge of concussions in schools. 10 empirically supported competencies necessary in concussion management are delineated for:

School Superintendents, Boards, and Administrators, Athletic Directors and Coaches, Teachers, Licensed and Ancillary Health Care Providers, Parents and Students
                </div>
              </div>
            </div>
          </div>
          <div className="row row align-items-center" style={{marginTop: 0}}>
            {this.renderPanels('What We Offer', aboutLogo, '/about')}
            {this.renderPanels('Blog', blogLogo, '/blog', 'News & Updates')}
            {this.renderPanels('Contact Us', mailLogo, '/contact')}
          </div>
        </div>
      </div>
    );
  };
}

export default Home;

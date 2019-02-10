import React from 'react';
import Card from './AboutUsCard';
import '../css/AboutUs.css';


import Art from '../img/art_pic_blog.jpg';
import JennPic from '../img/jen_pic_blog.jpg';
import Jon from '../img/jon_pic_blog.jpg';
import Background from '../img/yellowBack.png';
import Header from './Header';

const AboutUs = () => {
  document.body.style = `background-image: url(${Background}); background-size: cover;background-attachment:fixed;background-position:center; `;
  return(
    <div>
      <Header />
      <div class="container">
        <div class="row">
          <Card picture={Art} name="Dr. Arthur Maerlender" description="PhD, ABPP-CN" date="2012" firstName='art'/>
          <Card picture={JennPic} name="Dr. Jennifer Parent-Nichols" description="DPT, EdD, PCS, CBIS" date="2012" firstName='jenn'/>
          <Card picture={Jon} name="Dr. Jonathan Lichteinstein" description="PsyD, MBA" date="2012" firstName='jon'/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

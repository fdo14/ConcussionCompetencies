import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Bootstrap.css';

import '../css/AboutUs.css';

export const AboutUsCard = (props) => {
  return(
    <div class="col-md-4 cardClass">
      <div class="ui card">
        <div class="image">
          <img src={props.picture} />
        </div>
        <div class="content">
          <Link to={`/aboutus/${props.firstName}`} class="header nameLink">{props.name}</Link>
          <div class="meta">
            <span class="date">Joined in {props.date}</span>
          </div>
          <div class="description">
            {props.description}.
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            {props.location}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeClass } from '../actions';

import '../css/Bootstrap.css';
import '../css/About.css';

import Consulting from '../img/consulting.png';
import Students from '../img/education.png';
import Book from '../img/book.jpg';
import Amazon from '../img/amazon.png';
import Background from '../img/greenBack.png';
import Header from './Header';

class About extends React.Component{
  state = {aLink: ''}
  componentDidMount(){
    const chosenClassStart= ["outer", "center", "outer"]
    this.props.changeClass(chosenClassStart);
  }


  handleClick = (e, data) => {
    var chosenClassNew = [];
    var newALink = "";
    if(e.currentTarget.id == 0){
      chosenClassNew = ["center", "outer", "outer"];
      newALink = "";
    }else if(e.currentTarget.id == 2){
      chosenClassNew = ["outer", "outer", "center"];
      newALink = "https://www.amazon.com/Concussion-Competencies-school-based-concussion-management/dp/1727607090/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=";
    } else if(e.currentTarget.id == 1){
      chosenClassNew = ["outer", "center", "outer"];
      newALink = "";
    }
    console.log(e.currentTarget.id);
    this.setState({aLink: newALink});
    this.props.changeClass(chosenClassNew);

    //this.setState({aLink: newALink});
  }

  handleLinkClick = () => {
    if(this.state.aLink !== ""){
      var url = 'https://www.amazon.com/Concussion-Competencies-school-based-concussion-management/dp/1727607090/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=';
      var win = window.open(url, '_blank');
      win.focus();
    }
  }


  render(){
    document.body.style = `background-image: url(${Background}); background-size: cover;background-attachment:fixed;background-position:center; `;

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row row align-items-center">

            <div className={`col-md about panel ${this.props.chosenClass[0]}`} onClick={this.handleClick} id='0'>
              <h3>Consulting</h3>
              <p>Helping teachers and coaches identify concussion and providing them with the tools and protocol to bring students back to school safely.</p>
              <img className="logo" src={Consulting} />
              <Link to="/contact" className="ui basic button btnBottom">
                <i className="icon phone volume"></i>
                Could Your School Use Help?
              </Link>

            </div>

            <div className={`col-md about panel ${this.props.chosenClass[1]}`} onClick={this.handleClick} id='1'>
              <h1>What We Do</h1>
              <p>We provide the knowledge & guidance to bring concussed students back to the classroom & the field.</p>
              <img src={Students} className="centerImage"/>
              <Link to='/aboutus'><p className='pLink blueText'>Who Are We?</p></Link>
            </div>

            <div className={`col-md about panel ${this.props.chosenClass[2]}`} onClick={this.handleClick} id='2'>
              <h3>Return To Learn Manual</h3>
              <p>Providing the steps necessary to safely bring students back into the classroom.</p>
              <a onClick={this.handleLinkClick}>
                <img className="logoLarge left" src={Book} />
                <img className="logoLarge" src={Amazon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

}

const mapStateToProps = state => {
  return { chosenClass: state.changeClass.classList}
}

export default connect(
  mapStateToProps,
  { changeClass }
)(About);

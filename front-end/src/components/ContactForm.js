import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../css/Contact.css';
import Background from '../img/redBack.png';
import Header from './Header';


class ContactForm extends React.Component{
  state = { firstName: '', lastName: '', email: ''};

  resetForm = () => {
    this.setState({ firstName: '', lastName: '', email: ''});
  }

  onFormSubmit = event => {
    event.preventDefault();
    axios({
            method: "POST",
            url:"https://142.93.90.49:5002/send",
            data: {
                name: this.state.firstName,
                subject: this.state.email,
                messsage: this.state.message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                this.resetForm();
                document.getElementById('buttonSpacer').classList.remove('buttonSpacer');
                document.getElementById('form').classList.add('success');
                document.getElementById('Submit').style.display = "none";
                document.getElementById('Home').style.display = "block";
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })

  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value});
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value});
  }

  onEmailChange = event => {
    this.setState({email: event.target.value});
  }

  render(){
    document.body.style = `background-image: url(${Background}); background-size: cover;background-attachment:fixed;background-position:center; `;
    return(
      <div>
        <Header />
      <div className="form">

        <form className="ui form segment" id="form">
          <h4 className="ui dividing header">Contact Us</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onFirstNameChange}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onLastNameChange}
                />
              </div>
            </div>
          </div>

          <div className="field buttonSpacer" id="buttonSpacer">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="email@gmail.com"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div class="ui success message buttonSpacer">
            <div class="header">Message Sent</div>
            <p>We will get back to you shortly!</p>
          </div>


          <button id="Submit" className="ui primary button" type="submit" onClick={this.onFormSubmit}>Submit</button>
          <Link id="Home" style={{display: 'none'}} className="ui primary button homeBtn" to="/">Home</Link>

        </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;

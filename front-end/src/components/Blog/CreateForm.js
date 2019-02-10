import React from 'react';

import { Field, reduxForm } from 'redux-form';


class CreateForm extends React.Component{

  renderInput = ({input, label, meta}) => {
    return(
      <div className="field">
        <label>{label}</label>
        <input {...input}/>
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }


  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" style={{marginTop: 0}}>
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <label>Write Your Post</label>
        <div>
          <Field name="message" component="textarea" />
        </div>
        <label>Who Wrote This?</label>
        <Field className="field" name="name" component="select" >
            <option />
            <option value="art">Art</option>
            <option value="jenn">Jenn</option>
            <option value="jon">Jon</option>
        </Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'blogForm'
})(CreateForm);

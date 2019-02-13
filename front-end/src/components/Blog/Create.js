import React from 'react';
import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../../actions';

import CreateForm from './CreateForm'
import Modal from '../Modal';
import history from '../../history'

class Create extends React.Component {

  componentDidMount(){
      this.props.fetchPosts();
  }

  onSubmit = (formValues) => {
    this.props.createPost(formValues, this.props.posts);
  };

  renderForm = () => {
    return(
      <div>
        <CreateForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  renderModal = () => {
    if(this.props.currentUserId == 115089269998867004817){
      return(
        <Modal
            title="Write a Post!"
            content= {this.renderForm()}
            onDismiss={() => history.push('/blog')}
        />
      );
    }
  }

  render(){
    return(
      <div>{this.renderModal()}</div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.blog),
    currentUserId: state.auth.userId
  };
}

export default connect(mapStateToProps, { createPost, fetchPosts })(Create);

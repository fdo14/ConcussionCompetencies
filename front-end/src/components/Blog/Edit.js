import React from 'react';
import { connect } from 'react-redux';
import { editPost, fetchPosts } from '../../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import CreateForm from './CreateForm'
import Modal from '../Modal';
import history from '../../history'

class Edit extends React.Component {
  componentDidMount(){
      this.props.fetchPosts();
  }

  onSubmit = (formValues) => {
    this.props.editPost(this.props.location.state.blogId, formValues, this.props.posts);
  };

  renderForm = () => {
    return(
      <div>
        <CreateForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.posts[this.props.posts.indexOf(this.props.posts.find(obj => obj.id == this.props.location.state.blogId))], 'title', 'message', 'name')}
        />
      </div>
    );
  }

  renderEdit(){
    if(this.props.location.state){
      return(
        <Modal
            title="Edit "
            content= {this.renderForm()}
            onDismiss={() => history.push('/blog')}
        />
      );
    } else {
      return(
        <div class="ui negative message">
          <i class="close icon"></i>
          <div class="header">
            You shouldn't be here!
          </div>
          <p>Please return home</p>
          <Link to="/" class="fluid ui button">Home</Link>
      </div>
    );
    }
  }

  render(){
    return(
      <div>{this.renderEdit()}</div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.blog),
    currentUserId: state.auth.userId,
  };
}

export default connect(mapStateToProps, { editPost, fetchPosts })(Edit);

import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions';
import _ from 'lodash';


import Modal from '../Modal';
import history from '../../history';

class Edit extends React.Component {
  componentDidMount(){
      var blogId = this.props.location.state.blogId;
  }

  onClick = () => {
    this.props.deletePost(this.props.location.state.blogId, this.props.posts);
  };

  renderForm = () => {
    console.log(this.props.location.state.blogId);
    return(
      <div>
        <h2 class="ui header">
          Are you sure you want to delete "<strong>{this.props.location.state.title}</strong>"?
        </h2>
        <div class="ui fluid buttons center floated">
          <button class="ui button" onClick={() => history.push('/blog')}>Cancel</button>
          <div class="or"></div>
          <button class="ui negative button" onClick={this.onClick}>Delete</button>
        </div>
      </div>
    );
  }

  render(){
    return(
      <Modal
          title="Delete"
          content= {this.renderForm()}
          onDismiss={() => history.push('/blog')}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.blog)
  };
}

export default connect(mapStateToProps, { deletePost })(Edit);

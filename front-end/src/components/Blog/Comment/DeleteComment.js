import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';


import Modal from '../../Modal';
import history from '../../../history';

class DeleteComment extends React.Component {
  state = {missingClass: ''}
  onDeleteClick = () => {
    this.props.deleteComment(this.props.location.state.blogId, this.props.comments, this.props.location.state.title, this.props.location.state.id);
    this.setState({missingClass: 'success'})
  }

  renderForm = () => {
    console.log(this.props.location.state.blogId);
    return(
      <div className={`ui form ${this.state.missingClass}`} style={{marginTop: 0}} id="formName">
        <h2 class="ui header" >
          Are you sure you want to delete "<strong>{this.props.location.state.title}</strong>"?
        </h2>
        <div class="ui fluid buttons center floated">
          <button class="ui button" onClick={() => history.push('/blog')}>Cancel</button>
          <div class="or"></div>
          <button class="ui negative button" onClick={this.onDeleteClick}>Delete</button>
        </div>
        <div class="ui success message">
          <div class="header">Comment Deleted!</div>
          <div style={{textAlign: "center"}}>
            <Link className="ui primary button" to="/blog">Back to the Blog!</Link>
          </div>
        </div>
      </div>
    );
  }

  onDismiss = () => {
    this.setState({missingClass: ''});
    history.push('/blog');
  }

  render(){
    return(
      <Modal
          title="Delete"
          content= {this.renderForm()}
          onDismiss={this.onDismiss}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    comments: Object.values(state.comments)
  };
}

export default connect(mapStateToProps, { deleteComment })(DeleteComment);

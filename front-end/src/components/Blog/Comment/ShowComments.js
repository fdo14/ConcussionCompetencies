import React from 'react';

import CommentsList from './CommentsList';
import './Comment.css';


class ShowComments extends React.Component{

  render(){
    return(
      <div class="ui comments">
        <CommentsList id={this.props.id} />
      </div>
    );
  }
}


export default ShowComments;

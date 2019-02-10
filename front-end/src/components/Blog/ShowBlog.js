import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowBlog extends React.Component{
  renderAdmin(){
    if(this.props.currentUserId == 115089269998867004817){
      return (
        <div className="right floated content topPadding">

          <Link to={{ pathname: 'blog/edit', state: { blogId: this.props.blogId}}} className="ui button primary" >Edit Post</Link>
          <Link to={{ pathname: 'blog/delete', state: { blogId: this.props.blogId, title: this.props.title}}}  className="ui button negative">Delete Post</Link>
        </div>
      );
    }
  }

  render(){

    var imageLink, authorName;
    if(this.props.author === 'art'){
      imageLink = require('../../img/art_pic_blog.jpg');
      authorName = 'Art';
    } else if ( this.props.author === 'jenn'){
      imageLink = require('../../img/jen_pic_blog.jpg');
      authorName = 'Jenn';
    } else if(this.props.author === 'jon'){
      imageLink = require('../../img/jon_pic_blog.jpg');
      authorName = 'Jon';
    } else {

    }

    if(imageLink){
      return(

        <div>
          <h2 class="ui header">
            <img src={imageLink} class="ui circular image" style={{marginRight: 10}}/>
            {this.props.title}
            <div class="sub header">Written by {authorName} on {this.props.date}</div>
          </h2>
          {this.props.description}
          <div style={{marginBottom: 50}}>
            {this.renderAdmin()}
          </div>
        </div>
      );
    }
    else return(<h2>No posts yet!</h2>);

  }
}

const mapStateToProps = state => {
  return{
    currentUserId: state.auth.userId
  }
}

export default connect(mapStateToProps, null)(ShowBlog);

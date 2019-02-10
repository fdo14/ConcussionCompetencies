import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import { Link } from 'react-router-dom';

class BlogList extends React.Component {
  componentDidMount(){
      this.props.fetchPosts();
  }


  renderList(){
    var blogIds = this.props.posts.map(post => ({ title: post.title, text: post.message, id: post.id, author: post.name, date: post.date }));
    
    return this.props.posts.slice(0).reverse().map(post => {
      var imageLink;
      var authorName;
      if(post.name === 'art'){
        imageLink = require('../../img/art_pic_blog.jpg');
        authorName = 'Art';
      } else if ( post.name === 'jenn'){
        imageLink = require('../../img/jen_pic_blog.jpg');
        authorName = 'Jenn';
      } else {
        imageLink = require('../../img/jon_pic_blog.jpg');
        authorName = 'Jon';
      }
      return(
        <div className="item">
          <img className="ui avatar image" src={imageLink} onClick={() => this.props.onBlogClick(post.id, blogIds)}/>
          <div className="content">
            <a
              className="header"
              onClick={() => this.props.onBlogClick(post.id, blogIds)}
            >{post.title}</a>
            <div className="description">Written by <strong>{authorName}</strong> on {post.date}</div>
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div>
        <h2>Posts</h2>
        <div className="ui list">{this.renderList()}</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.blog),
    currentUserId: state.auth.userId,
  };
}

export default connect(mapStateToProps, { fetchPosts })(BlogList);

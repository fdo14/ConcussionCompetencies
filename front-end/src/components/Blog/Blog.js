import React from 'react';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

import './Blog.css';
import BlogList from './BlogList';
import ShowBlog from './ShowBlog';
import Background from '../../img/yellowBackOpaque.png';
import ShowComments from './Comment/ShowComments';

class Blog extends React.Component{


  constructor(props) {
      super(props);

      this.state = {title: '', description: '', id: '', author: '', date: null, realId: ''}
      this.onBlogClick = this.onBlogClick.bind(this)
  }

  componentDidMount(){
    this.props.fetchPosts()
  }

  componentDidUpdate(){

    if(!this.state.title && this.props.posts.length != 0){
      var postToRead = this.props.posts.map(post => ({ title: post.title, text: post.message, id: post.id, author: post.name, date: post.date, realId: post._id }));
      var length = postToRead.length;
      if(postToRead[length-1].title !== undefined){
        this.setState({
          title: postToRead[length-1].title,
          description: postToRead[length-1].text,
          id: postToRead[length-1].id,
          author: postToRead[length-1].author,
          date: postToRead[length-1].date,
          realId: postToRead[length-1].realId
        })
      }
    }

  }

  renderAdmin(){
    if(this.props.currentUserId == 115089269998867004817){
      return (
        <Link to="blog/create"><button className="ui button primary">Create Post</button></Link>
      );
    }
  }

  showCommentsTentatively(){
    if(this.state.title){
      return(
        <ShowComments id={this.state.id}/>
      );
    }
  }

  onBlogClick(postId, blogIds){
    var postToRead =  blogIds.filter(function(posts) {
	     return posts.id == postId;
    });
    this.setState({
      title: postToRead[0].title,
      description: postToRead[0].text,
      id: postToRead[0].id,
      author: postToRead[0].author,
      date: postToRead[0].date
    })
  }


  render(){
    document.body.style = `background-image: url(${Background}); background-size: cover;background-attachment:fixed;background-position:center; `;
    return(
      <div >
        <div className="ui secondary pointing menu menuBlog">
          <div class="item">
            <Link to='/'><i class="home icon homeIcon"></i></Link>
          </div>
          <div className="right menu">
            {this.renderAdmin()}
            <GoogleAuth />
          </div>
        </div>

        <div class="collapsableDiv">
          <div class="row">
            <div class="col-md-8 colLeft">
              <ShowBlog
                title={this.state.title}
                description={this.state.description}
                blogId={this.state.id}
                author={this.state.author}
                date={this.state.date}
              />
              {this.showCommentsTentatively()}
            </div>
            <div class="col-md-4 colRight">
              <BlogList onBlogClick={this.onBlogClick}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    posts: Object.values(state.blog),
    currentUserId: state.auth.userId,
    blogInQuestion: state.choice.blogInQuestion
  }
}

export default connect(mapStateToProps, { fetchPosts })(Blog);

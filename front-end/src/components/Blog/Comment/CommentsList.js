import React from 'react';
import { connect } from 'react-redux';
import { createComment, fetchComments, deleteComment } from '../../../actions';
import { Link } from 'react-router-dom';

class CommentsList extends React.Component{
  componentDidMount(){
    this.props.fetchComments();
  }

  state = { comment: ''};

  onCommentChange = event => {
    this.setState({comment: event.target.value});
  }

  onButtonClick = () =>{
    this.props.createComment(this.props.id, this.state.comment, this.props.comments, this.props.currentUserId);
    this.setState({ comment: ''});
    this.renderList();
  }

  renderAdmin(id, title){

    if((this.props.currentUserId == 115089269998867004817 || this.props.currentUserId == id)&&this.props.isSignedIn){
      return (
        <div class="actions">
        <Link className="delete" to={{ pathname: 'blog/comment/delete', state: { id: id, title: title, blogId: this.props.id}}}  >Delete</Link>
        </div>
      );
    }
  }

  renderForm(){
    if(this.props.currentUserId){
      return(
          <div class="ui form" style={{marginTop: 0}}>
            <div class="field">
              <textarea rows="2"
                placeholder="Share your thoughts."
                value={this.state.comment}
                onChange={this.onCommentChange}
                style={{borderBottom: "none"}}
              />
              <div className="buttonDiv">
                <button className="mini ui button primary" style={{margin: 0}} onClick={this.onButtonClick}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
      }
  }

  choosePicture(){
    const picArray = ['compass', 'baseball ball', 'basketball ball', 'bowling ball', 'football ball',
                'futbol', 'futbol outline', 'golf ball', 'hockey puck', 'quidditch',
                'table tennis', 'volleyball ball']
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var i = getRandomInt(picArray.length);
    console.log(i);
    return picArray[i];
  }

  renderList(){
    const currentId = this.props.id;
    var postToRead =  this.props.comments.filter(function(posts) {
	     return posts.id == currentId;
    });
    if(postToRead[0]){
      return postToRead[0].comments.slice(0).reverse().map(post => {
        return(
          <div class="comment">
            <div class="avatar" style={{marginLeft: 10, marginTop: 5}}>
              <i class={`${this.choosePicture()} icon large`}></i>
            </div>
            <div class="content">
              <div class="metadata">
                <span class="date">{post.date}</span>
              </div>
              <div class="text">
                {post.comment}
              </div>
              {this.renderAdmin(post.googleId, post.comment)}
            </div>
          </div>

        )
      });
    }
  }

  render(){
    return(
      <div className="ui list">
        {this.renderForm()}
        {this.renderList()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
    comments: Object.values(state.comments),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(mapStateToProps, { fetchComments, createComment, deleteComment})(CommentsList);


import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import React, { useState } from "react";


const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  const [likes, setLikes] = useState(props.post.likes)
  function addLikes() {
    setLikes(likes + 1)
  }
  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection addLikes={addLikes} newLikes={likes} />
      {/* Comments also wants its props! */}
      <Comments
        comments={post.comments} />
    </div>
  );
};

export default Post;

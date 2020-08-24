import React from 'react';
import Post from './Post';
import './Posts.css';
import dummyData from '../../dummy-data';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {dummyData.map((e) => (

        <Post
          id={e.id}
          username={e.username}
          thumbnailUrl={e.thumbnailUrl}
          imageUrl={e.imageUrl}
          likes={e.likes}
          timestamp={e.timestamp}
          comments={e.comments}


        />
      ))}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;

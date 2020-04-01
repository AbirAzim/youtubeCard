import React from 'react';
import PostItem from './PostItem';

const Post = props => {
  const { posts } = props;
  console.log(posts);
  return (
    <div className='container'>
      {posts.map(post => (
        <PostItem key={post.id} postItem={post} />
      ))}
    </div>
  );
};

export default Post;

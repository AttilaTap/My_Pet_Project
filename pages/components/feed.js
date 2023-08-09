import { useState } from 'react';
import styled from 'styled-components';
import AddPost from './addPost';
import Post from './post';

const StyledFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Styledh1 = styled.h1`
  color: #333;
`;

export default function Feed({ initialPosts = [] }) {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (post) => {
    setPosts([post, ...posts]);
  };

  const handleDeleteLastPost = () => {
    if (posts.length > 0) {
      const updatedPosts = posts.slice(1);
      setPosts(updatedPosts);
    }
  };

  return (
    <StyledFeed>
      <AddPost onAdd={handleAddPost} />
      <button onClick={handleDeleteLastPost}>Delete Last Post</button>
      {posts.map((post, index) => (
        <Post
          key={index}
          {...post}
        />
      ))}
    </StyledFeed>
  );
}

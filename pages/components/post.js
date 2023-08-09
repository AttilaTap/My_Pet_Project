import styled from 'styled-components';

const StyledPost = styled.div`
  border: 1px solid #e1e1e1;
  padding: 16px;
  margin: 16px 0;
`;

const PostTitle = styled.h2``;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
`;

function Post({ title, image }) {
  return (
    <StyledPost>
      <PostTitle>{title}</PostTitle>
      <PostImage
        src={image}
        alt={title}
      />
    </StyledPost>
  );
}

export default Post;

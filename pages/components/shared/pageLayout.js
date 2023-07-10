import styled from 'styled-components';

const StyledPageLayout = styled.div`
  display: flex;
`;

function PageLayout({ children }) {
  return <StyledPageLayout>{children}</StyledPageLayout>;
}

export default PageLayout;
import React from 'react';
import styled from 'styled-components/macro';

const Root = styled.div`
  border: 2px solid ${props => props.theme.colors.accent2};
`;

const Layout = () => (
  <Root>
    root
  </Root>
);

export default Layout;
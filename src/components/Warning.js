import React from 'react';
import styled from 'styled-components/macro';
import {Box} from "../theme";

const Root = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
`;

const Message = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  font-style: italic;
`;

const Warning = props =>
  <Root layout initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
    <Message>
      {props.message}
    </Message>
  </Root>
;

export default Warning;

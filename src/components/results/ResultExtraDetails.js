import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {Box} from "../../theme";
import ArrowIcon from "../../left-arrow-angle.svg";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 0;
  background-color: ${props => props.theme.colors.dark};
  height: 30px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: rotate(${props => props.isOpen ? '180deg' : '0'});
  transition: all 200ms;
`;

const Icon = styled.img`
  transform: rotate(270deg) scale(.5);
  filter: invert(1);
`;

const Details = styled.div`
  height: 200px;
  width: 100%;
`;

const ResultExtraDetails = props => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <Root>
      <Button onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <Icon src={ArrowIcon} />
      </Button>
      {
        isOpen && <Details>?</Details>
      }
    </Root>
  );
};

export default ResultExtraDetails;
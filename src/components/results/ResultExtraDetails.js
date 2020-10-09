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
`;

const Icon = styled.img`
  filter: invert(1);
  transform: rotate(${props => props.isOpen ? '90deg' : '270deg'}) scale(.5);
  transition: all 200ms;
`;

const Details = styled.div`
  height: 200px;
  width: 100%;
`;

const renderDetails = item =>
  <Details>
    <div>Archived: {!item.archived ? 'no' : 'yes'}</div>
    <div>Created: {item.created_at}</div>
    <div>Pushed: ${item.pushed_at}</div>
    <div>Forks: {item.forks}</div>
    <div>Full Name: {item.full_name}</div>
    <a href={item.html_url}>GitHub</a>
    <div>id: {item.id}</div>
    <a href={item.url}>Full Details</a>
  </Details>
;

const ResultExtraDetails = props => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <Root>
      {
        isOpen && renderDetails(props.item)
      }
      <Button onClick={() => setIsOpen(!isOpen)} >
        <Icon src={ArrowIcon} isOpen={isOpen} />
      </Button>
    </Root>
  );
};

export default ResultExtraDetails;
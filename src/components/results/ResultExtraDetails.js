import React from 'react';
import styled from 'styled-components/macro';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  font-family: ${props => props.theme.fonts.heading};
`;

const Details = styled.div`
  width: 100%;
`;

const Label = styled.span`
  font-size: 14px;
  letter-spacing: -1px;
  font-weight: bold;
  margin-right: 4px;
`;

const Value = styled.span`
  font-size: 14px;
  letter-spacing: -1px;
  font-style: italic;
`;

const A = styled.a`
  font-size: 14px;
  letter-spacing: -1px;
  font-weight: bold;
`;

const renderDetails = item =>
  <Details>
    <div>
      <Label>Archived:</Label>
      <Value>{!item.archived ? 'no' : 'yes'}</Value>
    </div>

    <div>
      <Label>Created:</Label>
      <Value>{item.created_at}</Value>
    </div>

    <div>
      <Label>Pushed:</Label>
      <Value>${item.pushed_at}</Value>
    </div>

    <div>
      <Label>Forks:</Label>
      <Value>{item.forks}</Value>
    </div>

    <div>
      <Label>Full Name:</Label>
      <Value>{item.full_name}</Value>
    </div>

    <div>
      <Label>id:</Label>
      <Value>{item.id}</Value>
    </div>

    <div>
      <A href={item.html_url} target="_blank">GitHub</A>
    </div>

    <div>
      <A href={item.url} target="_blank">Full Details</A>
    </div>
  </Details>
;

const ResultExtraDetails = props => {
  return(
    <Root>
      {
        renderDetails(props.item)
      }
    </Root>
  );
};

export default ResultExtraDetails;
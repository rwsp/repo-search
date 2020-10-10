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
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.colors.dark};
`;

const Label = styled.div`
  font-size: 14px;
  letter-spacing: -1px;
  font-weight: bold;
  width: 80px;
  min-width: 80px;
  display: flex;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 6px;
  margin-right: 2px;
`;

const Value = styled.span`
  font-size: 14px;
  letter-spacing: -1px;
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 2px;
`;

const A = styled.a`
  font-size: 14px;
  letter-spacing: -1px;
  font-style: italic;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const renderDetails = item =>
  <Details>

    <Row>
      <Label>id</Label>
      <Value>{item.id}</Value>
    </Row>

    <Row>
      <Label>Archived</Label>
      <Value>{!item.archived ? 'no' : 'yes'}</Value>
    </Row>

    <Row>
      <Label>Created</Label>
      <Value>{new Date(item.created_at).toLocaleDateString()}</Value>
    </Row>

    <Row>
      <Label>Pushed</Label>
      <Value>{new Date(item.pushed_at).toLocaleDateString()}</Value>
    </Row>

    <Row>
      <Label>Forks</Label>
      <Value>{item.forks}</Value>
    </Row>

    <Row>
      <Label>Full Name</Label>
      <Value>{item.full_name}</Value>
    </Row>

    <Row>
      <Label>GitHub</Label>
      <A href={item.html_url} target="_blank">{item.html_url}</A>
    </Row>

    <Row>
      <Label>Details</Label>
      <A href={item.url} target="_blank">{item.url}</A>
    </Row>
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
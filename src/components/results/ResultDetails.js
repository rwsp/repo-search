import StarIcon from "../../star.svg";
import React from "react";
import styled from 'styled-components/macro';

const Name = styled.div`
  text-overflow: fade;
  white-space: nowrap;
  overflow: hidden;
  
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.dark};
  display: flex;
`;

const Description = styled.div`
  font-size: 14px;
  font-style: italic;
  font-family: ${props => props.theme.fonts.text};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerName = styled.span`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.dark};
`;

const Img = styled.img`
  max-height: 30px;
  max-width: 30px;
  border-radius: ${props => props.theme.borderRadius};
  margin-right: 6px;
`;

const Stars = styled.span`
  font-size: 14px;
  font-style: italic;
  font-family: ${props => props.theme.fonts.text};
  margin-top: 4px;
`;

const Language = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.dark};
`;

const ResultDetails = props =>
<>
  <Name>{props.item.name.toUpperCase()}</Name>
  <Language>{props.item.language}</Language>

  <Row>
    <Img src={props.item.owner.avatar_url}/>
    <OwnerName>{props.item.owner.login}</OwnerName>
  </Row>

  <Row>
    <Img src={StarIcon}/>
    <Stars>({props.item.stargazers_count})</Stars>
  </Row>

  <Description>
    {
      props.item.description && props.item.description.length > 250
        ? props.item.description.slice(0, 249) + '...'
        : props.item.description
    }
  </Description>
</>;

export default ResultDetails;
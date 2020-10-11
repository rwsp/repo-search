import StarIcon from "../../star.svg";
import React from "react";
import styled from 'styled-components/macro';
import DotsIcon from "../../three-dots.svg";
import CloseIcon from "../../close.svg";
import {Box, RotateAndScale} from "../../theme";

const Name = styled.div`
  text-overflow: fade;
  white-space: nowrap;
  overflow: hidden;
  font-size: 20px;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.dark};
  display: flex;
  margin-right: 6px;
`;

const Description = styled.div`
  font-size: 14px;
  font-style: italic;
  font-family: ${props => props.theme.fonts.text};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  ${props => props.space && 'justify-content: space-between;'}
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

const Button = styled(Box)`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.dark};
  height: 40px;
  width: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Root = styled.div`
  > * {
    margin-bottom: 14px;
  }
`;

const Icon = styled.img`
  filter: invert(1);
  ${RotateAndScale};
`;

const DESCRIPTION_MAX_LENGTH = 250;

const toDescription = item => item.description && item.description.length > DESCRIPTION_MAX_LENGTH
  ? item.description.slice(0, DESCRIPTION_MAX_LENGTH - 1) + '...'
  : item.description;

/**
 *
 * ResultDetails - visual component for ESSENTIAL details for a single search result
 *
 */

const ResultDetails = props =>
<Root>
  <Row space>
    <Name>{props.item.name.toUpperCase()}</Name>

    <Button onClick={props.toggleModal}>
      <Icon src={props.useCloseIcon ? CloseIcon : DotsIcon} alt={'dots-icon'} height={15} />
    </Button>

  </Row>
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
      toDescription(props.item)
    }
  </Description>
</Root>;

export default ResultDetails;
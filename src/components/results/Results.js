import React from 'react';
import styled from 'styled-components/macro';
import {connect} from "react-redux";
import {Box} from "../../theme";
import Loading from "../Loading";
import {isLoading} from "../../store/module";
import ResultOverview from "./ResultOverview";

const Root = styled(Box)`
  background-color: ${props => props.error ? props.theme.colors.error : props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.resultsFound ? 'flex-start' : 'center'};
  width: 100%;
`;

const NoResults = styled.span`
  font-family: ${props => props.theme.fonts.text};
  font-style: italic;
  color: ${props => props.error ? props.theme.colors.light : props.theme.colors.dark};
`;

const Link = styled.a`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -1px;
  color: ${props => props.theme.colors.dark};
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 100%;
  text-decoration: none;
  background-color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.borderRadius};
`;

const SERVER_ERROR = "Server error. Try again later. Here's some Tetris!";
const NO_RESULTS = "No results found. Have you searched for Tetris?";

const tetrisLink = <Link href={'https://tetris.com/play-tetris'} target={'_blank'}>PLAY TETRIS</Link>;

const Results = props => {
  if(!props.submitted) {
    return null;
  }

  if(props.loading) {
    return <Root><Loading /></Root>;
  }

  return (
    <Root error={props.error} resultsFound={props.items.length}>
      {props.error && [<NoResults error>{SERVER_ERROR}</NoResults>, tetrisLink]}
      {!props.error && !props.items.length && <NoResults>{NO_RESULTS}</NoResults>}
      {props.items.map(i => <ResultOverview item={i} />)}
    </Root>
  )
};
;

const mapStateToProps = state => ({
  submitted: state.submitted,
  loading: isLoading(state),
  error: state.error,
  items: state.results.items,
});

export default connect(mapStateToProps)(Results);
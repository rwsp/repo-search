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

const SERVER_ERROR = "Server error. Try again later.";
const NO_RESULTS = "No results found.";

const toContent = (error, items) => {
  if(error) {
    return <NoResults error>{SERVER_ERROR}</NoResults>;
  }

  if(!error && !items.length) {
    return <NoResults>{NO_RESULTS}</NoResults>;
  }

  return items.map(i => <ResultOverview item={i} key={i.id}/>);
};

/**
 *
 * ResultExtraDetails - visual parent component for all search results
 *
 */

const Results = props => {
  if(!props.submitted) {
    return null;
  }

  if(props.loading) {
    return <Root><Loading /></Root>;
  }

  return (
    <Root error={props.error} resultsFound={props.items.length} layout>
      {
        toContent(props.error, props.items)
      }
    </Root>
  )
};

const mapStateToProps = state => ({
  submitted: state.submitted,
  loading: isLoading(state),
  error: state.error,
  items: state.results.items,
});

export default connect(mapStateToProps)(Results);
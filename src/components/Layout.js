import React from 'react';
import styled from 'styled-components/macro';
import Search from "./Search";
import Results from "./results/Results";
import SearchControls from "./SearchControls";
import {connect} from "react-redux";
import {Box} from "../theme";
import Pagination from "./Pagination";

const Root = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  background-color: ${props => props.theme.colors.main1};
  
  
  @media (min-width: ${props => props.theme.breakpoint}) {
    padding: 30px 0;
  }
`;

const Panel = styled(Box)`
  box-shadow: 0 0 10px 2px ${props => props.theme.colors.main2};
  background-color: ${props => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 24px;
  max-width: ${props => props.theme.breakpoint};
  margin: 0 auto;
  
  > * {
    margin-bottom: 40px;
  }
  
  @media (max-width: ${props => props.theme.breakpoint}) {
    height: auto;
    min-height: 100vh;
  }
`;

const Cta = styled.span`
  font-size: 26px;
  letter-spacing: -1px;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.heading};
`;

const Layout = props => (
  <Root>
    <Panel initial={{opacity: 0}} animate={{opacity: 1}}>
      <Cta>Find Some Repos</Cta>
      <Search />
      {props.areControlsOpen && <SearchControls />}
      {props.showPagination && <Pagination />}
      <Results />
      {props.showPagination && <Pagination />}
    </Panel>
  </Root>
);

const mapStateToProps = state => ({
  areControlsOpen: state.areControlsOpen,
  showPagination: state.success && state.results.numberOfPages > 1,
});

export default connect(mapStateToProps)(Layout);
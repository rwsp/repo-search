import React from 'react';
import styled from 'styled-components/macro';
import Search from "./Search";
import Results from "./results/Results";
import SearchControls from "./SearchControls";
import {connect} from "react-redux";
import {Box} from "../theme";
import Pagination from "./Pagination";
import {AnimateSharedLayout, motion} from "framer-motion";
import Warning from "./Warning";
import {MAX_RESULTS_PER_SEARCH} from "../constants";

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

const Cta = styled(motion.span)`
  font-size: 26px;
  letter-spacing: -1px;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.heading};
`;

const toWarning = numberOfExistentItems => {
  if(numberOfExistentItems <= MAX_RESULTS_PER_SEARCH) {
    return null;
  }

  return (
    `Displaying top ${MAX_RESULTS_PER_SEARCH.toLocaleString()} 
    of ${numberOfExistentItems.toLocaleString()} repositories...`
  );

};

/**
 *
 * Layout - top level visual component. Contains all visual UI
 *
 */

const Layout = props => (
  <Root>
    <AnimateSharedLayout>
      <Panel layout initial={{opacity: 0}} animate={{opacity: 1}}>
        <Cta layout>Find Some Repos</Cta>
        <Search />
          {props.showControls && <SearchControls />}
          {props.warning && <Warning message={props.warning} />}
          {props.showPagination && <Pagination />}
          <Results />
          {props.showPagination && <Pagination />}
          {props.warning && <Warning message={props.warning} />}
      </Panel>
    </AnimateSharedLayout>

  </Root>
);

const mapStateToProps = state => ({
  showControls: state.showControls,
  showPagination: state.success && state.results.numberOfPages > 1,
  warning: toWarning(state.results.numberOfExistentItems),
});

export default connect(mapStateToProps)(Layout);
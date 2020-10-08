import React from 'react';
import styled from 'styled-components/macro';
import Search from "./Search";
import Results from "./results/Results";
import SearchControls from "./SearchControls";
import {connect} from "react-redux";
import {Box} from "../theme";

const toGradient = colors => `to bottom right, ${colors.main1}, ${colors.main2}, ${colors.grey}, ${colors.accent1}`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: .3;
  background-image: linear-gradient(${props => toGradient(props.theme.colors)});
`;

const Contents = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 1;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: ${props => props.theme.breakpoint}) {
    padding: 30px 0;
  }
`;

const Panel = styled(Box)`
  background-color: ${props => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 40px 24px;
  max-width: ${props => props.theme.breakpoint};
  
  > * {
    margin-bottom: 40px;
  }
`;

const Cta = styled.span`
  font-size: 26px;
  letter-spacing: -1px;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.heading};
`;

const Layout = props => (
  <div>
    <Background />
    <Contents>
      <Panel>
        <Cta>Find Some Repos</Cta>
        <Search />
        {props.areControlsOpen && <SearchControls />}
        <Results />
        {/*<Pagination />*/}
      </Panel>
    </Contents>
  </div>
);

const mapStateToProps = state => ({
  areControlsOpen: state.areControlsOpen,
});

export default connect(mapStateToProps)(Layout);
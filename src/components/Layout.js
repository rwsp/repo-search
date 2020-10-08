import React from 'react';
import styled from 'styled-components/macro';
import Search from "./Search";
import Results from "./results/Results";
import SearchControls from "./SearchControls";
import {connect} from "react-redux";

// const toGradient = colors => `to bottom right, ${colors.blue}, ${colors.light}, ${colors.blue}, ${colors.light}`;
// background-image: linear-gradient(${props => toGradient(props.theme.colors)});

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: .3;
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
`;

const Panel = styled.div`
  background-color: ${props => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 40px 24px;
  
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
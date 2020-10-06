import React from 'react';
import styled from 'styled-components/macro';
import Search from "./Search";
import Results from "./Results";
import Filters from "./Filters";
import axios from 'axios';

const toGradient = colors => `to bottom right, ${colors.blue}, ${colors.light}, ${colors.blue}, ${colors.light}`;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  background-image: linear-gradient(${props => toGradient(props.theme.colors)});
  opacity: .3;
`;

const Contents = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  opacity: 1;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Panel = styled.div`
  height: 500px;
  width: 500px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 30px;
  box-shadow: 0 0 10px 2px ${props => props.theme.colors.shadow};
  display: flex;
`;

const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = () => (
  <div>
    <Background/>
    <Contents>
      <Panel>
        <Search />
      </Panel>
    </Contents>
  </div>
);

export default Layout;
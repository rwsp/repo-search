import React, {useState} from 'react';
import styled from 'styled-components/macro';
import Filters from "./Filters";
import Sort from "./Sort";
import {Box} from "../theme";
import CloseIcon from "../close.svg"
import {connect} from "react-redux";
import {toggleControls} from "../store/reducers";

const Root = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Close = styled.img`
  cursor: pointer;
  align-self: flex-end;
`;

const SearchControls = props =>
  <Root>
    <Close src={CloseIcon} height={22} onClick={() => props.toggleControls()}/>
    <Sort />
    <Filters/>
  </Root>
;

const mapDispatchToProps = dispatch => ({
  toggleControls: () => dispatch(toggleControls()),
});

export default connect(null, mapDispatchToProps)(SearchControls);
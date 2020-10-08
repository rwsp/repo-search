import React, {useState} from 'react';
import styled from 'styled-components/macro';
import Filters from "./Filters";
import Sort from "./Sort";
import {Box} from "../theme";
import CloseIcon from "../close.svg"
import {connect} from "react-redux";
import {toggleControls} from "../store/reducers";

const Close = styled.img`
  position: relative;
  top: -14px;
  left: -14px;
  cursor: pointer;
`;

const SearchControls = props =>
  <Box>
    <Close src={CloseIcon} height={22} onClick={() => props.toggleControls()}/>
    <Sort />
    <Filters/>
  </Box>
;

const mapDispatchToProps = dispatch => ({
  toggleControls: () => dispatch(toggleControls()),
});

export default connect(null, mapDispatchToProps)(SearchControls);
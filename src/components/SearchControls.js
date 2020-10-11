import React from 'react';
import styled from 'styled-components/macro';
import Filters from "./Filters";
import Sort from "./Sort";
import {Box, RotateAndScale} from "../theme";
import CloseIcon from "../close.svg"
import {connect} from "react-redux";
import {toggleControls} from "../store/reducers";
import {AnimatePresence} from "framer-motion";

const Root = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Close = styled.img`
  cursor: pointer;
  align-self: flex-end;
  ${RotateAndScale};
`;

const SearchControls = props =>
  <AnimatePresence>
    <Root initial={{opacity: 0}} exit={{opacity: 1}} animate={{opacity: 1}} transition={{duration: 1}}>
      <Close src={CloseIcon} height={22} onClick={() => props.toggleControls(false)}/>
      <Sort />
      <Filters/>
    </Root>
  </AnimatePresence>

;

const mapDispatchToProps = dispatch => ({
  toggleControls: showControls => dispatch(toggleControls(showControls)),
});

export default connect(null, mapDispatchToProps)(SearchControls);
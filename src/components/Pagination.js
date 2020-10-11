import React from 'react';
import styled from 'styled-components/macro';
import {connect} from "react-redux";
import {submitSearch, toggleControls} from "../store/reducers";
import LeftIcon from "../left-arrow-angle.svg";
import RightIcon from "../right-arrow-angle.svg";
import DoubleArrowIcon from "../double-left-angle-arrows.svg";
import {css} from "styled-components";
import {motion} from "framer-motion";

const styling = css`
  margin: 0 5px;
  height: 40px;
  width: 40px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  border: none;
  outline: none;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  ${styling};
  opacity: ${props => props.enabled ? 1 : .4};
  cursor: ${props => props.enabled ? 'pointer' : 'default'};

`;

const Icon = styled.img`
    filter: invert(1);
    ${props => props.flip && 'transform: rotate(180deg);'};
`;

const CurrentPage = styled.span`
  ${styling};
  width: auto;
  padding: 0 10px;  
  font-family: ${props => props.theme.fonts.heading};
  letter-spacing: -1px;
  font-weight: bold;
  color: ${props => props.theme.colors.light};
  font-size: 12px;
  
  @media (min-width: ${props => props.theme.breakpoint}) {
    font-size: 16px;
  }
`;

/**
 *
 * Pagination - visual component/controls for navigating pagination
 *
 */

const Pagination = props => {
  const { currentPage, numberOfPages, searchValue, submitSearch } = props;

  const renderButton = (toPage, src, enabled, flip) =>
    <Button
      enabled={enabled}
      onClick={() => {
        enabled && submitSearch(searchValue, toPage);
        props.toggleControls(false);
      }}
    >
      <Icon
        flip={flip}
        src={src}
        height={15}
      />
    </Button>
  ;

  const renderForwardButton = enabled => renderButton(currentPage + 1, RightIcon, enabled);
  const renderBackButton = enabled => renderButton(currentPage - 1, LeftIcon, enabled);
  const renderStartButton = enabled => renderButton(1, DoubleArrowIcon, enabled);
  const renderEndButton = enabled => renderButton(numberOfPages, DoubleArrowIcon, enabled, true);

  return numberOfPages < 2 ? null : (
    <Root layout initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .25}}>
      {renderStartButton(currentPage !== 1)}
      {renderBackButton(currentPage !== 1)}
      <CurrentPage>{currentPage} / {numberOfPages > 999 ? '999+' : numberOfPages}</CurrentPage>
      {renderForwardButton(currentPage < numberOfPages)}
      {renderEndButton(currentPage < numberOfPages)}
    </Root>
  );
};

const mapStateToProps = state => ({
  currentPage: state.results.currentPage,
  numberOfPages: state.results.numberOfPages,
  searchValue: state.lastSearchValue,
});

const mapDispatchToProps = dispatch => ({
  submitSearch: (value, page) => dispatch(submitSearch(value, page)),
  toggleControls: showControls => dispatch(toggleControls(showControls)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {connect} from "react-redux";
import {submitSearch} from "../store/reducers";

const Root = styled.div`
  background-color: lightpink;
  display: flex;
`;

const Button = styled.button`
  border: 2px solid red;
`;

const Pagination = props => {
  const { currentPage, numberOfPages, searchValue, submitSearch } = props;

  const renderButton = (increment, label) =>
    <Button onClick={() => submitSearch(searchValue, currentPage + increment)}>{label}</Button>;

  const renderForwardButton = () => renderButton(1, '>>');
  const renderBackButton = () => renderButton(-1, '<<');

  return numberOfPages < 2 ? null : (
    <Root>
      {currentPage > 1 && renderBackButton()}
      <span>current page: {currentPage}</span>
      {currentPage < numberOfPages && renderForwardButton()}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
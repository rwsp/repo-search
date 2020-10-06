import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {connect} from "react-redux";
import {submitSearch} from "../store/reducers";

const Input = styled.input`
  height: 30px;
  width: 100px;
  background-color: pink;
`;

const Submit = styled.button`
  height: 50px;
  width: 40px;
  background-color: greenyellow;
`;

const onChange = setSearchValue => e => setSearchValue(e.target.value);

const onSubmit = (submit, value) => e => {
  e.preventDefault();
  submit(value);
};

const Search = props => {
  console.log(props.state);




  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Input value={searchValue} onChange={onChange(setSearchValue)} />
      <Submit onClick={onSubmit(props.submitSearch, searchValue)}>click me</Submit>
    </>
  )
};

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch({type: 'GET_DATA', data: null}),
  deleteData: () => dispatch({type: 'DELETE_DATA', data: null}),
  submitSearch: value => dispatch(submitSearch(value)),
});

const mapStateToProps = state => ({state});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
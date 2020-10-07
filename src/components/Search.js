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

const Root = styled.div`
  border: 1px solid red;
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
    <Root>
      <Input value={searchValue} onChange={onChange(setSearchValue)} />
      <Submit onClick={onSubmit(props.submitSearch, searchValue)}>click me!!!</Submit>
    </Root>
  )
};

const mapDispatchToProps = dispatch => ({
  submitSearch: value => dispatch(submitSearch(value)),
});

const mapStateToProps = state => ({state});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
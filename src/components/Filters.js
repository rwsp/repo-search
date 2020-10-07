import React from 'react';
import styled from 'styled-components/macro';
import {filterLanguages} from "../constants";
import {connect} from "react-redux";
import {setFilter} from "../store/reducers";

const Root = styled.div`
  border: 1px solid green;
`;

const onChange = setFilter => e => setFilter(e.target.value);

const onClear = setFilter => () => setFilter('');

const Filters = props =>
  <Root>
    <input list={'languages'} onChange={onChange(props.setFilter)} value={props.filter} />
    <datalist id={'languages'} >
      <option value={''}>none</option>
      {
        filterLanguages
          .sort()
          .map(language => <option>{language}</option>)
      }
    </datalist>
    <button onClick={onClear(props.setFilter)}>clear</button>
  </Root>
;

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
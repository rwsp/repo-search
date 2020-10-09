import React from 'react';
import styled from 'styled-components/macro';
import {filterLanguages} from "../constants";
import {connect} from "react-redux";
import {setFilter} from "../store/reducers";
import {Label} from "../theme";

const Root = styled.div`
  width: 100%;
  height: 60px;
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

const Select = styled.select`
  font-family: ${props => props.theme.fonts.text};
  font-size: 12px;
  height: 40px;
  width: 140px;
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.colors.dark};
  padding: 0 8px;
`;

const onChange = setFilter => e => setFilter(e.target.value);

const Filters = props =>
  <Root>
    <Label>Language</Label>
    <Select onChange={onChange(props.setFilter)}>
      <option value={''}>All</option>
      {
        filterLanguages
          .sort()
          .map(language => <option key={language}>{language}</option>)
      }
    </Select>
  </Root>
;

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
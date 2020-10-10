import React from 'react';
import styled from 'styled-components/macro';
import {sorts} from "../constants";
import {connect} from "react-redux";
import {setSort} from "../store/reducers";
import {Label} from "../theme";

const Root = styled.div`
  width: 100%;
  height: 60px;
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
`;

const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fonts.text};
  font-weight: normal;
  font-size: 12px;
  height: 40px;
  width: 65px;
  margin-left: 10px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.selected ? props.theme.colors.white : props.theme.colors.dark};
  cursor: pointer;
  transition: all .5s ease;
  ${props => props.selected && `background-color: ${props.theme.colors.dark};`}
`;

const toToggle = (selectedSort, sort, setSort) =>
  <Toggle
    selected={selectedSort.value === sort.value}
    onClick={() => setSort(sort)}
  >
    {sort.value}
  </Toggle>;


const Sort = props => {
  const { selectedSort, setSort } = props;

  return (
    <Root>
      <Label>Sort</Label>
      <Buttons>
        {Object.keys(sorts).map(key => toToggle(selectedSort, sorts[key], setSort))}
      </Buttons>
    </Root>
  );
};

const mapStateToProps = state => ({
  selectedSort: state.sort,
});

const mapDispatchToProps = dispatch => ({
  setSort: sort => dispatch(setSort(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
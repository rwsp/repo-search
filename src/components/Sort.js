import React from 'react';
import styled from 'styled-components/macro';
import {sorts} from "../constants";
import {connect} from "react-redux";
import {setSort} from "../store/reducers";


const Sort = props => {
  const { selectedSort, setSort } = props;

  const toRadio = sort =>
    <div>
      <input
        onClick={() => setSort(sort)}
        type='radio'
        id={sort.value}
        name='sort'
        value={sort.value}
        checked={selectedSort.value === sort.value}
      />
      <label htmlFor={sort.value}>{sort.label}</label>
    </div>;

  return (
    <>
      {Object.keys(sorts).map(key => toRadio(sorts[key]))}
    </>
  );
};

const mapStateToProps = state => ({
  selectedSort: state.sort,
});

const mapDispatchToProps = dispatch => ({
  setSort: sort => dispatch(setSort(sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
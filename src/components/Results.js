import React from 'react';
import styled from 'styled-components/macro';
import {connect} from "react-redux";

const Root = styled.div`
  border: 1px solid blue;
`;

const Results = props =>
<Root>
  {!props.items.length && <div>no results</div>}
  {props.items.map(i => <div>{i.name} | {i.stargazers_count}</div>)}
</Root>
;

const mapStateToProps = state => ({
  items: state.results.items,
});

export default connect(mapStateToProps)(Results);
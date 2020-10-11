import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {connect} from "react-redux";
import {submitSearch, toggleControls} from "../store/reducers";
import GlassIcon from '../magnifying-glass.svg';
import CogIcon from '../settings.png';
import {Box, RotateAndScale} from "../theme";
import {motion} from "framer-motion";

const Root = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.dark};
  margin-bottom: 0;
`;

const InputForm = styled(Box)`
  padding: 0;
  width: 100%;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  border: 1px solid ${props => props.theme.colors.grey};
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Input = styled.input`
  font-family: ${props => props.theme.fonts.text};
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  margin: 0 12px;
  
  ::placeholder {
    font-size: 12px;
    font-style: italic;
  }
`;

const MagnifyingGlass = styled.div`
  height: 40px;
  min-width: 40px;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: .4;
  cursor: pointer;
  ${RotateAndScale};

`;

const Controls = styled.div`
  height: 40px;
  min-width: 40px;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Cog = styled.img`
  filter: invert(1);
  ${RotateAndScale};
`;

const onChange = setSearchValue => e => setSearchValue(e.target.value);

/**
 *
 * Search - visual component/controls for user's search input
 *
 */

const Search = props => {
  const [searchValue, setSearchValue] = useState('');

  const onKeyPress = e => {
    if(e.key === 'Enter'){
      onSubmit(e);
    }
  };

  const onSubmit = e => {
    if(searchValue.length) {
      e.target.blur();
      props.toggleControls(false);
      props.submitSearch(searchValue);
    }
  };

  return (
    <Root layout>
      <InputForm>
        <Controls onClick={() => props.toggleControls(!props.showControls)}>
          <Cog src={CogIcon} alt={'cog-icon'} height={15} />
        </Controls>
        <Input
          value={searchValue}
          onChange={onChange(setSearchValue)}
          placeholder={'Search for your repo'}
          onKeyPress={onKeyPress}
        />
        <MagnifyingGlass onClick={onSubmit}>
          <img src={GlassIcon} alt={'glass-icon'} height={15}/>
        </MagnifyingGlass>
      </InputForm>
    </Root>
  )
};

const mapDispatchToProps = dispatch => ({
  submitSearch: value => dispatch(submitSearch(value)),
  toggleControls: showControls => dispatch(toggleControls(showControls)),
});

const mapStateToProps = state => ({
  showControls: state.showControls,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
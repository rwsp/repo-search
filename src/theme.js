import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import {css} from "styled-components";


/**
 *
 * theme for styled-components as well as shared JSX
 *
 */


/**
 *
 * available color palette
 *
 */
const colors = {
  wheat: '#e1ca96',
  sage: '#aca885',
  brown: '#918B76',
  nickel: '#626c66',
  green: '#434a42',
  grey: '#e5e5e5',
  red: '#8c2720',
};


/**
 *
 * theme object that will be passed to css`` objects in visual components
 *
 */
export const theme = {
  fonts: {
    heading: 'Ubuntu',
    text: 'Roboto',
  },
  colors: {
    main1: colors.nickel,
    main2: colors.green,
    back1: colors.brown,
    back2: colors.sage,
    accent1: colors.wheat,
    shadow: '#d3d3d3',
    white: '#ffffff',
    grey: colors.grey,
    light: '#f8f8ff',
    dark: '#0e1111',
    error: colors.red,
  },
  borderRadius: '6px',
  boxShadow: `0 0 10px 2px ${colors.grey}`,
  boxBorder: `1px solid ${colors.grey}`,
  breakpoint: '600px',
};


/**
 *
 * styled and framer motion-enabled generic UI container
 *
 */
export const Box = styled(motion.div)`
  background-color: ${colors.white};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  border: ${theme.boxBorder};
  padding: 25px;
`;


export const Label = styled.span`
  font-family: ${theme.fonts.heading};
  font-weight: bold;
  letter-spacing: -1px;
  font-size: 16px;
`;


/**
 *
 * animation css used to rotate a component and then enlarge its contents
 *
 */
export const RotateAndScale = css`
  :hover{
    transform: rotate(90deg) scale(1.4);
  }
  
  transition: transform 250ms ease;
`;

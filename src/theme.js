import styled from 'styled-components/macro';

const colors = {
  wheat: '#e1ca96',
  sage: '#aca885',
  brown: '#918B76',
  nickel: '#626c66',
  green: '#434a42',
  grey: '#e5e5e5',
};

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
  },
  borderRadius: '6px',
  boxShadow: `0 0 10px 2px ${colors.grey}`,
  boxBorder: `1px solid ${colors.grey}`,
};

export const Box = styled.div`
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

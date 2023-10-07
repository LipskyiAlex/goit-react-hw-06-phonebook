import styled from '@emotion/styled';
import 'normalize.css';

export const MainContainer = styled.div`
  width: 600px;
  padding: 15px;
  margin: 0 auto;
  display: grid;
  place-items: center;
`;

export const MainTitle = styled.h1`
position:relative;
  font-size: 44px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  padding-bottom: 13px;

  &:before {
    background-color: #7F00FF;
    content: '';
    display: block;
    height: 3px;
    width: 75px;
    margin-bottom: 5px;
  }

  &:after {
    background-color: #7F00FF;
    content: '';
    display: block;
  position:absolute; right:0; bottom:0;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
  }
`;

export const SecondaryTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;

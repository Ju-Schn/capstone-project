import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 30px;
  background-color: #f2b705;
  color: #8c0e03;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 8px 16px;

  ${props =>
    props.variant === 'submit' &&
    css`
      background-color: #618c03;
      color: #f4e9c9;
    `}

  ${props =>
    props.variant === 'showHide' &&
    css`
      background-color: #d97904;
      border-radius: 50%;
      padding: 8px;
      display: flex;
      align-self: center;
      align-items: center;
    `}
`;

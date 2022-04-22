import styled, { css } from 'styled-components';

export default styled.button`
  border-radius: 30px;
  background-color: #8c0e03;
  color: #f4e9c9;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 8px 16px;
  align-self: center;

  ${props =>
    props.variant === 'active' &&
    css`
      box-shadow: rgb(99, 10, 2, 1) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    `}

  ${props =>
    props.variant === 'submit' &&
    css`
      background-color: #618c03;
      color: #f4e9c9;
      border-radius: 30px;
    `}

  ${props =>
    props.variant === 'submitActive' &&
    css`
      background-color: #618c03;
      color: #f4e9c9;
      border-radius: 30px;
      box-shadow: rgb(140, 14, 3, 1) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    `}

  ${props =>
    props.variant === 'yellow' &&
    css`
      display: flex;
      background-color: #f2b705;
      color: #8c0e03;
      border-radius: 30px;
      align-items: center;
      gap: 4px;
    `}

    ${props =>
    props.variant === 'yellowActive' &&
    css`
      background-color: #f2b705;
      color: #8c0e03;
      border-radius: 30px;
      box-shadow: rgb(140, 14, 3, 1) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    `}

  ${props =>
    props.variant === 'submitSticky' &&
    css`
      background-color: #618c03;
      color: #f4e9c9;
      border-radius: 30px;
      position: sticky;
      bottom: 0;
      z-index: 2;
    `}

  ${props =>
    props.variant === 'showHide' &&
    css`
      background-color: #d97904;
      border-radius: 50%;
      margin: 16px 0;
      padding: 8px;
      display: flex;
      align-self: center;
      align-items: center;
    `}

    ${props =>
    props.variant === 'disabled' &&
    css`
      background-color: #ccc;
      color: #666;
      box-shadow: none;
      cursor: default;
    `}

    ${props =>
    props.variant === 'noButtonPin' &&
    css`
      background-color: inherit;
      color: inherit;
      box-shadow: none;
      align-self: flex-end;
      padding: 0;
    `}

    ${props =>
    props.variant === 'noButtonTrash' &&
    css`
      background-color: inherit;
      color: inherit;
      box-shadow: none;
      align-self: flex-end;
      margin-top: 8px;
      padding: 0;
    `}

    ${props =>
    props.variant === 'danger' &&
    css`
      background-color: #d92b04;
      color: #f4e9c9;
    `}
    ${props =>
    props.variant === 'dangerActive' &&
    css`
      background-color: #d92b04;
      color: #f4e9c9;
      border-radius: 30px;
      box-shadow: rgb(140, 14, 3, 1) 3px 3px 6px 0px inset,
        rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    `}

    ${props =>
    props.variant === 'right' &&
    css`
      background-color: #618c03;
      color: #f4e9c9;
      border-radius: 40px;
      margin: 16px 0;
      padding: 8px 16px;
      display: flex;
      align-self: center;
      align-items: center;
      gap: 16px;
    `}

    ${props =>
    props.variant === 'wrong' &&
    css`
      background-color: #d92b04;
      color: #f4e9c9;
      border-radius: 40px;
      margin: 16px 0;
      padding: 8px 16px;
      display: flex;
      align-self: center;
      align-items: center;
      gap: 16px;
    `}

    ${props =>
    props.variant === 'navigation' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: flex-end;
      background-color: #f4e9c9;
      border-radius: 10px 10px 0 0;
      box-shadow: rgba(140, 14, 3, 0.3) 0px -15px 25px -5px,
        rgba(140, 14, 3, 0.1) 0px -10px 10px -5px;
      text-decoration: none;
      color: #820d03;
      font-family: inherit;
      width: 100%;
      padding: 5px;
    `}
  

    ${props =>
    props.variant === 'navigationActive' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: flex-end;
      background-color: #ff8f05;
      border-radius: 10px 10px 0 0;
      box-shadow: rgba(140, 14, 3, 0.3) 0px -15px 25px -5px,
        rgba(140, 14, 3, 0.1) 0px -10px 10px -5px;
      text-decoration: none;
      color: #820d03;
      font-family: inherit;
      width: 100%;
      padding: 5px;
      padding-top: 16px;
    `}
`;

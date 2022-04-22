import styled from 'styled-components';

export default function Input({
  htmlFor,
  labelText,
  placeholder,
  name,
  onChange,
  id,
  type,
  maxLength,
  value,
  variant,
}) {
  return (
    <FlexWrapper>
      <label htmlFor={htmlFor}>{labelText}</label>
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        value={value}
        maxLength={maxLength}
        variant={variant}
      ></StyledInput>
    </FlexWrapper>
  );
}

const StyledInput = styled.input`
  background-color: #f4e9c9;
  border-radius: 30px;
  border: none;
  box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.25);
  height: 50px;
  padding: 15px;
  color: #8c0e03;
  font-size: 16px;
  font-family: inherit;
  margin-bottom: 24px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  flex-grow: 1;
`;

import styled from "styled-components";

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.Ioasys};

  max-width: 630px;
  border-radius: 10px;
  padding: 14px;
  box-sizing: border-box;
  box-sizing: content-box;

  label {
    color: ${({ theme }) => theme.colors.Ioasys};
    background-color: ${({ theme }) => theme.colors.Background};
    position: relative;
    float: right;
    font-size: 16px;
    padding: 4px;
    bottom: 35px;
    right: 233px;
  }
  input {
    border: 0;
    font-size: 16px;
    height: 27px;
    margin: 0px 34px 0 30px;
  }
`;

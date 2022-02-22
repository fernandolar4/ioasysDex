import styled from "styled-components";

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.Ioasys};

  max-width: 630px;
  border-radius: 10px;
  padding: 14px;

  @media (max-width: 900px) {
    margin-left: 5%;
    max-width: 80%;
    padding: 16px 40px 15px 50px;
  }
  label {
    color: ${({ theme }) => theme.colors.Ioasys};
    background-color: ${({ theme }) => theme.colors.Background};
    position: relative;
    float: right;
    font-size: 16px;
    padding: 4px;
    bottom: 35px;
    right: 233px;
    @media (max-width: 900px) {
      float: none;
      padding: 2px;
      bottom: 30px;
      right: 150px;
    }
  }
  input {
    border: 0;
    font-size: 16px;
    height: 27px;
    margin: 0px 34px;
    @media (max-width: 900px) {
      height: 17px;
      font-size: 14px;
      margin: 0px 0px;
    }

    .lupa {
      @media (max-width: 900px) {
        margin-right: 100px;
      }
    }
  }
`;

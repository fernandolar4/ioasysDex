import styled from "styled-components";

export const Container = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.Ioasys};
  height: 15px;
  width: 100%;
`;

export const Title = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  max-width: 830px;
  margin: 60px auto;
  div {
    display: flex;
    align-items: center;
  }
  img {
    max-height: 23px;
  }
  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.Ioasys};
    margin-left: 12px;
  }
  button {
    color: ${({ theme }) => theme.colors.Ioasys};
    width: 39px;
    height: 27px;
    border-radius: 40px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.Ioasys};
  }
`;

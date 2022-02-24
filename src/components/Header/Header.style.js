import styled from "styled-components";

export const ColorContainer = styled.div`
  display: block;
  background-color: ${(props) =>
    ({ theme }) =>
      theme.colors[props.typeColor] || theme.colors.Ioasys};
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

  @media (max-width: 900px) {
    max-width: 80%;
  }
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
    @media (max-width: 900px) {
      font-size: 24px;
    }
  }
  .switch {
    border: 1px solid ${({ theme }) => theme.colors.Ioasys};
  }
`;

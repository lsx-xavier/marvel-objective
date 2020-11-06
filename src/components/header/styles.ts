import styled from 'styled-components';

export const Header = styled.header`
  padding: 18px 25px;
  background:  ${props => props.theme.colors.backgroundWhite};
  display: flex;
  justify-content: space-between;

  img {
    width: 120px;
  }

  div {
    display: flex;
    flex-direction: row;
    p {
      display: flex;
      font-family: 'PT Sans Caption', sans-serif;
      font-weight: 400;
      font-size: 14px;
      align-items: center;
      flex-direction: column;
      color: ${props => props.theme.colors.primary};
      @media only screen and (min-width: 768px) {
        flex-direction: row;
      }

      strong {
        color: ${props => props.theme.colors.primary};
        margin-right: 10px;
      }
    }
    span {
      margin-left: 10px;
      background: ${props => props.theme.colors.backgroundSecundary};
      border-radius: 4px;
      padding: 8px;
      font-weight: 700;
    }
  }
`;
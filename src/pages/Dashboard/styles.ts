import styled from 'styled-components';

interface PagesProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
`;



export const Section = styled.section`
  padding: 40px 0;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
      align-items: start;
    }

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
  }

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 16px;
    align-items: center;

    label {
      font-size: 16px;
      font-weight: 700;
      position: relative;
      width: 295px;
      text-align: center;
      

      @media (min-width: 768px) {
        text-align: left;
      }
    }

    input {
      width: 100%;
      background: ${props => props.theme.colors.secondary};
      border: 1px solid ${props => props.theme.colors.secondary};
      border-radius: 4px;
      padding: 6px 30px 6px 5px;
      margin-top: 8px;

      &::placeholder {
        font-style: italic;
        font-size: 14px;
        color: #8E8E8E;
      }
    }

    span {
      position: absolute;
      right: 10px;
      bottom: 6px;
    }
  }
`;

export const Legenda = styled.div`
  margin: 40px 0 9px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    font-size: 12px;
    font-weight: 400;
    color: #8E8E8E;
    padding: 0 20px;
    width:100%;

    @media (min-width: 768px) {
      width: 38%;
    }
  }

  div:nth-child(2),
  div:nth-child(3) {
    display: none;

    @media (min-width: 768px) {
      width: 31%;
      display: block;
    }
  }
`;

export const CharacterList = styled.div`
  display: flex;
  flex-direction: column;

  a {
    background: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
    box-shadow: 0px 0px 5px ${props => props.theme.colors.shadow};
    border-radius: 4px;
    align-items: center;
    padding: 15px 20px;
    text-decoration: none;
    color: ${props => props.theme.colors.textWhite};

    &:hover {
      box-shadow: 0px 0px 15px  ${props => props.theme.colors.shadow};
    }

    .perfil {
      width: 100%;
      display: flex;
      align-items: center;
      @media (min-width: 768px) {
        width: 38%;
      }

      img {
        width: 48px;
        height: 48px;
        border-radius: 4px;
        margin-right: 24px;
      }
      
      p {
        font-weight: 700;
      }
    }

    .series,
    .events {
      display: none;

      @media (min-width: 768px) {
        width: 31%;
        display: block;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  padding: 24px;
  background: ${props => props.theme.colors.backgroundWhite};
  justify-content: space-between;
`;

export const Pages = styled.div`
  display: flex;
  padding: 24px;
  justify-content: center;
`;

export const PaginationItem = styled.div<PagesProps>`
  margin: 0 5px;
  padding: 5px 10px;
  background: ${props => props.theme.colors.backgroundSecundary};
  border-radius: 4px;
  color: ${props => props.theme.colors.text};

  &:hover {
    background: #167ABC;
    color: #fff;
  }

  ${props => props.isSelected && {
    background: '#167ABC',
    color: '#fff',
  }}
`;

export const CotainerListPage = styled.div`
  display: flex;
`;

export const PaginationPrev = styled.div``;

export const PaginationNext = styled.div``;

export const PaginationNextEnd = styled.div``;
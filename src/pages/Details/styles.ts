import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 40px 0;
`;

export const HeaderContent = styled.header`
  margin-bottom: 45px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    flex: 1;
    font-size: 28px;
    color: ${props => props.theme.colors.text};
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.text};

    svg {
      color: ${props => props.theme.colors.text} !important;
    }

    &:hover {
      font-weight: 600;
    }
  }
`;

export const ContentDashboardPerfil = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    flex-flow: wrap;
  }
`;

export const Perfil = styled.aside`
  width: 100%;
  margin-bottom: 45px;

  @media (min-width: 768px) {
    width: 300px;
    margin-bottom: 0px;
  }

  div {
    padding: 15px;
    background: ${props => props.theme.colors.secondary};
    box-shadow: 0px 0px 5px ${props => props.theme.colors.shadow};
    border-radius: 4px;
    top: 10px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      position: sticky;
    }

    img {
      align-self: center;
      width: 200px;
      height: 200px;
      border-radius: 100%;
      margin-bottom: 5px;
      border: 1px solid #555;
    }

    h3 {
      color: ${props => props.theme.colors.textWhite};
      font-weight: 600;
      font-size: 20px;
    }

    p {
      color: ${props => props.theme.colors.textWhite};
      margin-top: 20px;
    }

    span {
      display: block;
      color: #8E8E8E;
      margin-top: 10px;
      font-size: 12px;
    }
  }

  div > div {
    margin-top: 20px;
    padding: 0;
    background: none;
    box-shadow: 0px 0px 0px ${props => props.theme.colors.shadow};
    border-radius: 0px;

    p {
      font-weight: 700;
      margin-bottom: 10px;
    }

    span {
      color: ${props => props.theme.colors.textWhite};
      font-weight: 400;
      font-size: 16px;
      cursor: pointer;
      border-bottom: 1px solid ${props => props.theme.colors.textWhite};
      padding: 0 0 5px;

      &:last-of-type {
        border: 0;
      }

      &:hover,
      &.active {
        font-weight: 600;
      }
    }
  }
`;

export const Timeline = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0px 0px 5px ${props => props.theme.colors.shadow};
  border-radius: 4px;
  padding: 15px;

  @media (min-width: 768px) {
    width: calc(100% - 350px);
  }
`;

export const ListSeries = styled.div`
  h3 {
    font-weight: 700;
    margin-bottom: 30px;
    color: ${props => props.theme.colors.textWhite};
  }
`;

export const CardSeries = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.textWhite};

  &:last-of-type {
    border: 0px;
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.textWhite};
  }

  .thumb-description {
    display: flex;
    flex-direction: row;

    img {
      width: 200px;
      height: 200px;
      border-radius: 4px;
    }

    span {
      flex: 1;
      padding-left: 15px;
      color: ${props => props.theme.colors.textWhite};
      
      strong {
        margin-bottom: 15px;
        display: block;
      }

      p {
        font-size: 16px;
      }
    }

  }

  .team {
    margin-top: 10px;
    color: ${props => props.theme.colors.textWhite};
    p {
      font-size: 12px;
      span.editor {
        font-weight: 600;
      }
    }
  }
`;
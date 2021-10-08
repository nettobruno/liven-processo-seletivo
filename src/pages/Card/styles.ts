import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding-bottom: 100px;
  width: 100%;
  min-height: 100vh;

  h1 {
    color: #08012a;
    margin-top: 100px;
  }
`;

export const Header = styled.header`
  background-color: #08012a;

  height: 10vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
  }
`;

export const SectionProducts = styled.div`
  margin-top: 50px;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 23 0px;
  grid-gap: 20px;
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  box-shadow: 3px 3px 10px #ddd;
  background-color: white;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  div {
    padding: 20px;
  }

  p {
    margin-bottom: 10px;
  }

  .name {
    color: #08012a;
    font-size: 20px;
    font-weight: bold;
  }

  .price {
    color: #08012a;
    font-size: 18px;
    font-weight: 400;
  }

  .stock {
    color: #08012a;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Button = styled.button`
  background-color: #08012a;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  padding: 20px;
  width: 100%;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    background-color: #08015f;
  }
`;

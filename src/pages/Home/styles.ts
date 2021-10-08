import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding-bottom: 100px;
  width: 100%;

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

  div {
    background-color: red;
    border-radius: 15px;
    color: white;
    position: absolute;
    right: 30px;
    top: 50px;

    height: 25px;
    width: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;

    position: absolute;
    right: 30px;
  }

  button img {
    width: 50px;
    transition: all.3s;
  }

  button img:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  img {
    width: 150px;
  }
`;

export const SectionProducts = styled.div`
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 600px;
  grid-gap: 20px;

  @media (max-width: 1600px) {
    grid-auto-rows: 530px;
  }

  @media (max-width: 1450px) {
    grid-auto-rows: 500px;
  }

  @media (max-width: 1150px) {
    grid-auto-rows: 450px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 530px;
  }

  @media (max-width: 850px) {
    grid-auto-rows: 450px;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 600px;
  }

  @media (max-width: 550px) {
    grid-auto-rows: 500px;
  }

  @media (max-width: 450px) {
    grid-auto-rows: 450px;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
  box-shadow: 3px 3px 10px #ddd;
  background-color: white;
  border-radius: 10px;

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .texts {
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

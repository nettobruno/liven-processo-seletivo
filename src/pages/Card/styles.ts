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

  button {
    background-color: transparent;

    position: absolute;
    left: 30px;
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
  grid-template-columns: 1fr;
  grid-auto-rows: 200px;
  grid-gap: 20px;

  @media (max-width: 750px) {
    grid-auto-rows: 450px;
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  box-shadow: 3px 3px 10px #ddd;
  background-color: white;
  border-radius: 10px;

  align-items: center;
  justify-items: center;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 200px;
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

  .amount {
    color: #08012a;
    font-size: 16px;
    font-weight: 300;
  }

  .unidade {
    display: flex;
    align-items: center;
  }

  .unidade button {
    border-radius: 5px;
    font-size: 18px;
    padding: 5px 10px;
  }

  .unidade button:hover {
    cursor: pointer;
  }

  .value {
    margin: 10px;
  }

  .btn-trash {
    border-radius: 0;
    background-color: transparent;
  }

  .btn-trash img {
    width: 50px;
    height: 50px;
    object-fit: none;
    background-color: #c3c3c3;
  }

  .btn-trash img:hover {
    cursor: pointer;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    padding: 20px 0;

    .name {
      margin-bottom: 15px;
    }

    .price {
      text-align: center;
    }

    .stock {
      text-align: center;
      margin-bottom: 15px;
    }
  }
`;

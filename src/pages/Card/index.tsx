// Dependencies
import React from 'react';

// Styles
import { Container, Header, SectionProducts } from './styles';

// Imagens
import imageLogo from '../../assets/logo.png';

const Card: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={imageLogo} alt="" />
      </Header>

      <div className="container">
        <h1>Carrinho de Compras</h1>

        <SectionProducts />
      </div>
    </Container>
  );
};

export default Card;

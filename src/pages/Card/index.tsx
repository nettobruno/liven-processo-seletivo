// Dependencies
import React, { useEffect, useState } from 'react';

// Styles
import { Container, Header, SectionProducts, Product, Button } from './styles';

// Imagens
import imageLogo from '../../assets/logo.png';

const Card: React.FC = () => {
  const [products, setProducts] = useState([]);

  function getProducts() {
    setProducts(JSON.parse(localStorage.getItem('item') as string));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Header>
        <img src={imageLogo} alt="" />
      </Header>

      {products && (
        <div className="container">
          <h1>Carrinho de Compras</h1>
          <SectionProducts>
            {products.map((i: any) => (
              <Product key={i.id}>
                <img src={i.image} alt="" />

                <div className="texts">
                  <p className="name">{i.name}</p>
                  <p className="price">R$ {i.price}</p>
                  <p className="stock">Qtd. {i.stock}</p>
                  <Button type="button" onClick={() => console.log(i.id)}>
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </Product>
            ))}
          </SectionProducts>
        </div>
      )}
    </Container>
  );
};

export default Card;

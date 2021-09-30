// Dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Styles
import { Container, Header, SectionProducts, Product, Button } from './styles';

// Imagens
import imageLogo from '../../assets/logo.png';

interface ProductData {
  createdAt: string;
  id: string;
  image: string;
  name: string;
  price: string;
  stock: number;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  async function getAllProducts() {
    axios
      .get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
      .then((response: any) => {
        setProducts(response.data);
      });
  }

  async function addCard(id: string) {
    console.log(id);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container>
      <Header>
        <img src={imageLogo} alt="" />
      </Header>

      <div className="container">
        <SectionProducts>
          {products.map((i: any) => (
            <Product key={i.id}>
              <img src={i.image} alt="" />

              <div className="texts">
                <p className="name">{i.name}</p>
                <p className="price">R$ {i.price}</p>
                <p className="stock">Qtd. {i.stock}</p>
                <Button type="button" onClick={() => addCard(i.id)}>
                  Adicionar ao Carrinho
                </Button>
              </div>
            </Product>
          ))}
        </SectionProducts>
      </div>
    </Container>
  );
};

export default Home;

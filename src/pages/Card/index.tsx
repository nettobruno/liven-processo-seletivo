// Dependencies
import React, { useEffect, useState } from 'react';

// Styles
import { Container, Header, SectionProducts, Product, Button } from './styles';

// Imagens
import imageLogo from '../../assets/logo.png';

const Card: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  function getProducts() {
    setProducts(JSON.parse(localStorage.getItem('item') as string));
  }

  function add(idItem: string) {
    const items = JSON.parse(localStorage.getItem('item') || '');

    const product = items.find((i: any) => i.id === idItem);

    product.total += 1;

    localStorage.setItem('item', JSON.stringify(items));

    setProducts(items);
  }

  function remove(idItem: string) {
    const items = JSON.parse(localStorage.getItem('item') || '');

    const product = items.find((i: any) => i.id === idItem);

    product.total -= 1;

    localStorage.setItem('item', JSON.stringify(items));

    setProducts(items);
  }

  function deleteItem(idItem: string) {
    const items = JSON.parse(localStorage.getItem('item') || '');

    const index = items.findIndex((i: any) => i.id === idItem);

    items.splice(index, 1);

    localStorage.setItem('item', JSON.stringify(items));

    setProducts(items);
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

                <div>
                  <p className="name">{i.name}</p>
                  <p className="price">R$ {i.price}</p>
                </div>

                <div>
                  <p className="stock">Qtd. {i.stock}</p>
                  <p className="stock">Unidades. {i.total}</p>
                </div>

                <div>
                  <Button type="button" onClick={() => deleteItem(i.id)}>
                    Adicionar ao Carrinho
                  </Button>

                  <button type="button" onClick={() => add(i.id)}>
                    Adicionar
                  </button>

                  <button type="button" onClick={() => remove(i.id)}>
                    Remover
                  </button>
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

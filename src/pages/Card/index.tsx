// Dependencies
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

// Styles
import { Container, Header, SectionProducts, Product } from './styles';

// Imagens
import imageArrow from '../../assets/arrow.png';
import imageLogo from '../../assets/logo.png';
import imageTrash from '../../assets/trash.png';

const Card: React.FC = () => {
  const history = useHistory();
  const [products, setProducts] = useState<any[]>([]);

  function getProducts() {
    setProducts(JSON.parse(localStorage.getItem('item') as string));
  }

  function backPage() {
    history.goBack();
  }

  // Possibilita aumentar o número de itens que o usuário deseja de um produto
  function add(idItem: string) {
    const items = JSON.parse(localStorage.getItem('item') || '');

    const product = items.find((i: any) => i.id === idItem);

    product.total += 1;

    localStorage.setItem('item', JSON.stringify(items));

    setProducts(items);
  }

  // Possibilita diminuir o número de itens que o usuário deseja de um produto
  function remove(idItem: string) {
    const items = JSON.parse(localStorage.getItem('item') || '');

    const product = items.find((i: any) => i.id === idItem);

    product.total -= 1;

    localStorage.setItem('item', JSON.stringify(items));

    setProducts(items);
  }

  // Possibilita excluir um item do carrinho
  function deleteItem(idItem: string) {
    const items = JSON.parse(localStorage.getItem('item') || '');

    const index = items.findIndex((i: any) => i.id === idItem);

    items.splice(index, 1);

    localStorage.setItem('item', JSON.stringify(items));

    setProducts(items);

    toast.success('Produto removido com sucesso', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Header>
        <button type="button" onClick={() => backPage()}>
          <img src={imageArrow} alt="" />
        </button>

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
                  <p className="stock">Qtd: {i.stock}</p>
                  <div className="unidade">
                    <p className="amount">Unidades:</p>

                    <button type="button" onClick={() => remove(i.id)}>
                      -
                    </button>

                    <p className="value">{i.total}</p>

                    <button type="button" onClick={() => add(i.id)}>
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="btn-trash"
                    onClick={() => deleteItem(i.id)}
                  >
                    <img src={imageTrash} alt="" />
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

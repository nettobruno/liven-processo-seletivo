// Dependencies
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

// Styles
import { Container, Header, SectionProducts, Product, Button } from './styles';

// Imagens
import imageLogo from '../../assets/logo.png';
import imageBag from '../../assets/bag.png';

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
  const [quantityItemsCart, setQuantityItemsCart] = useState<any>();

  const history = useHistory();
  let getItems: any = [];

  // Redireciona para página do carrinho de compras
  function cardPage() {
    history.push('/card');
  }

  // Pega a quantidade de itens do carrinho de compras
  function getCardProducts() {
    if (!localStorage.getItem('item')) {
      setQuantityItemsCart(0);
    } else {
      const items = JSON.parse(localStorage.getItem('item') as string);
      setQuantityItemsCart(items.length);
    }
  }

  // Pega todos os produtos da API
  async function getAllProducts() {
    axios
      .get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
      .then((response: any) => {
        setProducts(response.data);
      });
  }

  // Adiciona um item ao carrinho de compras
  async function addCard(id: string) {
    let item: any;

    await axios
      .get(`https://5d6da1df777f670014036125.mockapi.io/api/v1/product/${id}`)
      .then((response: any) => {
        if (localStorage.getItem('item')) {
          getItems = JSON.parse(localStorage.getItem('item') as string);
          item = getItems.find((i: any) => i.id === id);
        }

        const newItem = {
          id: response.data.id,
          createdAt: response.data.createdAt,
          name: response.data.name,
          price: response.data.price,
          image: response.data.image,
          stock: response.data.stock,
          total: 1,
        };

        if (item === undefined) {
          getItems.push(newItem);
          localStorage.setItem('item', JSON.stringify(getItems));

          history.push('/card');

          toast.success('Produto adicionado ao carrinho', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error('Este produto já se encontra no carrinho', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  }

  useEffect(() => {
    getAllProducts();
    getCardProducts();
  }, []);

  return (
    <Container>
      <Header>
        <button type="button" onClick={() => cardPage()}>
          <img src={imageBag} alt="" />
        </button>

        {quantityItemsCart && (
          <div className="quantity-items-cart-circle">
            <p>{quantityItemsCart}</p>
          </div>
        )}

        <img src={imageLogo} alt="" />
      </Header>

      <div className="container">
        <h1>Listagem de produtos</h1>
        <SectionProducts>
          {products.map((i: any) => (
            <Product key={i.id}>
              <img src={i.image} alt="" />

              <div className="texts">
                <p className="name">{i.name}</p>
                <p className="price">R$ {i.price}</p>
                <p className="amount">Qtd. {i.stock}</p>
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

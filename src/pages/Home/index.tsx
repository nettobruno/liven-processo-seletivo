// Dependencies
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  const history = useHistory();
  let getItems: any = [];

  async function getAllProducts() {
    axios
      .get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product')
      .then((response: any) => {
        setProducts(response.data);
      });
  }

  async function addCard(id: string) {
    let result: any;

    await axios
      .get(`https://5d6da1df777f670014036125.mockapi.io/api/v1/product/${id}`)
      .then((response: any) => {
        if (localStorage.getItem('item')) {
          getItems = JSON.parse(localStorage.getItem('item') as string);
          result = getItems.find((i: any) => i.id === id);
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

        if (result === undefined) {
          getItems.push(newItem);
          localStorage.setItem('item', JSON.stringify(getItems));

          history.push('/card');

          toast.success('Produto adicionado ao carrinho', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error('Este produto já se encontra no carrinho', {
            position: 'top-right',
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
  }, []);

  return (
    <Container>
      <Header>
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
                <p className="stock">Qtd. {i.stock}</p>
                <Button type="button" onClick={() => addCard(i.id)}>
                  Adicionar ao Carrinho
                </Button>

                {/* <button type="button" onClick={() => addItem(i.id)}>
                  Add
                </button>

                <button type="button" onClick={() => removeItem(i.id)}>
                  remove
                </button> */}
              </div>
            </Product>
          ))}
        </SectionProducts>
      </div>
    </Container>
  );
};

export default Home;

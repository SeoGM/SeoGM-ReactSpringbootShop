import React, { useEffect, useState } from 'react';
import './App.css';

interface Product {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      fetch('/api/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product List</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;

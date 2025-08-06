import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products") // 🔗 will change to ECS URL later
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>🧥 Fashion BBSR AllS Products</h1>
      <ul>
        {products.map((item, i) => <li key={i}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import ProductList from "./projectDemo/components/ProductList";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: "Laptop", inStock: true },
        { id: 2, name: "Phone", inStock: false },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleToggle = (id) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p)),
    );
  };

  if (loading) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>
      <ProductList
        products={products}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

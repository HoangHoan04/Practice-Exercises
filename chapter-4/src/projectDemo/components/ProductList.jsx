import ProductItem from "./ProductItem";

function ProductList({ products, onDelete, onToggle }) {
  return (
    <div className="list">
      {products.length > 0 ? (
        <ul>
          {products.map((item) => (
            <ProductItem
              key={item.id}
              product={item}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </ul>
      ) : (
        <p className="empty">Danh sách rỗng</p>
      )}
    </div>
  );
}

export default ProductList;

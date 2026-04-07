function ProductItem({ product, onDelete, onToggle }) {
  return (
    <li className="product-item">
      <div className="info">
        <span className="name">{product.name}</span>
        <span
          className={product.inStock ? "status in-stock" : "status out-stock"}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="actions">
        <button className="btn toggle" onClick={() => onToggle(product.id)}>
          Toggle
        </button>

        <button className="btn delete" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ProductItem;

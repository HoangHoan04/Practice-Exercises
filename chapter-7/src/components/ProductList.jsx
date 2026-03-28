import { Link } from "react-router";

const ProductList = () => {
  return (
    <div>
      Product
      <Link to="/products/123">Chi tiết sản phẩm 123</Link>
    </div>
  );
};

export default ProductList;

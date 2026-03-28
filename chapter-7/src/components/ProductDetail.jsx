import { useParams } from "react-router";

const ProductDetail = () => {
  // * id sẽ được lấy từ URL, ví dụ: /products/123 => id = 123
  const { id } = useParams();
  //   render chi tiết sản phẩm dựa trên id
  return <div>ProductDetail: {id}</div>;
};

export default ProductDetail;

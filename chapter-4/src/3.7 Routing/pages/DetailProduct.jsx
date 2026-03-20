import { useParams, useSearchParams } from "react-router";
// useParams: lấy tham số từ url
// ví dụ: url: /product/1?name=Product1 => id = 1, name = Product1
const DetailProduct = () => {
  // lấy tham số id từ url
  const { id } = useParams();
  //   lấy tham số name từ url
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  //   ==> name = Product1
  return (
    <div>
      <h1>Detail Product</h1>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default DetailProduct;

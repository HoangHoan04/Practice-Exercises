import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import SearchPage from "../components/SearchPage";

const Routing = () => {
  return (
    <BrowserRouter>
      {/* Routes là container để chứa các route */}
      <Routes>
        {/* Route định tuyến một đường dẫn đến component */}
        <Route path="/" element={<HomePage />} />
        {/* Route cho trang giới thiệu */}
        <Route path="/about" element={<AboutPage />} />
        {/* Route cho danh sách sản phẩm */}
        <Route path="/products" element={<ProductList />} />
        {/* Route cho chi tiết sản phẩm với tham số id */}
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Nếu đường dẫn là /products/123 ==> id sẽ là 123*/}
        {/* Route cho trang tìm kiếm kèm query parameter */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

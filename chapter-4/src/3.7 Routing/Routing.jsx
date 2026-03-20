import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import DetailProduct from "./pages/DetailProduct";
import AppLayout from "./layout/AppLayout";

const Routing = () => {
  return (
    // Khởi tạo BrowserRouter để quản lý lịch sử trình duyệt
    <BrowserRouter>
      {/* Container để chứa các route */}
      <Routes>
        {/* Định nghĩa route cho trang chủ */}
        <Route path="/" element={<Home />} />
        {/* Định nghĩa route cho trang app với layout */}
        <Route path="/app" element={<AppLayout />}>
          {/* Route mặc định khi truy cập vào /app */}
          <Route index element={<Home />} />
          {/* Route cho trang about khi truy cập vào /app/about */}
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/about" element={<About />} />
        {/* Định nghĩa route cho trang chi tiết sản phẩm với tham số id */}
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  // useState quản lý trạng thái hiển thị của Modal
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Ứng dụng Demo Modal</h1>

      {/* Nút mở Modal: cập nhật isOpen thành true */}
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>

      {/* Truyền isOpen và hàm onClose xuống component con */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

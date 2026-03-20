import { useEffect } from "react";

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    // Nếu modal đang đóng, không cần đăng ký sự kiện
    if (!isOpen) return;

    // Đăng ký lắng nghe sự kiện bàn phím
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Hàm cleanup: gỡ bỏ event listener khi component unmount
    // hoặc khi isOpen chuyển về false → tránh Memory Leak
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]); // Dependency array: chạy lại khi isOpen hoặc onClose thay đổi

  // Conditional Rendering: không render nếu modal đang đóng
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 12,
          padding: "32px 40px",
          maxWidth: 420,
          width: "90%",
          textAlign: "center",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2>Thông báo</h2>
        <p>Đây là nội dung Modal. Nhấn Escape hoặc nút bên dưới để đóng.</p>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
}

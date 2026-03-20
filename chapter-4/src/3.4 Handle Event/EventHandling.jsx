import { useState } from "react";

const EventHandling = () => {
  // * Sử dụng useState để tạo một state đếm số lần click
  const [count, setCount] = useState(0);
  //! Hàm để xử lý sự kiện khi click vào nút
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Bạn đã click được {count} lần</p>
      {/* //* Thêm hàm để sử lý sự kiện khi click vào nút */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default EventHandling;

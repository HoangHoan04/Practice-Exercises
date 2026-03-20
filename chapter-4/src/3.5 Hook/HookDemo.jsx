import { useState, useEffect } from "react";

const HookDemo = () => {
  const [count, setCount] = useState(0);

  //Hook useEffect sẽ được gọi lại khi nút được click vì
  // đã thêm biến count vào dependency array của useEffect
  useEffect(() => {
    // * Sẽ cập nhật tên của trang web mỗi khi count thay đổi
    document.title = `Số lần nhấn là ${count} lần`;
  }, [count]);

  return (
    <div>
      <p>Số lần nhấn là {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default HookDemo;

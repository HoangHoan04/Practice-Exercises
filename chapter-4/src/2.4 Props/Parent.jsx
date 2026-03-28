import { useState } from "react";
import Children from "./Children";

const Parent = () => {
  // Khởi tạo state để lưu giá trị input
  const [value, setValue] = useState("");

  return (
    <div>
      <div>Parent</div>
      <input
        type="text"
        name="value"
        id=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* Gửi value theo dạng props cho thẻ con là Children */}
      <Children value={value} />
    </div>
  );
};

export default Parent;

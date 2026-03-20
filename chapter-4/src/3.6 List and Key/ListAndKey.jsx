const flowers = ["rose", "lily", "tulip", "daisy", "sunflower"];

const ListAndKey = () => {
  return (
    <div>
      <h2>Danh sách hoa</h2>
      <ul>
        {/* hàm map giúp đọc qua các phần tử trong mảng */}
        {flowers.map((flower, index) => (
          // Key là một thuộc tính đặc biệt được sử dụng để
          // giúp React xác định phần tử nào đã thay đổi,
          // được thêm vào hoặc bị xóa khỏi danh sách. Key nên là một giá trị duy nhất
          //  và ổn định cho mỗi phần tử trong danh sách.
          <li key={index}>{flower}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListAndKey;

import React, { useState, useEffect } from "react";

function LearnUseEffect() {
  const [data, setData] = useState("Initial Data"); // Khai báo với giá trị chuỗi ban đầu

  // Hoặc nếu muốn giữ nguyên kiểu dữ liệu là null:
  // const [data, setData] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  // Tương đương với componentDidMount
  useEffect(() => {
    // Thực hiện các tác vụ khi component được render lần đầu tiên
    fetchData();

    // Clean-up function, sẽ được gọi khi component unmounts
    return () => {
      // Thực hiện các tác vụ clean-up khi component unmounts
      // Ví dụ: hủy các subscription, dọn dẹp tài nguyên
    };
  }, []);

  // Tương đương với componentDidUpdate, sẽ chạy mỗi khi `isLoading` thay đổi
  useEffect(() => {
    // Thực hiện các tác vụ khi `isLoading` thay đổi
    // Ví dụ: hiển thị loading indicator, gọi API, etc.
    if (!isLoading) {
      // Tác vụ khi dữ liệu đã được tải xong
    }
  }, [isLoading]);

  // Hàm lấy dữ liệu từ API
  const fetchData = () => {
    // Thực hiện các tác vụ để lấy dữ liệu từ API
    // Ví dụ: gọi API bằng fetch hoặc axios
    // Ở đây, mình sẽ giả lập việc lấy dữ liệu từ API bằng setTimeout
    setTimeout(() => {
      const mockData = "Mock API Data";
      setData(mockData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Example Component</h1>
          <p>{data}</p>
        </div>
      )}
    </div>
  );
}

export default LearnUseEffect;

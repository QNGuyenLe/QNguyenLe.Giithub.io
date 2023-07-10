# Clone APP
`Ấn vào code rồi download thực hiện giải nén`

# Giải thích file include.js trong assets
- Hàm includeHTML() lấy danh sách tất cả các phần tử trong tệp HTML hiện tại bằng cách sử dụng document.getElementsByTagName("*") và lưu vào biến z.

- Duyệt qua từng phần tử trong danh sách z.

- Kiểm tra xem phần tử có thuộc tính w3-include-html hay không. Nếu có, nghĩa là phần tử đó cần bao gồm nội dung của một tệp HTML khác.

- Sử dụng đối tượng XMLHttpRequest để tải nội dung của tệp HTML được chỉ định trong thuộc tính w3-include-html. Khi tải xong, hàm onreadystatechange được gọi để xử lý kết quả.

- Nếu trạng thái readyState của XMLHttpRequest là 4 (hoàn thành), kiểm tra trạng thái status để xác định xem việc tải tệp HTML thành công hay không.

- Nếu tệp HTML được tải thành công (status là 200), nội dung của phần tử hiện tại (elmnt) được thay thế bằng nội dung của tệp HTML đã tải (this.responseText).

- Nếu tệp HTML không tồn tại (status là 404), phần tử hiện tại được thay thế bằng chuỗi "Page not found.".

- Xóa thuộc tính w3-include-html của phần tử hiện tại.

- Gọi lại hàm includeHTML() để tiếp tục tìm và xử lý các phần tử khác.

Cuối cùng, gọi hàm includeHTML() để bắt đầu quá trình bao gồm nội dung HTML.


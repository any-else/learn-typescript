/**
 * là cách tổ chức mã TS thành các phạm vi riêng biệt để giải quyết vấn đề xung đột tên và quản lys
 * code trong dự án
 * 1. Namespaces không được khuyến khích sử dụng nữa và thay vào đó sẽ là nó sẽ thay
 * thế bằng Modules bắt đầu từ TS 1.5 TS chuyển sang dùng Modules thay vì Namespaces
 *
 * 2. Modules giúp tạo các phạm vi tách biệt cho các phần khác nhau của code
 * Chúng hỗ trợ việc quản lý các phụ thuộc, và hỗ trợ nhiều loại import và export
 *
 *
 */

// File: utils.ts
export function calculate(x: number, y: number): number {
  return x + y;
}

// File: main.ts
// import { calculate } from "./utils";
const result = calculate(5, 10);

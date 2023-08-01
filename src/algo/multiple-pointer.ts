/**
 * - là gì : là một mẫu thông dụng liên quan tới giải quyết vấn đề liên quan tới data có thứ tự
 * như là array hoặc là chuỗi  => thường thì sẽ là tìm kiếm
 *
 * - làm gì: sử dụng nhiều con trỏ chuột để duyệt qua data đồng thời và qua nhiều vị trí
 * khác nhau
 *
 * - mục đích: dùng để tối ưu việc lặp dữ liệu và giải quyết các vấn đề phức tạp
 *
 * - sử dụng như thế nào:
 *  - hướng 1: là Two pointer (2 con trỏ) => thường mình sẽ đặt ở đầu và ở cuối rồi để nó đi vào
 * bên trong sau đó thực hiện logic như là so sánh , check để giải quyết bài toán
 *
 * - hướng 2: Multiple pointer => đặt tứ lung tung
 */

/**
 * Viết một hàm sumZero nhận vào 1 tham số là 1 mảng các
*  số tự nhiên đã được sắp xếp tăng dần, tìm và trả về cặp số
    đầu tiên ở trong mảng có tổng = 0. 
 */

// viết thường

export const sumZero = (arr: number[]): number[] => {
  if (arr.length == 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};

export const sumZero2 = (arr: number[]): number[] | undefined => {
  if (arr.length == 0) {
    return [];
  }
  let pointerLeft = 0;
  let pointerRight = arr.length - 1;

  while (pointerLeft < pointerRight) {
    if (arr[pointerLeft] + arr[pointerRight] == 0) {
      return [arr[pointerLeft], arr[pointerRight]];
    }
    if (arr[pointerLeft] + arr[pointerRight] > 0) {
      pointerRight--;
    } else {
      pointerLeft++;
    }
  }
};

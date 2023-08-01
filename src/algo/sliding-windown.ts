/**
 * - là gì : là một mẫu thông dụng liên quan tới giải quyết vấn đề liên quan tới data bằng cách duyệt
 * qua nó bằng một sliding window theo một quy tắc nhất định
 *
 * - ý tưởng: duyệt qua các phần tử trong mảng/chuỗi bằng cách
 * di chuyển cửa sổ trượt từ trái sang phải hoặc ngược lại
 * thì khi mà di chuyển, thì mình sẽ tính toán lại giá trị mới
 * dựa trên giá trị hiện tại và giá trị bị loại bỏ khỏi cửa sổ
 *
 * hay Khi sử dụng Sliding Window Pattern, chúng ta sẽ duyệt qua mảng/chuỗi một lần
 *  và duy trì một window sliding có kích thước cố định. Ban đầu, chúng ta tính toán giá 
 * trị ban đầu của cửa sổ bằng cách tính tổng hoặc tính toán giá trị khác tùy thuộc vào
 *  vấn đề cụ thể.


 *
 *
 * - làm gì: tìm kiếm, hoặc là tính toán
 
 *  - Tìm kiếm tất cả các phần tử duy nhất trong mảng/chuỗi,
 *  - tìm các phần tử liên tiếp có tổng bằng 1 giá trị cho truowccs
 * - etc v.v.v 
 * 
 * 
 * - Lợi ích là giảm độ phức tạp của thuật toán và tăng hiệu suất tính toán 
 * Thay vì ae duyệt qua toàn bộ dât nhiều lần để tính toán lại từng giá trị 
 * chúng ta chỉ cần tính toán lại giá trị trong window khi di chuyển nó 
 * 
 * 
 *
 */

//cach 1: tu duy thuong

export const maxSumArr = (
  numberList: number[],
  distance: number
): number | undefined => {
  let sum = 0;
  //kiem mang numberList nho hon distance thi return ve undefined
  if (numberList.length < distance) {
    return undefined;
  }
  //duyet mang numberList
  for (let i = 0; i <= numberList.length - distance; i++) {
    let sumSub = 0;
    for (let j = i; j < distance + i; j++) {
      sumSub += numberList[j];
    }
    sum = Math.max(sum, sumSub);
  }
  return sum;
};

//cach 2 su dung thuat toan sliding window
export const maxSumArr2 = (
  numberList: number[],
  distance: number
): number | undefined => {
  let window = 0;
  let maxSum = 0;
  if (numberList.length < distance) {
    return undefined;
  }

  for (let i = 0; i < distance; i++) {
    window += numberList[i];
  }
  maxSum = window;
  for (let i = distance; i < numberList.length; i++) {
    window = window + numberList[i] - numberList[i - distance];
    maxSum = Math.max(window, maxSum);
  }
  return maxSum;
};

//SET => luu ko trung lap

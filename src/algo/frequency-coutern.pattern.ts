/**
 * Viết một hàm same nhận vào 2 tham số là 2 mảng, kiểm
  tra xem các phần tử trong mảng đầu tiên có bình phương
  bằng với từng phần tử trong mảng thứ hai hay không. 

  ---- Phân tích ----
  @input : 2 mảng, => 2 chứa số nguyên duong, => không giới hạn  các phần tử 
  @output : trả về kiểu dữ liệu boolean => if mảng đầu bình phương = mảng thứ 2 => true => fasle  
 */

// cach 1: ko sử dụng frequency count

export const same = (arr1: number[], arr2: number[]): boolean => {
  //so sánh độ dài của mảng => nếu ko bằng nhau thì return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //sắp sếp
  arr1.sort((a, b) => a - b);
  console.log("mang da sap xep arr1", arr1);
  arr2.sort((a, b) => a - b);
  console.log("mang da sap xep arr2", arr2);
  //so sanh độ dài của mảng => nếu ko bằng nhau thì return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] ** 2 !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//cach 2: frequency count

interface Frequency {
  [key: number]: number;
}
export const same2 = (arr1: number[], arr2: number[]): boolean => {
  //so sánh độ dài của mảng => nếu ko bằng nhau thì return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // tao store de luu  tru
  let frequency1: Frequency = {};
  let frequency2: Frequency = {};
  //dem
  for (let value of arr1) {
    frequency1[value] = (frequency1[value] || 0) + 1;
  }
  for (let value of arr2) {
    frequency2[value] = (frequency2[value] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!((+key) ** 2 in frequency2)) {
      return false;
    }
    //kiem tra so luong xuat hien cua phần tử của hai mảng có cùng số lượng hay không?
    if (frequency2[(+key) ** 2] !== frequency1[key]) {
      //== 1 // ==2 ) {
      return false;
    }
    return true;
  }

  return true;
};

export const same3 = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequencyCounter: { [key: number]: number } = {};

  // Đếm số lần xuất hiện của các giá trị trong cả hai mảng arr1 và arr2
  for (let val of arr1) {
    const squaredVal = val ** 2;
    frequencyCounter[squaredVal] = (frequencyCounter[squaredVal] || 0) + 1;
  }

  // Kiểm tra xem mỗi số trong arr2 có là bình phương của một số trong arr1 hay không
  for (let val of arr2) {
    if (!frequencyCounter[val]) {
      return false;
    }
    frequencyCounter[val]--;
  }

  return true;
};

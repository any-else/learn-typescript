export const learnES6 = () => {
  // higher order function
  /**
   * bài lớp: có điểm hackathon => tính trung bình điểm của cả lớp, tính điểm của nam, và điểm trung của nữ
   *  khái niệm: Higher Order Function là một function nhận tham số đầu vào là một function và trả về một function
   */
  interface IStudentPoint {
    id: number;
    name: string;
    point: number;
    gender: "F" | "M";
  }

  const studentListPoint: IStudentPoint[] = [
    {
      id: 1,
      name: "Thai Thi Nhan",
      point: 8,
      gender: "F",
    },
    {
      id: 2,
      name: "Ba Linh ",
      point: 8,
      gender: "F",
    },
    {
      id: 3,
      name: "Diep THu ",
      point: 8,
      gender: "F",
    },
    {
      id: 4,
      name: "Dong BOng",
      point: 8,
      gender: "M",
    },
    {
      id: 5,
      name: "Khoa Gangter ",
      point: 8,
      gender: "M",
    },
    {
      id: 6,
      name: "Xuyen Ga ",
      point: 8,
      gender: "M",
    },
  ];

  // điểm trung bình tổng của cả lớp
  // điểm
  //c1:
  const averagePoint =
    studentListPoint.reduce((sum, student) => sum + student.point, 0) /
    studentListPoint.length;
  console.log("trung bình =>", averagePoint);
};

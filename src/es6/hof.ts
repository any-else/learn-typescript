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
  // điểm trung bình tổng của giới tính nam
  //điểm trung bình của giới tính nữ
  //c1:
  const averagePoint =
    studentListPoint.reduce((sum, student) => sum + student.point, 0) /
    studentListPoint.length;
  console.log("trung bình =>", averagePoint);

  //c1:
  //filter nam
  const filterBoy = studentListPoint.filter(
    (student) => student.gender === "M"
  );
  filterBoy.reduce((sum, student) => sum + student.point, 0) / filterBoy.length;
  //filter nữ
  const filterGirl = studentListPoint.filter(
    (student) => student.gender === "F"
  );
  filterGirl.reduce((sum, student) => sum + student.point, 0) /
    filterGirl.length;

  //c2:
  //kiểm tra
  const isCheckBoy = (data: IStudentPoint) => data.gender == "M"; //đây là function
  const isCheckGirls = (data: IStudentPoint) => data.gender == "F"; //đây là function
  //filter
  const filterBoy2 = (data: IStudentPoint[]) => {
    return studentListPoint.filter(isCheckBoy);
  }; // function filter

  const filterGirl2 = (data: IStudentPoint[]) => {
    return studentListPoint.filter(isCheckGirls);
  };

  //HOF => nhận đầu vào là một function => trả về một function
  const avgPoint2 = (callback: any) => {
    console.log("callback", callback);
    return (
      callback.reduce((sum: any, student: any) => sum + student.point, 0) /
      callback.length
    );
  };

  const avgTotalBoy = avgPoint2(filterBoy2(studentListPoint));
  console.log("trung bình nam", avgTotalBoy);
  const avgTOtalGirl = avgPoint2(filterGirl2(studentListPoint));
  console.log("trung binh nu", avgTOtalGirl);
};

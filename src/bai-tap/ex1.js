/**
 * phân tích vấn đề
 */
var _a, _b, _c, _d, _e;
var Student = /** @class */ (function () {
    function Student(studentId, studentName, sex, className, age, address) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.sex = sex;
        this.className = className;
        this.age = age;
        this.address = address;
    }
    // Getter and setter methods
    Student.prototype.getStudentId = function () {
        return this.studentId;
    };
    Student.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    Student.prototype.getStudentName = function () {
        return this.studentName;
    };
    Student.prototype.setStudentName = function (studentName) {
        this.studentName = studentName;
    };
    Student.prototype.getSex = function () {
        return this.sex;
    };
    Student.prototype.setSex = function (sex) {
        this.sex = sex;
    };
    Student.prototype.getClassName = function () {
        return this.className;
    };
    Student.prototype.setClassName = function (className) {
        this.className = className;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    Student.prototype.getAddress = function () {
        return this.address;
    };
    Student.prototype.setAddress = function (address) {
        this.address = address;
    };
    // Method to input data
    Student.prototype.inputData = function (studentId, studentName, sex, className, age, address) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.sex = sex;
        this.className = className;
        this.age = age;
        this.address = address;
    };
    // Method to display data
    Student.prototype.displayData = function () {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.studentName);
        console.log("Sex:", this.sex ? "Male" : "Female");
        console.log("Class Name:", this.className);
        console.log("Age:", this.age);
        console.log("Address:", this.address);
    };
    return Student;
}());
var StudentManager = /** @class */ (function () {
    function StudentManager() {
    }
    StudentManager.createStudent = function (student) {
        StudentManager.studentList.push(student);
    };
    StudentManager.updateStudent = function (student, dataUpdate) {
        var index = StudentManager.studentList.findIndex(function () { return student.getStudentId() === (dataUpdate === null || dataUpdate === void 0 ? void 0 : dataUpdate.studentId); });
    };
    StudentManager.showAllStudent = function () {
        StudentManager.studentList.forEach(function (item) {
            item.displayData();
        });
    };
    StudentManager.deleteStudent = function (studentId) {
        StudentManager.studentList = StudentManager.studentList.filter(function (item) { return item.getStudentId() !== studentId; });
    };
    StudentManager.studentList = [];
    return StudentManager;
}());
function generateRandomId() {
    return Math.random().toString(36).substr(2, 8);
}
var option = prompt("Enter the option: C - Create, R - Read, U - Update, D - Delete, E - Exit, Q- CUt");
while (option !== "Q") {
    switch (option) {
        case "C":
            var studentId = (_a = prompt("Enter student ID: ")) !== null && _a !== void 0 ? _a : generateRandomId();
            var studentName = (_b = prompt("Enter student name: ")) !== null && _b !== void 0 ? _b : "";
            var sex = prompt("Enter student sex male or female: ") === "male" ? true : false;
            var className = (_c = prompt("Enter class name: ")) !== null && _c !== void 0 ? _c : "";
            var age = (_d = parseInt(prompt("Enter student age: "))) !== null && _d !== void 0 ? _d : 18;
            var address = (_e = prompt("Enter student address: ")) !== null && _e !== void 0 ? _e : "";
            var student = new Student(Number(studentId), studentName, sex, className, age, address);
            StudentManager.createStudent(student);
            StudentManager.showAllStudent();
            break;
        default:
            alert("tuoi ngan con");
            break;
    }
    option = prompt("Enter the option: C - Create, R - Read, U - Update, D - Delete, E - Exit, Q- CUt");
}

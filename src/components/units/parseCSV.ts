import Course from "../types/Course";
import grade from "../types/Grade";
// The colums of the CSV file
// "学籍番号","学生氏名","科目番号","科目名 ","単位数","春学期","秋学期","総合評価","科目区分","開講年度","開講区分"

const formCSV = (csv: string): string => {
  let lines = csv.split("\n");
  // Remove the first and the last line
  lines.shift();
  lines.pop();

  lines = lines.map((line) => line.replace(/"/g, ""));
  return lines.join("\n");
};

const parseCSV = (csv: string): Course[] => {
  const formatedCSV = formCSV(csv);
  const lines = formatedCSV.split("\n");
  const courses: Course[] = [];
  lines.forEach((line) => {
    const courseId = line.split(",")[2];
    const courseName = line.split(",")[3];
    const registrationYear = line.split(",")[9];
    const units = line.split(",")[4];
    const courseGrade = line.split(",")[7] as grade;
    const course: Course = {
      id: courseId,
      name: courseName,
      registrationYear: registrationYear,
      units: Number(units),
      grade: courseGrade,
    };
    courses.push(course);
  });
  return courses;
};

export default parseCSV;
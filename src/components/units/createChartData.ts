import Course from "../types/Course";
import { gradeOrder, gradeColor } from "../consts/index";

const getGradeData = (courses: Course[], year: string) => {
  const gradeData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  courses.forEach((course) => {
    if (year === "all" || course.registrationYear === year) {
      gradeData[gradeOrder.indexOf(course.grade)] += course.units;
    }
  });
  return gradeData;
};

export const createChartData = (courses: Course[], year: string) => {
  const gradeData = getGradeData(courses, year);
  const gradeRows: (string | number)[][] = [["Grade", "Units"]];
  for (let i = 0; i < gradeData.length; i++) {
    gradeRows.push([gradeOrder[i], gradeData[i]]);
  }
  return gradeRows;
};

import Course from "../types/Course";

const gradePointMap: { [key: string]: number } = {
  "A+": 4.3,
  A: 4.0,
  B: 3,
  C: 2,
  D: 0,
};

const isCountedToGPA = (course: Course) => {
  return Object.keys(gradePointMap).includes(course.grade);
};

const calculateGPA = (courses: Course[], year: string) => {
  if (year !== "all") {
    courses = courses.filter((course) => {
      return course.registrationYear === year;
    });
  }

  let totalUnits = 0;
  let totalGradePoints = 0;
  courses.forEach((course) => {
    if (isCountedToGPA(course)) {
      totalUnits += course.units;
      totalGradePoints += gradePointMap[course.grade] * course.units;
    }
  });

  // Avoid division by zero
  if (totalUnits === 0) {
    return 0;
  }

  // Round to 2 decimal places
  return Math.round((totalGradePoints / totalUnits) * 100) / 100;
};

export default calculateGPA;

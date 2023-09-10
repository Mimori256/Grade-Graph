import Course from "../types/Course";

// Grades: A+, A, B, C, D, P, F, 認, 履修中
const grades = ["A+", "A", "B", "C", "D", "P", "F", "認", "履修中"];

// Sort courses by grade
const sortCourses = (courses: Course[]): Course[] => {
  const sortedCourses = courses.sort((a, b) => {
    return grades.indexOf(a.grade) - grades.indexOf(b.grade);
  });
  console.log(sortedCourses);
  return sortedCourses;
};

export default sortCourses;

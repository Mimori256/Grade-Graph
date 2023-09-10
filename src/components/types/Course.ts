import grade from "./Grade";
type Course = {
  id: string;
  name: string;
  registrationYear: string;
  units: number;
  grade: grade;
};

export default Course;

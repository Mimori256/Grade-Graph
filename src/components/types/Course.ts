import Grade from "./Grade";
type Course = {
	id: string;
	name: string;
	registrationYear: string;
	units: number;
	grade: Grade;
	courseType: string;
};

export default Course;

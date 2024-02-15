import { courseSchema } from "@/schema/schema";
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
	for (const line of lines) {
		const splitedLine = line.split(",");
		const courseId = splitedLine[2];
		const courseName = splitedLine[3];
		const registrationYear = splitedLine[9];
		const units = splitedLine[4];
		const courseGrade = splitedLine[7] as grade;
		const courseType = splitedLine[8];
		const course: Course = {
			id: courseId,
			name: courseName,
			registrationYear: registrationYear,
			units: Number(units),
			grade: courseGrade,
			courseType: courseType,
		};

		// Validate the course object
		try {
			courseSchema.parse(course);
		} catch (error) {
			console.log(error);
		}

		courses.push(course);
	}
	return courses;
};

export default parseCSV;

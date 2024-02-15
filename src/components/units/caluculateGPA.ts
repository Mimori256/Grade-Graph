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

export const countUnits = (allCourses: Course[], year: string) => {
	let courses: Course[] = allCourses;
	if (year !== "all") {
		courses = allCourses.filter((course) => {
			return course.registrationYear === year;
		});
	}

	let totalUnits = 0;
	let totalAcquiredUnits = 0;

	courses.forEach((course) => {
		totalUnits += course.units;
		if (isCountedToGPA(course)) {
			totalAcquiredUnits += course.units;
		}
	});

	return [totalUnits, totalAcquiredUnits];
};

export const calculateGPA = (
	allCourses: Course[],
	year: string,
	isTeacherCurriculumIncluded: boolean,
) => {
	let courses: Course[] = allCourses;
	if (year !== "all") {
		courses = courses.filter((course) => {
			return course.registrationYear === year;
		});
	}

	if (!isTeacherCurriculumIncluded) {
		courses = courses.filter((course) => {
			return course.courseType !== "D";
		});
	}

	let totalUnits = 0;
	let totalGradePoints = 0;
	for (const course of courses) {
		if (isCountedToGPA(course)) {
			totalUnits += course.units;
			totalGradePoints += gradePointMap[course.grade] * course.units;
		}
	}

	// Avoid division by zero
	if (totalUnits === 0) {
		return 0;
	}

	// Round to 2 decimal places
	return Math.round((totalGradePoints / totalUnits) * 100) / 100;
};

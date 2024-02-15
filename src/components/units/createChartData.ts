import { gradeOrder } from "../consts/index";
import Course from "../types/Course";

const getGradeData = (courses: Course[], year: string) => {
	const gradeData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (const course of courses) {
		if (year === "all" || course.registrationYear === year) {
			gradeData[gradeOrder.indexOf(course.grade)] += course.units;
		}
	}
	return gradeData;
};

const getPercentageByGrade = (courses: Course[], year: string) => {
	const gradeData = getGradeData(courses, year);
	const totalUnits = gradeData.reduce((a, b) => a + b, 0);
	const percentageData = gradeData.map((units) =>
		Math.round((units / totalUnits) * 100),
	);
	return percentageData;
};

export const createChartData = (courses: Course[], year: string) => {
	const gradeData = getGradeData(courses, year);
	const percentageData = getPercentageByGrade(courses, year);
	const gradeRows: (string | number)[][] = [["Grade", "Units"]];
	for (let i = 0; i < gradeData.length; i++) {
		gradeRows.push([`${gradeOrder[i]}: ${percentageData[i]}%`, gradeData[i]]);
	}
	return gradeRows;
};

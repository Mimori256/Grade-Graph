import Course from "@/components/types/Course";
import Vuex from "vuex";

export const store = new Vuex.Store({
	state: {
		courses: [] as Course[],
		year: "all",
	},
	mutations: {
		setCourses(state, courses: Course[]) {
			state.courses = courses;
		},
		setYear(state, year: string) {
			state.year = year;
		},
	},
});

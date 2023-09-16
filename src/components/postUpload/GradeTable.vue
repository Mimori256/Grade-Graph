<script lang="ts">
import { defineComponent } from "vue";
import { store } from "@/store/index";

import Course from "../types/Course";
import sortCourses from "../units/sortCourses";

import "@/components/styles/globals.css";

export default defineComponent({
  setup() {
    const year = store.state.year;
    let courses: Course[];
    if (year === "all") {
      courses = store.state.courses;
    } else {
      courses = store.state.courses.filter((course) => {
        return course.registrationYear === year;
      });
    }
    const gradeClassNamesMap: Record<string, string> = {
      "A+": "a-plus",
      A: "a",
      B: "b",
      C: "c",
      D: "d",
      P: "p",
      F: "f",
      認: "nin",
      履修中: "ryu",
    };

    const getGradeClassName = (grade: string) => {
      return gradeClassNamesMap[grade];
    };

    const isYearAll = (year: string) => {
      return year == "all";
    };

    courses = sortCourses(courses);

    return { courses, year, getGradeClassName, isYearAll };
  },
});
</script>
<template>
  <h2>成績一覧</h2>
  <table id="grade-table">
    <tr>
      <th class="left">科目名</th>
      <th>単位数</th>
      <th>成績</th>
      <th v-if="isYearAll(year)">履修年度</th>
    </tr>
    <tr
      v-for="course in courses"
      :key="course.grade"
      :class="getGradeClassName(course.grade)"
    >
      <td class="left">{{ course.name }}</td>
      <td>{{ course.units }}</td>
      <td>{{ course.grade }}</td>
      <td v-if="isYearAll(year)">
        {{ course.registrationYear }}
      </td>
    </tr>
  </table>
  <div id="unit-sum"></div>
</template>

<style>
#grade-table {
  border: 1px solid #000;
  margin: auto;
}
.left {
  text-align: left;
}
</style>

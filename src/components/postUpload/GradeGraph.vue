<script lang="ts">
import { defineComponent } from "vue";
import { GChart } from "vue-google-charts";
import { store } from "@/store/index";
import { createChartData } from "@/components/units/createChartData";
import { gradeColor } from "../consts/index";

export default defineComponent({
  components: {
    GChart,
  },
  props: {
    isTeacherCurriculumIncluded: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    let courses = store.state.courses;
    if (!props.isTeacherCurriculumIncluded) {
      courses = courses.filter((course) => course.courseType !== "D");
    }

    const year = store.state.year;
    const data = createChartData(courses, year);
    const options = {
      colors: gradeColor,
      backgroundColor: "#eeeeee",
      pieSliceText: "none",
      chartArea: {
        width: "100%",
        height: "80%",
      },
      legend: {
        position: "bottom",
      },
    };
    return { data, options };
  },
});
</script>

<template>
  <GChart type="PieChart" :data="data" :options="options" />
</template>

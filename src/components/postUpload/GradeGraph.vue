<script lang="ts">
import { defineComponent } from "vue";
import { GChart } from "vue-google-charts";
import { store } from "@/store/index";
import { createChartData } from "@/components/units/createChartData";

export default defineComponent({
  components: {
    GChart,
  },
  setup() {
    const courses = store.state.courses;
    const year = store.state.year;
    const data = createChartData(courses, year);
    const options = {
      chart: {
        title: "成績分布",
      },
    };
    console.log(data);
    return { data, options };
  },
});
</script>

<template>
  <GChart type="PieChart" :data="data" :options="options" />
</template>

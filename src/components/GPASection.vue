<script lang="ts">
import Course from "./types/Course";
import calculateGPA from "./units/caluculateGPA";
import { PropType, defineComponent } from "vue";

// Props has the array of Course
export default defineComponent({
  props: {
    content: {
      type: Array as PropType<Course[]>,
      required: true,
    },
  },
  methods: {
    calculateGPA,
  },
});
</script>

<template>
  <!--Show the content of props-->
  <div>
    <p>あなたのGPA</p>
    <p>{{ calculateGPA(content) }}</p>
  </div>
</template>

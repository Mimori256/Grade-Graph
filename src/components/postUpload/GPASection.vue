<script lang="ts">
import { countUnits, calculateGPA } from "../units/caluculateGPA";
import { defineComponent } from "vue";
import { store } from "@/store/index";

export default defineComponent({
  props: {
    isTeacherCurriculumIncluded: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const GPA = calculateGPA(
      store.state.courses,
      store.state.year,
      props.isTeacherCurriculumIncluded
    );
    const [registeredUnits, acquiredUnits]: number[] = countUnits(
      store.state.courses,
      store.state.year
    );
    return { store, GPA, registeredUnits, acquiredUnits };
  },
});
</script>

<template>
  <div>
    <p>修得単位数</p>
    <p>{{ acquiredUnits }}/{{ registeredUnits }}</p>
    <p>あなたのGPA</p>
    <p>{{ GPA }}</p>
  </div>
</template>

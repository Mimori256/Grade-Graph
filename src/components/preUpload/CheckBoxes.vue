<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["change-option"],
  setup() {
    const includeCurriculumToGraph = ref(false);
    const includeCurriculumToGPA = ref(false);

    return {
      includeCurriculumToGraph,
      includeCurriculumToGPA,
    };
  },
});
</script>

<template>
  <div>
    <label for="teachingCurriculumToGraph">
      教職をグラフに含める
      <input
        type="checkbox"
        id="teachingCurriculumToGraph"
        v-model="includeCurriculumToGraph"
        @change="$emit('change-option', includeCurriculumToGraph, 'graph')"
      />
    </label>
    <label for="teachingCurriculumToGPA">
      教職をGPAに含める
      <input
        type="checkbox"
        id="teachingCurriculumToGPA"
        v-model="includeCurriculumToGPA"
        @change="$emit('change-option', includeCurriculumToGraph, 'gpa')"
      />
    </label>
  </div>
</template>

<style scoped>
label {
  display: block;
}
</style>

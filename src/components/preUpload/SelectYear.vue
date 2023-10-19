<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["change-option"],
  setup() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    let nendo: number;

    if (currentMonth < 4) {
      nendo = currentYear - 1;
    } else {
      nendo = currentYear;
    }
    const lastFourYears = Array.from({ length: 4 }, (_, i) => nendo - i).map(
      (year) => year.toString()
    );
    const selectedOption = ref("all");

    return {
      lastFourYears,
      selectedOption,
    };
  },
});
</script>

<template>
  <select
    id="year"
    v-model="selectedOption"
    @change="$emit('change-option', selectedOption)"
  >
    <option value="all" selected>全て</option>
    <option v-for="year in lastFourYears" :key="year" :value="year">
      {{ year }}
    </option>
  </select>
</template>

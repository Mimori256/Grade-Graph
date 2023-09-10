<script lang="ts">
import calculateGPA from "./units/caluculateGPA";
import { defineComponent } from "vue";
import { store } from "@/store/index";

// Props has the array of Course
export default defineComponent({
  data() {
    return { store };
  },
  methods: {
    calculateGPA,
  },
});
</script>

<template>
  <div>
    <p>あなたのGPA</p>
    <p>{{ calculateGPA(store.state.courses, store.state.year) }}</p>
  </div>
</template>

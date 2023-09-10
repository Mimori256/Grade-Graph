<template>
  <div id="csvSelect">
    <FileSelector @fileContentChange="updateFileContent" />
  </div>
  <div id="generateOptions">
    年度を選択
    <select id="year" v-model="selected">
      <option value="all" selected>全て</option>
      <option v-for="year in lastFourYears" :key="year" :value="year">
        {{ year }}
      </option>
    </select>
    <label for="includeCurriculumToGraph"
      >グラフに教職を含める
      <input
        type="checkbox"
        id="includeCurriculumToGraph"
        v-model="includeCurriculumToGPA"
      />
    </label>
    <br />
    <label for="includeCurriculumToGPA"
      >GPA計算に教職を含める
      <input
        type="checkbox"
        id="includeCurriculumToGPA"
        v-model="includeCurriculumToGraph"
      />
    </label>
  </div>
  <div>
    <p>{{ selected }}</p>
    <p>{{ includeCurriculumToGPA }}</p>
    <p>{{ includeCurriculumToGraph }}</p>
  </div>
  <div>
    <div>
      <div v-if="fileContent">
        {{ store.commit("setCourses", parseCSV(fileContent)) }}
        {{ store.commit("setYear", selected) }}
        <GradeTable />
        <GPASection />
      </div>
      <p v-else>ファイルを選択してください</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { store } from "./store/index";

import FileSelector from "./components/FileSelector.vue";
import GPASection from "./components/GPASection.vue";
import GradeTable from "./components/GradeTable.vue";
import parseCSV from "./components/units/parseCSV";

export default defineComponent({
  name: "App",
  components: { FileSelector, GPASection, GradeTable },

  setup() {
    const currentYear = new Date().getFullYear();
    const lastFourYears = Array.from(
      { length: 4 },
      (_, i) => currentYear - i
    ).map((year) => year.toString());
    const fileContent = ref<string | null>(null);
    const selected = ref("all");
    const includeCurriculumToGraph = ref(true);
    const includeCurriculumToGPA = ref(true);

    const updateFileContent = (content: string) => {
      fileContent.value = content;
    };

    return {
      selected,
      includeCurriculumToGraph,
      includeCurriculumToGPA,
      lastFourYears,
      fileContent,
      parseCSV,
      updateFileContent,
      store,
    };
  },
});
</script>

<style>
#app {
  div {
    text-align: center;
  }
}
</style>

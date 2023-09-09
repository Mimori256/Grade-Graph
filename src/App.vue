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
        <GPASection :content="fileContent" />
      </div>
      <p v-else>ファイルを選択してください</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import FileSelector from "./components/FileSelector.vue";
import GPASection from "./components/GPASection.vue";

export default defineComponent({
  name: "App",
  components: { FileSelector, GPASection },

  setup() {
    const currentYear = new Date().getFullYear();
    const lastFourYears = Array.from(
      { length: 4 },
      (_, i) => currentYear - i
    ).map((year) => year.toString());
    const fileContent = ref<string | null>(null);

    const updateFileContent = (content: string) => {
      fileContent.value = content;
    };

    let selected = "all";
    let includeCurriculumToGraph = true;
    let includeCurriculumToGPA = true;

    return {
      selected,
      includeCurriculumToGraph,
      includeCurriculumToGPA,
      lastFourYears,
      fileContent,
      updateFileContent,
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

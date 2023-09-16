<template>
  <h1>成績グラフ表示</h1>
  <div v-if="!isFileUploaded">
    <div id="csvSelect">
      <FileSelector @file-content-change="updateFileContent" />
    </div>

    <div id="generateOptions">
      年度を選択
      <SelectYear @change-option="updateYearOption" />
      <CheckBoxes @change-option="updateCheckbox" />
    </div>
    <div>
      <p>ファイルを選択してください</p>
    </div>
    <HelpNote />
  </div>
  <div v-else>
    <GradeTable />
    <GPASection />
    <DeleteButton @button-click="deleteFile" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { store } from "./store/index";

import FileSelector from "./components/preUpload/FileSelector.vue";
import SelectYear from "./components/preUpload/SelectYear.vue";
import CheckBoxes from "./components/preUpload/CheckBoxes.vue";
import GPASection from "./components/postUpload/GPASection.vue";
import GradeTable from "./components/postUpload/GradeTable.vue";
import parseCSV from "./components/units/parseCSV";
import HelpNote from "./components/preUpload/HelpNote.vue";
import DeleteButton from "./components/postUpload/DeleteButton.vue";

export default defineComponent({
  name: "App",
  components: {
    FileSelector,
    SelectYear,
    CheckBoxes,
    GPASection,
    GradeTable,
    HelpNote,
    DeleteButton,
  },

  setup() {
    const fileContent = ref<string | null>(null);
    const selected = ref("all");
    const isFileUploaded = ref(false);
    const includeCurriculumToGraph = ref(true);
    const includeCurriculumToGPA = ref(true);

    const updateFileContent = (content: string) => {
      isFileUploaded.value = true;
      fileContent.value = content;
      store.commit("setCourses", parseCSV(content));
    };

    const updateYearOption = (selectedOption: string) => {
      selected.value = selectedOption;
      store.commit("setYear", selectedOption);
    };

    type CheckboxOption = "graph" | "gpa";
    const updateCheckbox = (value: boolean, option: CheckboxOption) => {
      if (option === "graph") {
        includeCurriculumToGraph.value = value;
      } else if (option === "gpa") {
        includeCurriculumToGPA.value = value;
      }
    };

    const deleteFile = () => {
      isFileUploaded.value = false;
      fileContent.value = null;
      store.commit("setCourses", []);
      store.commit("setYear", "all");
    };

    return {
      selected,
      includeCurriculumToGraph,
      includeCurriculumToGPA,
      updateYearOption,
      updateCheckbox,
      isFileUploaded,
      fileContent,
      deleteFile,
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

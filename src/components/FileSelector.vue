<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    fileContent: {
      type: String as PropType<string>,
    },
  },

  data() {
    return {};
  },
  methods: {
    handleFileUpload(event: Event) {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.$emit("fileContentChange", e.target?.result as string);
        };
        reader.readAsText(selectedFile);
      }
    },
  },
});
</script>

<template>
  <div>
    <label for="fileSelect"
      >ファイルを選択
      <input
        type="file"
        id="fileSelect"
        @change="handleFileUpload"
        accept=".csv"
      />
    </label>
  </div>
  <p>test</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    fileContent: {
      type: String as PropType<string>,
    },
  },

  setup(props, { emit }) {
    const handleFileUpload = (event: Event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          emit("fileContentChange", e.target?.result as string);
        };
        reader.readAsText(selectedFile);
      }
    };

    return {
      handleFileUpload,
    };
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

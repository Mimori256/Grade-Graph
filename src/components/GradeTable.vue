<script lang="ts">
import { defineComponent } from "vue";
import { store } from "@/store/index";

export default defineComponent({
  setup() {
    return { store };
  },
});
</script>
<template>
  <h1>成績一覧</h1>
</template>

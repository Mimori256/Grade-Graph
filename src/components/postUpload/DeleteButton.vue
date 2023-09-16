<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["button-click"],
  setup() {
    return {};
  },
});
</script>

<template>
  <button @click="$emit('button-click')">戻る</button>
</template>

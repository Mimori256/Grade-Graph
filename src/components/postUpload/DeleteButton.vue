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
  <button class="close-button" @click="$emit('button-click')">戻る</button>
</template>

<style>
.close-button {
  margin: 5% 0;
}
</style>

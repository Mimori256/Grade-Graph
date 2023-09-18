<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <footer>
    <hr />
    <p>
      Source code is availabe on
      <a
        href="https://github.com/Mimori256/Grade-Graph"
        target="_blank"
        rel="noreferrer"
        >GitHub</a
      >
    </p>
    <p>
      Contributed by:
      <a href="https://github.com/Mimori256" target="_blank" rel="noreferrer"
        >Mimori256</a
      >
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin: 5% 0;
  color: #777;
  font-size: 0.9rem;
  word-spacing: 1px;
}

hr {
  color: #ccc;
}
</style>

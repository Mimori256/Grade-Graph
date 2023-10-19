<script lang="ts">
import { defineComponent } from "vue";
import ExternalLink from "../units/ExternalLink.vue";
export default defineComponent({
  components: {
    ExternalLink,
  },
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
      <ExternalLink
        url="https://github.com/Mimori256/Grade-Graph"
        content="GitHub"
      />
    </p>
    <p>
      Contributed by:
      <ExternalLink url="https://github.com/Mimori256" content="Mimori256" />
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

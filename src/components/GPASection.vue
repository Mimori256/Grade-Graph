<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    content: {
      type: String as PropType<string>,
    },
  },
});
</script>

<template>
  <!--Show the content of props-->
  <div>
    <p>test</p>
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		url: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
});
</script>
<template>
	<a :href="url" target="_blank" rel="noreferrer">{{ content }}</a>
</template>

<style scoped>
a,
a:visited {
	color: #4a90e2;
	text-decoration: none;
}

a:hover {
	color: #357abd;
}
</style>

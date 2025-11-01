<script lang="ts">
import { defineComponent } from "vue";
import ExternalLink from "@/components/units/ExternalLink.vue";

export default defineComponent({
	components: {
		ExternalLink,
	},
});
</script>

<template>
	<div class="popup" @click.self="$emit('close-popup')">
		<div class="popup-content">
			<h1>使用方法</h1>
			<p>
				<ExternalLink
					url="https://twins.tsukuba.ac.jp/campusweb/campusportal.do"
					content="TWINS"
				/>
				にアクセスして、「成績」タブを選択
			</p>
			<p>
				成績ページ下部のダウンロードボタンをクリック(表示件数を変更する必要はありません)
			</p>
			<img src="@/assets/img/download.webp" class="popup-image" alt="download">
			<p>
				その後表示される、出力をクリック(ファイル形式、文字コードは変更しないでください)
			</p>
			<img src="@/assets/img/confirm.webp" class="popup-image" alt="confirm">
			<p>これで成績ファイルをダウンロードすることができます</p>
			<p>
				<button @click="$emit('close-popup')">閉じる</button>
			</p>
		</div>
	</div>
</template>

<style scoped>
.popup {
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
}

.popup-content {
	z-index: 2;
	width: 60%;
	height: 80%;
	padding: 1rem;
	background: #eee;
	overflow-y: scroll;
}

.popup-image {
	max-width: 75%;
	max-height: 75%;
}
</style>

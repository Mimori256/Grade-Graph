<script lang="ts">
import { defineComponent, ref } from "vue";
import HelpPopup from "./HelpPopup.vue";
import ExternalLink from "../units/ExternalLink.vue";

export default defineComponent({
  components: {
    ExternalLink,
    HelpPopup,
  },
  setup() {
    const isPopupOpen = ref(false);

    const togglePopup = () => {
      isPopupOpen.value = !isPopupOpen.value;
    };
    return { isPopupOpen, togglePopup };
  },
});
</script>

<template>
  <div id="help">
    <h1>使い方</h1>
    <p>
      TWINSの成績から、成績のCSVファイルをダウンロードして、そのファイルを選択してください
    </p>
    <p @click="togglePopup" class="openPopupButton">
      ファイルのダウンロード方法を表示
    </p>
    <HelpPopup v-show="isPopupOpen" @close-popup="togglePopup" />
  </div>
  <div id="note">
    <h1>注意</h1>
    <div class="warnings">
      <p>このページで算出されるGPAは、対象外を考慮していません</p>
      <p>このページは有志の学生によって作成されています。</p>
      <p>
        このツールの使用により生じた不利益等について、開発者は一切の責任を負いません
      </p>
      <p>使用したCSVファイルが外部に保存されることはありません</p>
    </div>
  </div>
  <div id="updte-notice">
    <p>
      <ExternalLink
        url="https://github.com/Mimori256/Grade-Graph-Old"
        content="旧版のGrade-Graph"
      />
      から、Vue.jsを使って作り直しています
    </p>
    <p>現在更新を進めているため、一部実装されていない機能があります</p>
    <p>旧版を使いたい場合は、上のリンクからアクセスしてください</p>
  </div>
</template>

<style>
.warnings {
  color: crimson;
}

.openPopupButton {
  color: blue;
  cursor: pointer;
}

.openPopupButton:hover {
  text-decoration: underline;
}
</style>

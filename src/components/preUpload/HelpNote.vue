<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <div id="help">
    <h1>使い方</h1>
    <p>
      TWINSの成績から、成績のCSVファイルをダウンロードして、そのファイルを選択してください
    </p>
  </div>
  <div id="note">
    <h1>注意</h1>
    <div id="warnings">
      <p>このページで算出されるGPAは、対象外を考慮していません</p>
      <p>このページは有志の学生によって作成されています。</p>
      <p>
        このツールの使用により生じた不利益等について、開発者は一切の責任を負いません
      </p>
      <p>使用したCSVファイルが外部に保存されることはありません</p>
    </div>
  </div>
</template>

<style>
#warnings {
  color: crimson;
}
</style>

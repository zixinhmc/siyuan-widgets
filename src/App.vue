<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <n-message-provider>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </n-message-provider>
  <div class="test text-3xl">法发顺丰</div>
</template>
<script lang="ts" setup>
  import { NMessageProvider } from 'naive-ui';
  import HelloWorld from './components/HelloWorld.vue';
</script>

<style lang="scss" scoped>
  .test {
    color: red;
  }
</style>

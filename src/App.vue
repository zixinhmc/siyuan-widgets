<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="test text-3xl">法发顺丰</div>
  <div>{{ data }}</div>
</template>
<script lang="ts" setup>
  import { watch } from 'vue';
  import { useFetch } from '@/utils/useFetch';
  import { path, useParameter, ResultData } from '@/types/http/httpSql';
  import HelloWorld from './components/HelloWorld.vue';

  const parameter = useParameter();
  parameter.stmt =
    'SELECT * FROM blocks WHERE path regexp "^/20211116085932-8rwiuh5" and path regexp "/{1}" and type = "d"';

  const { data } = useFetch<ResultData[]>(
    path,
    {
      body: JSON.stringify(parameter),
    },
    {},
  ).json();
  watch(data, (value) => {
    console.log('value', value);
  });
</script>

<style lang="scss" scoped>
  .test {
    color: red;
  }
</style>

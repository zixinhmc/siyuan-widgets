<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="test text-3xl">法发顺丰</div>
  <div>{{ data }}</div>
</template>
<script lang="ts" setup>
  import { watch } from 'vue';
  import { useFetch } from '@/utils/useFetch';
  import HelloWorld from './components/HelloWorld.vue';

  const sql =
    'SELECT * FROM blocks WHERE path regexp "^/20211116085932-8rwiuh5" and path regexp "/{1}" and type = "d"';

  const { data } = useFetch(
    'api/query/sql',
    {
      body: JSON.stringify({
        stmt: sql,
      }),
    },
    {},
  )
    .post()
    .json();

  watch(data, (value) => {
    console.log('value', value);
  });
  console.log(data);
</script>

<style lang="scss" scoped>
  .test {
    color: red;
  }
</style>

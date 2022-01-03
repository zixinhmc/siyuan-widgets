<template>
  <h1 class="text-2xl flex-center bg-white">{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { useMessage } from 'naive-ui';
  import { path, ResultData, useParameter } from '@/types/http/httpSql';
  import { useFetch } from '@/utils/useFetch';

  defineProps<{ msg: string }>();
  const count = ref(0);
  const message = useMessage();

  const parameter = useParameter();
  parameter.stmt =
    'SELECT * FROM blocks WHERE path regexp "^/20211116085932-8rwiuh5" and path regexp "/{1}" and type = "d"';

  const { data } = useFetch<ReturnType<typeof useParameter>, ResultData[]>(
    path,
    parameter,
    message,
  );

  watch(data, (value) => {
    console.log('value', value);
  });
</script>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>

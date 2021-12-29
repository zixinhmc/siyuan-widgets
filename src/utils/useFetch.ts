import { createFetch } from '@vueuse/core';

export const useFetch = createFetch({
  baseUrl: 'http://127.0.0.1:6806/',
  fetchOptions: {
    mode: 'cors',
  },
});

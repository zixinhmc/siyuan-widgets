import { createFetch } from '@vueuse/core';

export const useFetch = createFetch({
  baseUrl: 'http://127.0.0.1:6806',
  options: {
    afterFetch(ctx) {
      // return JSON.parse(ctx.data).data;
      // console.log('data', ctx.data.data);
      return ctx.data;
    },
  },
  fetchOptions: {
    method: 'post',
    mode: 'cors',
  },
});

import { createFetch } from '@vueuse/core';
import { MessageApi } from 'naive-ui/lib/message';

const baseFetch = createFetch({
  baseUrl: 'http://127.0.0.1:6806',
  fetchOptions: {
    method: 'post',
    mode: 'cors',
  },
});

export function useFetch<T, K>(
  path: string,
  parameter: T,
  message: MessageApi,
) {
  const { data } = baseFetch<K>(
    path,
    {
      body: JSON.stringify(parameter),
    },
    {
      afterFetch(ctx) {
        return ctx.data;
      },
      onFetchError(ctx) {
        message.error('服务器错误, 请稍后再试...');
        return ctx;
      },
    },
  ).json();

  return { data };
}

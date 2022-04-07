<template>
  <n-data-table :columns="columns" :data="documentList"></n-data-table>
</template>

<script lang="ts" setup>
  import { ref, watch, h } from 'vue';
  import { useFetch } from '@/utils/useFetch';
  import { path, useParameter } from '@/types/http/httpSql';
  import type { ResultData } from '@/types/http/httpSql';
  import { useMessage } from 'naive-ui';
  import type { DataTableColumns } from 'naive-ui/lib/data-table';

  const message = useMessage();
  const parameter = useParameter();
  parameter.stmt = 'SELECT * FROM blocks WHERE type="d" LIMIT 10000';
  const { data } = useFetch<ReturnType<typeof useParameter>, ResultData[]>(
    path,
    parameter,
    message,
  );

  interface Document {
    id: string;
    content?: ResultData;
    childLength: number;
    childrenLength: number;
  }

  const document: { [key in string]: Document } = {};

  const documentList = ref<Document[]>([]);

  const columns = ref<DataTableColumns<Document>>([]);
  columns.value = [
    {
      title: 'id',
      key: 'id',
    },
    {
      title: '标题',
      key: 'title',
      render(row) {
        console.log('row', row);
        return h(
          'a',
          {
            class: 'text-blue-500',
            href: `siyuan://blocks/${row.id}`,
          },
          { default: () => document[row.id].content?.content },
        );
        // console.log('row', row);
        // return document[row.id].content || '';
      },
    },
    {
      title: '子文件数量',
      key: 'childLength',
    },
    {
      title: '后代文件数量',
      key: 'childrenLength',
    },
  ];

  function useDocument(id: string) {
    if (!document[id]) {
      document[id] = {
        id: id,
        childLength: 0,
        childrenLength: 0,
      };
    }

    return document[id];
  }

  function useDocumentList(document: {
    [key in string]: Document;
  }): Document[] {
    let documentList = Object.keys(document).map((item) => {
      return {
        id: item,
        childLength: document[item].childLength,
        childrenLength: document[item].childrenLength,
      };
    });
    documentList = documentList.sort((a, b) => {
      return b.childLength - a.childLength;
    });
    documentList.length = 10;

    return documentList;
  }

  watch(data, (data: ResultData[]) => {
    console.log('data', data);
    data.forEach((item: ResultData) => {
      useDocument(item.id).content = item;
      const path = item.path.slice(1, item.path.length - 3);
      const ids = path.split('/');
      ids.length = ids.length - 1;
      if (ids.length === 0) {
        return;
      }
      if (ids.length > 1) {
        for (let i = 0; i < ids.length - 2; i++) {
          useDocument(ids[i]).childrenLength += 1;
        }
      }
      useDocument(ids[ids.length - 1]).childLength += 1;
      useDocument(ids[ids.length - 1]).childrenLength += 1;
    });
    documentList.value = useDocumentList(document);
  });
</script>

<style lang="scss" scoped></style>

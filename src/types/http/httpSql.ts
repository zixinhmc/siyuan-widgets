import { BaseResult, Type, SubType } from '@/types/http/base';

export const path = '/api/query/sql';

export function useParameter() {
  return {
    stmt: '',
  };
}

export interface ResultData {
  alias: string;
  box: string;
  created: string;
  content: string;
  hash: string;
  hpath: string;
  ial: string;
  id: string;
  length: number;
  markdown: string;
  memo: string;
  name: string;
  parent_id: string;
  // 所属文档路径
  path: string;
  // 所属文档的id
  root_id: string;
  // 好像是排序
  sort: 0;
  subtype: SubType;
  type: Type;
  updated: string;
}

export interface Result extends BaseResult {
  data: ResultData[];
}

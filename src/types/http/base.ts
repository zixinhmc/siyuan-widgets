export interface BaseResult {
  // 0-正常, 非0-异常
  code: number;
  msg: string;
}

/**
 * `d` 文档块（仅在文档名上搜索，不会搜索文档包含内容块）
 * `h` 标题块（仅在标题名上搜索，不会搜索标题块下方内容块）
 * `l` 列表块（包含有序列表块、无序列表块和任务列表块）
 * `i` 列表项块
 * `c` 代码块
 * `m` 数学公式块
 * `t` 表格块
 * `b` 引述块
 * `s` 超级块
 * `p` 段落块
 */
export type Type = 'd' | 'h' | 'l' | 'i' | 'c' | 'm' | 't' | 'b' | 's' | 'p';

/**
 * `o`：有序
 * `u`：无序
 * `t`：任务
 */
export type SubType = 'o' | 'u' | 't';

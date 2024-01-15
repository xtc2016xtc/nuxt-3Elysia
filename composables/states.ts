/**
 * @file states.ts
 * @description 状态管理
 * @description 用于管理全局状态
 */
export const useCounter = () => useState<number>("counter", () => 0);
export const useColor = () => useState<string>("todos", () => "pink");
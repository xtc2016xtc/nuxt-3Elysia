/**
 * Middleware function for authentication.
 * 
 * @param to - The target route object.
 * @param from - The previous route object.
 */
/**
 * 默认导出define方法
 * defineNuxtRouteMiddleware方法接收一个函数作为参数
 * 该函数接收两个参数to和from
 * 该函数的返回值是一个Promise对象
 * 如果希望这个中间件无处不在1:02:04
 */
export default defineNuxtRouteMiddleware((to,from)=>{ 
  console.log(to);
  console.log(from);
 })
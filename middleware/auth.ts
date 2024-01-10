/**
 * Middleware function for authentication.
 * 
 * @param to - The target route object.
 * @param from - The previous route object.
 */
export default  defineNuxtRouteMiddleware((to, from)=>{
  console.log("hello from middleware auth");
})
/**
 * 默认导出define方法
 * defineNuxtRouteMiddleware方法接收一个函数作为参数
 * 该函数接收两个参数to和from
 * 该函数的返回值是一个Promise对象
 * 该Promise对象的resolve方法接收一个布尔值作为参数
 * 该布尔值表示是否允许跳转
 * 该布尔值为true时表示允许跳转
 * 该布尔值为false时表示不允许跳转
 */
/**
 * 假设想检查每一个我们申请的途径是否登录
 * 使用变量okay可以登录
 */
/**
 * 
 */

// export default defineNuxtRouteMiddleware((to,from)=>{ 
// const isLoggedIn = false;
// if(isLoggedIn){
//如果已经登录，允许跳转
//     return navigateTo(to.fullPath);
//   }
   // 如果没有登录，不允许跳转
//   return navigateTo('/login');

//  })
 /**
  *  目标是检查是否登录进行身份验证
  * 有一家商家，在这家商店，将有这样的变量，将先检查商店查看我们是否登录，后可以做出一些操作
  * 需要检测是否登录
  * 否则，将会跳转到登录页面
  */
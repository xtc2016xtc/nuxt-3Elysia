import data from './products.json';
/**
 * @description defineEventHandler is a function that returns a promise
 * @param {function} callback
 * @returns {Promise<any>}
 * @example defineEventHandler(async() => { return new Promise<any>((resolve) => { setTimeout(() => { resolve(data); }, 2000); }) });
 */
export default defineEventHandler(async() =>{
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })
});
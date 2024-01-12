import data from './products.json';
// asdghawg
export default defineEventHandler(async() =>{
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })
});

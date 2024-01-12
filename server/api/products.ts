import data from './products.json';

export default defineEventHandler(async() =>{
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })
});

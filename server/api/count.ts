let productCount = 0;

setInterval(() => {
  productCount++;
}, 1000);

export default defineEventHandler(() =>{
  return {
    productCount
  }
});
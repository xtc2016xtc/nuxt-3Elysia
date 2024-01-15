import footer  from './footer.json';
console.log(footer);

  export default defineEventHandler(async() =>{
      return new Promise<any>((resolve) => {
        setTimeout(() => {
          resolve(footer);
        }, 2000);
      })
    });
import footer  from '../json/footer.json';

  export default defineEventHandler(async() =>{
      return new Promise<any>((resolve) => {
        setTimeout(() => {
          resolve(footer);
        }, 2000);
      })
    });
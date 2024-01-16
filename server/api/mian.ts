import mian  from '../json/mian.json';

  export default defineEventHandler(async() =>{
      return new Promise<any>((resolve) => {
        setTimeout(() => {
          resolve(mian);
        }, 2000);
      })
    });
import nav from '../json/nav.json'


export default defineEventHandler(async()=>{
  return new Promise<any>((resolve)=>{
    setTimeout(()=>{
      resolve(nav);
    },2000);
  })
})

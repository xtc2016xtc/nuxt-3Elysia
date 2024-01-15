import nav from './nav.json'

console.log(nav);

export default defineEventHandler(async()=>{
  return new Promise<any>((resolve)=>{
    setTimeout(()=>{
      resolve(nav);
    },2000);
  })
})

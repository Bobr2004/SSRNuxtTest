export default defineEventHandler((event)=>{
   const name = getRouterParam(event, 'id')

   console.log(name)
   return {
      name
   }
})
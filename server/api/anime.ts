const animes = [
   { name: "OnePiece", id: 1 },
   { name: "Bleach", id: 2 }
];

export default defineEventHandler(async (event) => {
   const { method } = event.node.req;

   if (method === "GET") {
      const { name } = getQuery(event);

      return animes.find((an) => an.name === name);
   }

   if (method === "POST") {
      const anime = await readBody(event);
      console.log(anime)
   }
});

import { defineEventHandler, readBody } from "h3";

const animes = [
   { name: "OnePiece", id: 1 },
   { name: "Bleach", id: 2 }
];

export default defineEventHandler(async (event) => {
   const { method } = event.node.req;

   if (method === "GET") {
      const { name } = getQuery(event);

      console.log(name);

      if (name === "All") return animes;

      return animes.find((an) => an.name === name);
   }

   if (method === "POST") {
      const data = JSON.parse(await readBody(event));


      animes.push({ name: data.name, id: animes.length + 1 });

      console.log("oleg");
      console.log(data);
      return {res: "Oleg"};
   }
});

<script setup>
definePageMeta({
   layout: "anime"
});

const name = ref("");
const requestType = ref("GET");

const animeToCreate = ref("");

const res = ref();

const makeRequest = async () => {
   if (requestType === "POST") {
      const res = await useFetch("/api/anime",{
         method: "POST",

      })
   } else {
      const { data } = await useFetch("/api/anime", {
         method: requestType,
         params: {
            name
         }
      });
      res.value = data.value;
      console.log(data.value);
   }
};
</script>

<template>
   <section>
      <h1>Anime</h1>
      <p>yea</p>
      <input type="text" v-model="name" />
      <select v-model="requestType">
         <option value="GET">GET</option>
         <option value="POST">POST</option>
      </select>

      <div>/api/anime?name={{ name }}</div>

      <div v-if="requestType === 'POST'">
         <input type="text" v-model="animeToCreate" />
      </div>

      <button @click="makeRequest">make request</button>
      <div>
         <h3>result:</h3>
         <p>{{ res }}</p>
      </div>
   </section>
</template>

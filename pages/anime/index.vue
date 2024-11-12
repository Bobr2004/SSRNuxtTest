<script setup>
definePageMeta({
   layout: "anime"
});

const name = ref("");
const requestType = ref("POST");

const animeToCreate = ref("22");

const res = ref();

const makeRequest = async () => {
   if (requestType.value === "POST") {
      await fetch("/api/anime", {
         method: "POST",
         body: JSON.stringify({ name: "china" })
      }).then((res) => res.json());
   } else {
      console.log("oleg");
      const data = await fetch(`/api/anime?name=${name.value}`, {
         method: "GET"
      }).then((res) => res.json());

      console.log(data)

      res.value = data;
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

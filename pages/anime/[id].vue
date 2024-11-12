<script setup>
const { id } = useRoute().params;

definePageMeta({
   layout: "anime"
});

const { data } = await useFetch(`/api/anime/${id}`);

console.log(data.value);
</script>

<template>
   <p>Anime {{ id }}</p>
   <p>{{ data }}</p>
</template>

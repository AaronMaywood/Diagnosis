<script setup>
const route = useRoute();
const diagStore = useDiagnosisStore();
console.log('slug.vue に来たよ');
</script>

<template>
	<h1>[slug].vueに来たよ</h1>
	<h2>{{route.params.id}}</h2>
	<h2>{{route.params.slug}}</h2>
</template>


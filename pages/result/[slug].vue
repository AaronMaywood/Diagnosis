<script setup>
const route = useRoute();
const page_id = `/result/${route.params.slug}`;
const diagStore = useDiagnosisStore();
</script>

<template>
	<h1>
    あなたは<br>
    <span class="big">{{diagStore.result[page_id].job}}</span><br>
    に向いています！
    </h1>
    {{diagStore.result[page_id].text}}
	<NuxtLink to="/">トップに戻る</NuxtLink>
</template>

<style scoped>
.big {
	font-size: 5rem;
}
</style>


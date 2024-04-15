<script setup>
const route = useRoute();
const page_id = `/result/${route.params.slug}`;
const diagStore = useDiagnosisStore();

console.log(page_id);
console.log(diagStore.result);

console.log(diagStore.result[page_id])
</script>

<template>
	<div v-if="diagStore.result[page_id] !== undefined">
        <h1>
        あなたは<br>
        <span class="big">{{diagStore.result[page_id].job}}</span><br>
        に向いています！
        </h1>
        {{diagStore.result[page_id].text}}
    </div>
	<div v-else>
		<h2>該当のページはありません</h2>
    </div>
	<UButton>
        <ULink to="/">トップに戻る</ULink>
	</UButton>
</template>

<style scoped>
.big {
	font-size: 5rem;
}
</style>


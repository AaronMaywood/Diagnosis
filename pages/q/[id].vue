<script setup>
const route = useRoute();
const page_id = `/q/${route.params.id}` + (route.params.slug ? `/${route.params.slug}` : ``);
const diagStore = useDiagnosisStore();

const selected = ref('')
const nextPage = computed( () => {
	const next = diagStore.questions[page_id].options.find(e => selected.value === e.value);
	return next !== undefined ? next.goto : '';
})
const goNext = computed( () => {
	return selected.value !== '' ? true : null 
});
</script>

<template>
	<h2>{{diagStore.questions[page_id].name}}</h2>
	{{ selected }}
	<URadioGroup
		v-model="selected"
		legend="どれか一つを選んで下さい"
		:options="diagStore.questions[page_id].options"
	/>
	<ULink
		:to="nextPage"
		active-class="text-primary"
		:disabled="!goNext"
		inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
	>
		次へ.
	</ULink>
<NuxtLink to="/q/2/coding">次の質問</NuxtLink>

</template>


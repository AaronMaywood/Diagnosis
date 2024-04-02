<script setup>
const route = useRoute();
const diagStore = useDiagnosisStore();
console.log(diagStore.name);

console.log();
/*
const question = diagStore.question['q/1'];
const name = question.name;
const options = question.options;
*/

/*
const options = [{
  value: 'Coding',
  label: 'コーディング'
}, {
  value: 'Design',
  label: 'デザイン'
}, {
  value: 'Direction',
  label: 'ディレクション'
}, {
  value: 'Marketing',
  label: 'マーケティング'
}, {
  value: 'Writing',
  label: 'ライティング'
}]

const selected = ref('')
const goNext = computed( () => {
	console.log(selected.value);
	return selected.value !== '' ? true : null 
});
*/
</script>

<template>
	<h2>{{diagStore.questions["/q/1"].name}}</h2>
	hello{{route.params.id}}hello
				{{diagStore.name}}vue
	<!--
	<URadioGroup v-model="selected" legend="どれか一つを選んで下さい" :options="options" />
	-->
	<!--
	<ULink
		to="/q2"
		active-class="text-primary"
		:disabled="!goNext"
		inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
	>
		次へ.
	</ULink>
	<UButton :disabled="!goNext">test</UButton>
	-->
</template>


<script setup lang="ts">
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
</script>

<template>
	goNext: {{goNext}}
	<h2>アジャストアカデミーの訓練の中で得意なカリキュラムは？</h2>
	<URadioGroup v-model="selected" legend="どれか一つを選んで下さい" :options="options" />
	<ULink
		to="/q2"
		active-class="text-primary"
		:disabled="!goNext"
		inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
	>
		次へ.
	</ULink>
	<UButton :disabled="!goNext">test</UButton>
</template>

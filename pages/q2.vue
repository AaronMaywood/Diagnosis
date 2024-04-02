<script setup lang="ts">
const options = [{
  value: 'HTML/CSSを書くのが好き',
  label: 'HTML/CSSを書くのが好き'
}, {
  value: 'JavaScriptなどプログラミングを極めたい',
  label: 'JavaScriptなどプログラミングを極めたい'
}]

const selected = ref('')
</script>

<template>
	<h2>どちらのコーディングが好きですか？</h2>
	<URadioGroup v-model="selected" legend="どれか一つを選んで下さい" :options="options" />
	<ULink
		to="/result"
		active-class="text-primary"
		inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
	>
		次へ
	</ULink>
</template>

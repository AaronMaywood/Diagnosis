<script>
import {ref} from 'vue';

const value = ref(60);
</script>

<template>
	進捗：<progress max="100" :value>{{value}}%</progress>
</template>

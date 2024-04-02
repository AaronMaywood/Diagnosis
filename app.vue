<script setup>
const diagStore = useDiagnosisStore();

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]
</script>

<template>
	<div>
		<header class="mb-6">
			<h1 class="flex items-end">
				<img src="/images/_31e08299-aa5f-4684-9c9b-bc768d825587.jpeg" alt="" width="300" height="300">
				転職探しアプリ
				{{diagStore.name}}
			</h1>
		</header>
		<NuxtPage />
		<!--
		<UCard>
			<template #header>
				<UBreadcrumb :links="links" />
			</template>
			<Placeholder class="h-32" />
			<UDivider label="OR" />
			<Placeholder class="h-32" />
			<template #footer>
				<UButton>そのとおり</UButton>
				<UButton>どちらかと言えばそう</UButton>
				<UButton>どちらかと言えばそうでない</UButton>
				<UButton>そうでない</UButton>
			</template>
		</UCard>
		-->
		<!-- 

			これはページの読み込みが発生するが、
			<a href="/about">goto about</a>
			NuxtLinkだとページ内の書き換えのみで済む
		-->
		<!-- 各ページコンポーネントの内容 -->
		<!--
			<NuxtWelcome />
		-->

		<footer class="mt-6">
		  <ul class="flex justify-center">
			<li><a href="http://www.adjust.ne.jp/" target="_blank"><img src="/images/bn_img03.png" alt=""></a></li>
			<li><a href="https://strander.jp/" target="_blank"><img src="/images/bn_img09.png" alt=""></a></li>
			<li><a href="http://honnomura.com/" target="_blank"><img src="/images/bn_img10.png" alt=""></a></li>
		</ul>
		  <ul class="flex justify-center">
			<li><a href="http://adjustacademy.com/" target="_blank"><img src="/images/bn_img07.png" alt=""></a></li>
			<li><a href="http://socialcast.jp/" target="_blank"><img src="/images/bn_img04.png" alt=""></a></li>
			<li><a href="https://adjust.media/" target="_blank"><img src="/images/bn_img08.png" alt=""></a></li>
		  </ul>
		</footer>
	</div>
</template>

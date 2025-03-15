<script lang="ts">
	import { base } from '$app/paths';
	import { Sun, Moon } from '@lucide/svelte';
	import '../app.css';
	let { children } = $props();

	// 테마 모드 상태 관리 (Svelte 5 runes 사용)
	let darkMode = $state(false);

	// 테마 모드 토글 함수
	function toggleDarkMode() {
		darkMode = !darkMode;
		applyTheme();
	}

	// 다크모드 적용 함수
	function applyTheme() {
		if (typeof document !== 'undefined') {
			document.documentElement.classList[darkMode ? 'add' : 'remove']('dark');
		}
	}
</script>

<div class="flex min-h-screen flex-col">
	<!-- 헤더 영역: 블러 효과가 적용된 헤더 -->
	<header class="sticky left-0 top-0 z-10 w-full border-b shadow-md backdrop-blur-lg">
		<div class="container mx-auto flex max-w-4xl items-center justify-between p-4">
			<h1 class="h3">Github 블로그</h1>
			<div class="flex items-center gap-4">
				<nav class="hidden space-x-4 sm:block">
					<a href="{base}/" class="btn variant-ghost">홈</a>
					<a href="{base}/blog/" class="btn variant-ghost">블로그</a>
					<a href="{base}/" class="btn variant-ghost">소개</a>
				</nav>
				<!-- 다크모드 토글 버튼 -->
				<button
					class="btn btn-sm variant-ghost"
					onclick={toggleDarkMode}
					aria-label="다크모드 전환"
				>
					{#if darkMode}
						<Moon />
					{:else}
						<Sun />
					{/if}
				</button>
			</div>
		</div>
	</header>

	<!-- 메인 콘텐츠 영역 -->
	<main class="flex-1 overflow-auto">
		<div class="container mx-auto max-w-4xl p-4">
			<div class="card my-8 p-6">
				{@render children()}
			</div>
		</div>
	</main>

	<!-- 푸터 영역 -->
	<footer class="p-6">
		<div class="container mx-auto max-w-4xl">
			<div class="flex flex-col justify-between md:flex-row">
				<div class="mb-4 md:mb-0">
					<h3 class="h4 mb-2">Github 블로그</h3>
					<p>© 2025 All Rights Reserved</p>
				</div>
				<div>
					<h4 class="mb-2 font-bold">링크</h4>
					<ul>
						<li><a href="#" class="hover:underline">asd</a></li>
						<li><a href="#" class="hover:underline">asd</a></li>
						<li><a href="#" class="hover:underline">asd</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>

<script>
	import { page } from '$app/stores';

	// props 정의 ($props 사용)
	const { darkMode, toggleDarkMode } = $props();

	// 메뉴 상태 관리 ($state 사용)
	let menuOpen = $state(false);

	let menuItems = [
		{ name: 'Home', url: '/' },
		{ name: 'Archives', url: '/archives/' },
		{ name: 'Categories', url: '/categories/' },
		{ name: 'Tags', url: '/tags/' },
		{ name: 'Search', url: '/search/' }
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	// 현재 경로 계산 ($derived 사용)
	let currentPath = $derived($page.url.pathname);
</script>

<header
	class="bg-paper-bg/90 dark:bg-paper-bg-dark/90 sticky top-0 z-50 flex border-b border-gray-200 backdrop-blur-sm dark:border-gray-700"
>
	<div class="max-w-content mx-auto flex h-16 items-center justify-between px-4">
		<!-- 로고 -->
		<a href="/" class="text-xl font-extrabold text-gray-900 no-underline dark:text-white">
			My Blog
		</a>

		<!-- 데스크톱 메뉴 -->
		<nav class="hidden items-center space-x-6 md:flex">
			{#each menuItems as item}
				<a
					href={item.url}
					class={`nav-link ${currentPath === item.url ? 'font-bold text-indigo-600 dark:text-indigo-400' : ''}`}
					aria-current={currentPath === item.url ? 'page' : undefined}
				>
					{item.name}
				</a>
			{/each}

			<!-- 테마 토글 버튼 -->
			<button
				aria-label="Toggle Dark Mode"
				class="rounded-full bg-gray-200 p-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
				on:click={toggleDarkMode}
			>
				{#if darkMode}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
						/>
					</svg>
				{/if}
			</button>
		</nav>

		<!-- 모바일 메뉴 버튼 -->
		<button
			aria-label="Toggle Menu"
			class="rounded-lg bg-gray-100 p-2 text-gray-700 md:hidden dark:bg-gray-800 dark:text-gray-300"
			on:click={toggleMenu}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</div>

	<!-- 모바일 메뉴 -->
	{#if menuOpen}
		<nav
			class="bg-paper-bg dark:bg-paper-bg-dark space-y-3 border-t border-gray-200 px-4 py-2 md:hidden dark:border-gray-700"
		>
			{#each menuItems as item}
				<a
					href={item.url}
					class={`block py-2 ${currentPath === item.url ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}
					on:click={() => (menuOpen = false)}
					aria-current={currentPath === item.url ? 'page' : undefined}
				>
					{item.name}
				</a>
			{/each}

			<!-- 모바일 테마 토글 -->
			<div class="flex items-center py-2">
				<span class="text-gray-700 dark:text-gray-300">다크 모드</span>
				<button
					aria-label="Toggle Dark Mode"
					class="ml-auto rounded-full bg-gray-200 p-2 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
					on:click={toggleDarkMode}
				>
					{#if darkMode}☀️{:else}🌙{/if}
				</button>
			</div>
		</nav>
	{/if}
</header>

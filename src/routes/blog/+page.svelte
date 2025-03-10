<script lang="ts">
	import { base } from '$app/paths';

	let { data } = $props();
</script>

<h1>Blog</h1>

{#each data.posts as post}
	<a href="{base}/blog/{post.slug}">{post.title}</a>
	<p class="date">{post.date}</p>
	<p class="description">{post.description}</p>
{/each}

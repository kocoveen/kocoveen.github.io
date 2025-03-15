<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="prose dark:prose-invert">
	<h1>{data.metadata.title}</h1>
	<h2>{data.metadata.date}</h2>
	<data.content />
</div>

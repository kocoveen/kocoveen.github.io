<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>{data.metadata.title}</h1>
<h2>{data.metadata.date}</h2>

<data.content />

import type { Post } from '$lib/types';
import { base } from '$app/paths';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const response = await fetch(`${base}/api/posts`)
	const posts: Post[] = await response.json()
	return { posts };
};
export async function load() {
	const allPostFiles = import.meta.glob('./*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = (await resolver()) as { metadata?: Record<string, unknown> };
			const postPath = path.slice(2, -3); // Remove './' and '.md'

			return {
				meta: post.metadata || {},
				path: postPath
			};
		})
	);

	// Sort posts by date (newest first)
	const sortedPosts = allPosts.sort((a, b) => {
		const dateA = a.meta.date ? new Date(String(a.meta.date)).getTime() : 0;
		const dateB = b.meta.date ? new Date(String(b.meta.date)).getTime() : 0;
		return dateB - dateA;
	});

	return {
		posts: sortedPosts
	};
}

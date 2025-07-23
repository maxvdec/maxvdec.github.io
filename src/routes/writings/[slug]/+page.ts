export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, date, excerpt } = post.metadata || {};
		const content = post.default;

		return {
			content,
			title: title || 'Untitled',
			date: date || '',
			excerpt: excerpt || ''
		};
	} catch {
		throw new Error(`Post ${params.slug} not found`);
	}
}

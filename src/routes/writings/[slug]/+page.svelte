<script lang="ts">
	interface PageData {
		content: any;
		title: string;
		date: string;
	}

	export let data: PageData;
</script>

<div class="w-screen min-h-screen flex justify-center items-start pt-20">
	<div class="max-w-4xl mx-auto px-6">
		<nav class="mb-8">
			<a href="/writings" class="font-['Lora'] text-orange-500 hover:underline"
				>← Back to Writings</a
			>
		</nav>

		<article class="prose prose-lg max-w-none">
			<header class="mb-8">
				<h1 class="font-['Lora'] font-bold italic text-4xl mb-4">{data.title}</h1>
				{#if data.date}
					<p class="font-['Lora'] text-gray-600">
						{new Date(data.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>
				{/if}
			</header>

			<div class="font-['Lora'] leading-relaxed">
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</div>

<style>
	:global(.prose h1) {
		font-family: 'Lora', serif;
		font-weight: 700;
		font-size: 2.25rem; /* 36px */
		line-height: 2.5rem; /* 40px */
		margin-bottom: 1.5rem;
	}

	:global(.prose h2) {
		font-family: 'Lora', serif;
		font-weight: 600;
		font-size: 1.875rem; /* 30px */
		line-height: 2.25rem; /* 36px */
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.prose h3) {
		font-family: 'Lora', serif;
		font-weight: 600;
		font-size: 1.5rem; /* 24px */
		line-height: 2rem; /* 32px */
		margin-top: 1.75rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose h4) {
		font-family: 'Lora', serif;
		font-weight: 600;
		font-size: 1.25rem; /* 20px */
		line-height: 1.75rem; /* 28px */
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose h5) {
		font-family: 'Lora', serif;
		font-weight: 600;
		font-size: 1.125rem; /* 18px */
		line-height: 1.75rem; /* 28px */
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose h6) {
		font-family: 'Lora', serif;
		font-weight: 600;
		font-size: 1rem; /* 16px */
		line-height: 1.5rem; /* 24px */
		margin-top: 1rem;
		margin-bottom: 0.25rem;
	}

	:global(.prose p) {
		font-family: 'Lora', serif;
		font-weight: 400;
		line-height: 1.7;
		margin-bottom: 1.25rem;
		color: #374151;
	}

	:global(.prose code) {
		background-color: #f3f4f6;
		padding: 0.125rem 0.375rem;
		border-radius: 0.375rem;
		font-size: 0.875em;
		font-family: 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace;
		font-weight: 500;
		color: #dc2626;
	}

	:global(.prose pre) {
		background-color: #0d1117 !important;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
		border: 1px solid #30363d;
		padding: 0 !important; /* Remove default padding */
	}

	:global(.prose pre code) {
		background-color: transparent !important;
		padding: 1rem !important;
		color: inherit;
		font-size: 0.875rem;
		line-height: 1.5;
		font-family: 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace;
		font-weight: 400;
		display: block;
		white-space: pre;
		/* Fix indentation issues */
		text-indent: 0 !important;
		margin-left: 0 !important;
		padding-left: 1rem !important;
	}

	/* Shiki syntax highlighting overrides */
	:global(.shiki) {
		background-color: #0d1117 !important;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
	}

	:global(.shiki code) {
		background-color: transparent !important;
		padding: 0 !important;
		font-family: 'JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', monospace;
		font-weight: 400;
		display: block;
		white-space: pre;
		/* Fix indentation issues */
		text-indent: 0 !important;
		margin-left: 0 !important;
	}

	:global(.prose blockquote) {
		border-left: 4px solid #f97316;
		padding-left: 1rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: #6b7280;
		font-family: 'Lora', serif;
	}

	:global(.prose ul, .prose ol) {
		font-family: 'Lora', serif;
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	:global(.prose li) {
		margin: 0.5rem 0;
		font-family: 'Lora', serif;
		line-height: 1.6;
	}

	/* Convert dashes to dots in list items */
	:global(.prose ul) {
		list-style-type: none;
		padding-left: 1.25rem;
	}

	:global(.prose ul li) {
		position: relative;
	}

	:global(.prose ul li::before) {
		content: '•';
		color: #f97316;
		font-weight: bold;
		position: absolute;
		left: -1.25rem;
		top: 0;
	}

	/* Style ordered lists with orange numbers */
	:global(.prose ol) {
		list-style-type: none;
		padding-left: 2rem;
		counter-reset: list-counter;
	}

	:global(.prose ol li) {
		position: relative;
		counter-increment: list-counter;
		margin: 0.75rem 0;
	}

	:global(.prose ol li::before) {
		content: counter(list-counter) '.';
		color: #f97316;
		font-weight: 600;
		font-family: 'Lora', serif;
		font-weight: bold;
		position: absolute;
		left: -2rem;
		top: 0;
		width: 1.75rem;
		text-align: right;
	}

	:global(.prose strong) {
		font-family: 'Lora', serif;
		font-weight: 600;
	}

	:global(.prose em) {
		font-family: 'Lora', serif;
		font-style: italic;
	}

	:global(.prose hr) {
		margin-bottom: 10px;
	}
</style>

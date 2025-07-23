<script lang="ts">
	interface Post {
		meta: Record<string, unknown>;
		path: string;
	}

	interface PageData {
		posts: Post[];
	}

	export let data: PageData;
</script>

<div class="w-screen h-screen flex justify-center items-center flex-row">
	<div class="pr-10 border-r-1 mr-10 h-[30rem] flex items-center justify-center flex-col space-y-3">
		<a href="/" class="font-['Lora'] cursor-pointer">About</a>
		<span class="font-['Lora'] text-orange-500">Writings</span>
		<!-- <button class="font-['Lora'] cursor-pointer">Programming</button> -->
	</div>
	<div class="w-[40rem] text-left h-[35rem] overflow-y-auto">
		<h1 class="font-['Lora'] font-bold italic text-5xl pb-5">Writings</h1>
		<div class="space-y-4">
			{#each data.posts as post}
				<article class="border-b border-gray-200 pb-4 last:border-b-0">
					<a
						href="/writings/{post.path}"
						class="block hover:text-orange-500 transition-colors duration-200"
					>
						<h2 class="font-['Lora'] text-xl font-semibold mb-2">
							{post.meta.title || post.path}
						</h2>
						{#if post.meta.date}
							<p class="font-['Lora'] text-sm text-gray-600 mb-2">
								{new Date(String(post.meta.date)).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}
							</p>
						{/if}
						{#if post.meta.excerpt}
							<p class="font-['Lora'] text-gray-700 line-clamp-3">
								{post.meta.excerpt}
							</p>
						{/if}
					</a>
				</article>
			{/each}
			{#if data.posts.length === 0}
				<p class="font-['Lora'] text-gray-600">No posts yet. Stay tuned!</p>
			{/if}
		</div>
	</div>
</div>

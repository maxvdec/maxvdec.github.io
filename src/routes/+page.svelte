<script lang="ts">
	let textEnglish = `
I am Max Van den Eynde. I am a developer from Catalonia and I love programming.

I am currently working on a shell called Fusion that borrows elements from Functional Programming.

I love to learn how things work and because I wanted to make games, I discovered programming. I started learning C# and Unity, but quickly focused on the things that I loved most. Computers.

I am passionate about systems and UI. I have tackled a lot of different things: from Ray Tracing and a Game Engine all the way to a Kernel and Operating System, although I roughly can finish any project.

I play an instrument and I like languages. I know how to talk three languages, and I am constantly learning more to expand my horizons (since now I am studying Japanese), and I think that's related to the fact I know about 15 programming languages, from Zig and Swift to Haskell and OCaml, and I enjoy writing code in each of them.

`;

	let titleEnglish = 'Hello!';

	let page = $state('home');
</script>

{#if page == 'home'}
	<div class="w-screen h-screen flex justify-center items-center flex-row">
		<div
			class="pr-10 border-r-1 mr-10 h-[30rem] flex items-center justify-center flex-col space-y-3"
		>
			<button class="font-['Lora'] text-orange-500 cursor-pointer" onclick={() => (page = 'home')}
				>About</button
			>
			<a href="/writings" class="font-['Lora'] cursor-pointer">Writings</a>
			<!-- <button class="font-['Lora'] cursor-pointer" onclick={() => (page = 'programming')}
				>Programming</button
			> -->
		</div>
		<div class="w-[40rem] text-left h-[35rem]">
			<h1 class="font-['Lora'] font-bold italic text-5xl pb-5">{titleEnglish}</h1>
			<p class="font-['Lora'] whitespace-pre-wrap">{textEnglish}</p>
		</div>
	</div>
{:else if page == 'writings'}
	<div class="w-screen h-screen flex justify-center items-center flex-row">
		<div
			class="pr-10 border-r-1 mr-10 h-[30rem] flex items-center justify-center flex-col space-y-3"
		>
			<button class="font-['Lora'] cursor-pointer" onclick={() => (page = 'home')}>About</button>
			<a href="/writings" class="font-['Lora'] cursor-pointer">Writings</a>
			<!-- <button class="font-['Lora'] cursor-pointer" onclick={() => (page = 'programming')}
				>Programming</button
			> -->
		</div>
		<div class="w-[40rem] text-left h-[35rem]">
			<h1 class="font-['Lora'] font-bold italic text-5xl pb-5">{titleEnglish}</h1>
			<p class="font-['Lora'] whitespace-pre-wrap">{textEnglish}</p>
		</div>
	</div>
{:else}{/if}

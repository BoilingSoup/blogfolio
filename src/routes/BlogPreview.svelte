<script lang="ts">
  import { blogData } from "$lib/blogData";
  import CardLink from "./CardLink.svelte";

  const recentBlogPosts = (JSON.parse(JSON.stringify(blogData)) as typeof blogData).reverse();
</script>

<!-- <section -->
<!--   class="mx-8 hidden h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white dark:ease-in-out sm:flex sm:h-[calc(500px_-_theme(space.14))] lg:ml-0 lg:h-[calc(100vh_-_theme(space.14))] lg:w-5/12" -->
<!-- > -->
<!--   <div class="flex h-[90%] w-full flex-col rounded-xl bg-gray-300/70 transition ease-in-out dark:bg-slate-800/30"> -->
<!--     {#each recentBlogPosts as post, i} -->
<!--       <CardLink {i} date={post.date} icon={post.icon} title={post.title} href={`/blog/${post.slug}`} /> -->
<!--     {/each} -->
<!--     <p class="text-center text-2xl sm:hidden sm:text-5xl lg:text-5xl">Blog ... Coming soon first ...</p> -->
<!--   </div> -->
<!-- </section> -->

<a
  href="/blog"
  class="mx-8 flex h-[calc(180px_-_theme(space.14))] flex-col items-center justify-center transition ease-in-out dark:text-white xs:h-[calc(200px_-_theme(space.14))] lg:hidden"
>
  <div
    class="flex h-[90%] w-full flex-col items-center justify-center rounded-xl border-2 border-gray-400 text-black transition ease-in-out dark:border-slate-800 dark:text-white"
  >
    blog
  </div>
</a>

<script lang="ts">
  import { blogData } from "$lib/blogData";
  import BlogLink from "../BlogLink.svelte";

  const recentBlogPosts = (JSON.parse(JSON.stringify(blogData)) as typeof blogData).reverse();
</script>

<main class="mx-auto w-[90%] max-w-4xl transition ease-in-out dark:text-white dark:ease-in-out">
  <p class="my-5 text-center text-xl font-bold text-black transition ease-in-out dark:text-white">Showing 2 of 2 Blog Posts:</p>
  <div class="w-full transition ease-in-out">
    {#each recentBlogPosts as post, i}
      <BlogLink {i} classes={"rounded-xl my-5 border"} date={post.date} icon={post.icon} title={post.title} href={`/blog/${post.slug}`} />
    {/each}
  </div>
</main>

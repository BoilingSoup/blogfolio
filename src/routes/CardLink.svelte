<script lang="ts">
  export let href: string;
  export let icon: any;
  export let title: string;
  export let classes: string = "";
  /** blog posts have a date */
  export let date: string | undefined = undefined;
  /** projects have a blurb */
  export let blurb: string | undefined = undefined;
</script>

<a {href}>
  <div
    class={"flex h-[100px] w-full overflow-hidden overflow-ellipsis whitespace-normal border border-gray-900 bg-slate-50 text-black transition ease-in-out hover:bg-slate-400 dark:border-slate-500 dark:bg-slate-600/40 dark:text-white hover:dark:bg-slate-500 lg:h-[150px]" +
      " " +
      classes}
  >
    <div class="flex h-[100px] items-center justify-center lg:h-[150px] lg:w-[150px]">
      <img class="m-auto w-[50%] animate-fade-in-up rounded-xl" src={icon} width="80" height="80" alt="blog thumbnail" />
    </div>
    <div class="flex w-full animate-fade-in-up flex-col justify-center">
      {#if date}
        <p>{date}</p>
      {/if}
      <h2 class="text-md sm:text-xl md:text-2xl">{title}</h2>
      {#if blurb}
        <p>{blurb}</p>
      {/if}
    </div>
  </div>
</a>

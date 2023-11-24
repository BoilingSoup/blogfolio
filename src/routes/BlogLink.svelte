<script lang="ts">
  export let i: number;
  export let href: string;
  export let icon: any;
  export let date: string;
  export let title: string;
  export let classes: string = "";

  let topRadius = "";
  let topBorder = "";

  $: if (i === 0) {
    topRadius = " rounded-t-xl";
    topBorder = " border-t";
  }
</script>

<a {href}>
  <div
    class={"flex h-[150px] w-full overflow-hidden overflow-ellipsis whitespace-normal border-b border-l border-r border-gray-400 bg-slate-50 text-black transition ease-in-out hover:bg-slate-400 dark:border-slate-500 dark:bg-slate-600/40 dark:text-white hover:dark:bg-slate-500" +
      topRadius +
      topBorder +
      " " +
      classes}
  >
    <div class="flex h-[150px] w-[150px] items-center justify-center">
      <img class="m-auto w-[50%] animate-fade-in-up" src={icon} width="80" height="80" alt="blog thumbnail" />
    </div>
    <div class="flex w-full animate-fade-in-up flex-col justify-center">
      <p>{date}</p>
      <h2 class="text-md sm:text-xl md:text-2xl">{title}</h2>
    </div>
  </div>
</a>

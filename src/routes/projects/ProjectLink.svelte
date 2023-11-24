<script lang="ts">
  export let i: number;
  export let icon: any;
  export let title: string;
  // export let classes: string = "";

  let topRadius = "";
  let topBorder = "";

  $: if (i === 0) {
    topRadius = " rounded-t-xl";
    topBorder = " border-t";
  }
</script>

<input id="radio-{title}" checked={i === 0} name={"projects"} type="radio" value={title} />
<label
  class={"mx-auto my-5 flex h-9 w-1/2 items-center justify-center overflow-hidden overflow-ellipsis whitespace-normal rounded-xl border border-b border-l border-r border-gray-400 bg-slate-50 text-black transition ease-in-out hover:bg-slate-400 dark:border-slate-500 dark:bg-slate-600/40 dark:text-white hover:dark:bg-slate-500" +
    topRadius +
    topBorder}
  for="radio-{title}"
>
  {title}
</label>

<!-- <div class="flex w-full animate-fade-in-up flex-col justify-center"> -->
<!--   <p>{date}</p> -->
<!--   <h2 class="text-md sm:text-xl md:text-2xl">{title}</h2> -->
<!-- </div> -->

<style>
  input {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: rgba(148 163 184 / 1); /* same as slate-400 */
  }

  html[class~="dark"] input[type="radio"]:checked + label {
    background: rgba(100 116 139 / 1); /* same as slate-500 */
  }
</style>

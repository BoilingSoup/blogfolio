<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import "./styles.css";
  import { getProjectIndex } from "$lib/projectData";
  import { selectedProjectStore } from "$lib";

  export let i: number;
  export let title: string;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("change", {
      index: i
    });
  }

  let ref: HTMLInputElement;

  function handleEnter(e: KeyboardEvent) {
    if (e.key !== "Enter") {
      return;
    }

    ref.checked = true;

    dispatch("change", {
      index: i
    });
  }
</script>

<input
  bind:this={ref}
  class="radio-input hidden"
  id="radio-{title}"
  checked={i === getProjectIndex($selectedProjectStore.id)}
  name={"projects"}
  type="radio"
  value={title}
/>
<label
  class={"flex h-[96px] w-full cursor-pointer items-center justify-center overflow-hidden overflow-ellipsis whitespace-normal rounded-xl border border-b border-l border-r border-gray-400 bg-slate-50 text-black transition ease-in-out hover:bg-lime-400 dark:border-slate-500 dark:bg-slate-600/40 dark:text-white hover:dark:bg-slate-500"}
  for="radio-{title}"
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleEnter}
>
  {title}
</label>

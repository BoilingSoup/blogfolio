<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import "../app.css";
  import Header from "./Header.svelte";
  import { darkModeStore } from "$lib";
  import Frog from "$lib/assets/frog.svg";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  onMount(() => {
    if (!$darkModeStore) {
      document.getElementById("dark-bg")!.style.opacity = "0";
      document.getElementById("header-dark-bg")!.style.opacity = "0";
    }
  });
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href={Frog} />
</svelte:head>

<Header />
<slot />

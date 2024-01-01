<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import "../app.css";
  import Header from "./Header.svelte";
  import { darkModeStore, mobileMenuStore } from "$lib";
  import MobileMenu from "./MobileMenu.svelte";

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

  onMount(() => {
    const handleQueryChange = function (mediaQuery: MediaQueryListEvent | MediaQueryList) {
      if (mediaQuery.matches && $mobileMenuStore) {
        mobileMenuStore.toggle();
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    handleQueryChange(mediaQuery);

    mediaQuery.addEventListener("change", handleQueryChange);

    return () => mediaQuery.removeEventListener("change", handleQueryChange);
  });
</script>

<Header />
{#if $mobileMenuStore}
  <MobileMenu />
{:else}
  <slot />
{/if}

<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import "../app.css";
  import Header from "./Header.svelte";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Header />
<slot />

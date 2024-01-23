<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let pathName: string;
  export let text: string;

  let activeRouteStyle = "";

  $: if ($page.url.pathname.split("/").length >= 2) {
    const subPath = $page.url.pathname.split("/")[1];
    if (subPath.toLowerCase() === pathName.toLowerCase() || (subPath === "" && pathName === "/")) {
      activeRouteStyle = " before:h-[4px] before:!opacity-100";
    } else {
      activeRouteStyle = "";
    }
  }
</script>

<a
  {href}
  class={"relative mx-10 flex h-full flex-wrap place-content-center px-0 text-lg font-bold before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:bg-gray-900 before:opacity-75 before:content-[''] hover:before:h-[4px] hover:before:opacity-100 focus:before:h-[4px] focus:before:opacity-100 before:dark:bg-slate-50 md:text-xl lg:text-2xl" +
    activeRouteStyle}
>
  {text}
</a>

<style>
  a,
  a::before {
    transition:
      /*
       * dark mode transition, 550ms
       */
      color 550ms ease-in-out,
      background 550ms ease-in-out,
      /*
       * hover underline effect, 200ms
       */ height 200ms ease-in-out;
  }
</style>

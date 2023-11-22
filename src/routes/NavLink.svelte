<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let text: string;

  const hoverStyle =
    " before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:bg-gray-900 before:dark:bg-slate-50 before:opacity-75 before:transition-all before:content-[''] hover:before:h-[4px] focus:before:h-[4px] hover:before:opacity-100 focus:before:opacity-100";

  let activeRouteStyle = "";

  $: if ($page.url.pathname.split("/").length >= 2) {
    const subPage = $page.url.pathname.split("/")[1];
    if (subPage.toLowerCase() === text.toLowerCase()) {
      activeRouteStyle = " before:h-[4px] before:!opacity-100";
    } else {
      activeRouteStyle = "";
    }
  }
</script>

<a
  {href}
  class={"relative mx-5 flex h-full flex-wrap place-content-center px-0 text-lg font-bold md:text-xl lg:text-2xl xl:mx-10" +
    hoverStyle +
    activeRouteStyle}
>
  {text}
</a>

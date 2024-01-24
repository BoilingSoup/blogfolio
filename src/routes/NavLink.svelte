<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;
  export let pathName: string | undefined = undefined;
  export let text: string;
  export let margin: string = "mx-10";
  export let textColor: string = "";
  export let hoverColor: string = "before:bg-gray-900 before:dark:bg-slate-50";
  export let target: "_blank" | "_self" | "_parent" | "_top" | "framename" | undefined = undefined;

  let marginStyles: string, textColorStyles: string, underlineColor: string, activeRouteStyle: string;

  $: if (pathName !== undefined && $page.url.pathname.split("/").length >= 2) {
    const currSubPath = $page.url.pathname.split("/")[1];

    const isActiveRoute = currSubPath.toLowerCase() === pathName.toLowerCase();

    if (isActiveRoute) {
      activeRouteStyle = " before:h-[4px] before:!opacity-100";
    } else {
      activeRouteStyle = "";
    }
  }

  $: {
    marginStyles = ` ${margin}`;
    textColorStyles = ` ${textColor}`;
    underlineColor = ` ${hoverColor}`;
  }
</script>

<a
  {href}
  class={"relative flex h-full flex-wrap place-content-center px-0 text-lg font-bold before:absolute before:bottom-0 before:h-[0px] before:w-[100%] before:rounded before:opacity-75 before:content-[''] hover:before:h-[4px] hover:before:opacity-100 focus:before:h-[4px] focus:before:opacity-100 lg:text-2xl" +
    activeRouteStyle +
    marginStyles +
    textColorStyles +
    underlineColor}
  {target}
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

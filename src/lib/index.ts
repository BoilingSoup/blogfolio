import { get, writable } from "svelte/store";
import { setDarkScrollBar } from "./scrollbar/scrollbar";
import { browser } from "$app/environment";
import { projectData, type ProjectData } from "./projectData";

function createDarkModeStore() {
  const _darkModeStore = writable(true, function start(set) {
    if (browser && !document.documentElement.classList.contains("dark")) {
      set(false);
    }
  });

  return {
    subscribe: _darkModeStore.subscribe,
    toggle: () => {
      if (browser) {
        // The if(browser) here is redundant but I'm being explicit because not specifying led to a lot of build breakage & pain.

        if (get(_darkModeStore)) {
          _darkModeStore.set(false);
          localStorage.setItem("dark", "false");
          document.documentElement.classList.remove("dark");
          (document.querySelector('meta[name="theme-color"]') as any).content = "#e2e8f0";
          document.getElementById("dark-bg")!.style.opacity = "0";
          document.getElementById("header-dark-bg")!.style.opacity = "0";
          setDarkScrollBar(false);
        } else {
          _darkModeStore.set(true);
          localStorage.setItem("dark", "true");
          document.documentElement.classList.add("dark");
          (document.querySelector('meta[name="theme-color"]') as any).content = "#0f172a";
          document.getElementById("dark-bg")!.style.opacity = "1";
          document.getElementById("header-dark-bg")!.style.opacity = "1";
          setDarkScrollBar(true);
        }
      }
    }
  };
}

export const darkModeStore = createDarkModeStore();

function createSelectedProjectStore() {
  const _selectedProjectStore = writable<ProjectData[number]>(projectData[0]);

  return {
    subscribe: _selectedProjectStore.subscribe,
    set: _selectedProjectStore.set
  };
}

export const selectedProjectStore = createSelectedProjectStore();

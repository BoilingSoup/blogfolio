import { useContext, createContext, useState, useLayoutEffect } from "react";

const DarkModeContext = createContext<{ isDarkMode: boolean; toggleDarkMode: () => void } | undefined>(undefined);

export const useDarkModeProvider = () => {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("Context must be used within a provider.");
  }

  return context;
};

type Props = {
  children: JSX.Element;
};

export const DarkModeProvider = (props: Props) => {
  const [isDarkMode, _setIsDarkMode] = useState(true);

  function setIsDarkMode(val: boolean) {
    if (val) {
      _setIsDarkMode(true);
      localStorage.setItem("dark", "true");
      document.documentElement.classList.add("dark");
      (document.querySelector('meta[name="theme-color"]') as any).content = "#0f172a";
      setDarkScrollBar(true);
    } else {
      _setIsDarkMode(false);
      localStorage.setItem("dark", "false");
      document.documentElement.classList.remove("dark");
      (document.querySelector('meta[name="theme-color"]') as any).content = "#e2e8f0";
      setDarkScrollBar(false);
    }
  }

  useLayoutEffect(() => {
    let preference: string | null | boolean = localStorage.getItem("dark");

    if (preference === null || preference === undefined) {
      setIsDarkMode(true);
      return;
    }

    preference = preference.trim();

    if (preference === "true" || preference === "false") {
      preference = JSON.parse(preference) as boolean;
      setIsDarkMode(preference);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{props.children}</DarkModeContext.Provider>;
};

//
import {
  scrollBorderCssVar,
  scrollBorderDark,
  scrollBorderLight,
  scrollThumbBgCssVar,
  scrollThumbBgDark,
  scrollThumbBgLight,
  scrollTrackBgCssVar,
  scrollTrackBgDark,
  scrollTrackBgLight,
} from "@/data/constants";

type ScrollBarVar = typeof scrollBorderCssVar | typeof scrollThumbBgCssVar | typeof scrollTrackBgCssVar;

type BorderOptions = typeof scrollBorderDark | typeof scrollBorderLight;
type ThumbBgOptions = typeof scrollThumbBgDark | typeof scrollThumbBgLight;
type TrackBgOptions = typeof scrollTrackBgDark | typeof scrollTrackBgLight;

type ScrollBarValue = BorderOptions | ThumbBgOptions | TrackBgOptions;

type ScrollStyles = {
  border: BorderOptions;
  thumbBg: ThumbBgOptions;
  trackBg: TrackBgOptions;
};

function setScrollBarProperty(property: ScrollBarVar, value: ScrollBarValue) {
  document.documentElement.style.setProperty(property, value);
}

function applyStyles(styles: ScrollStyles) {
  setScrollBarProperty(scrollBorderCssVar, styles.border);
  setScrollBarProperty(scrollThumbBgCssVar, styles.thumbBg);
  setScrollBarProperty(scrollTrackBgCssVar, styles.trackBg);
}

function setDarkScrollBar(isDarkMode: boolean) {
  if (isDarkMode) {
    applyStyles({
      border: scrollBorderDark,
      thumbBg: scrollThumbBgDark,
      trackBg: scrollTrackBgDark,
    });
    return;
  }
  applyStyles({
    border: scrollBorderLight,
    thumbBg: scrollThumbBgLight,
    trackBg: scrollTrackBgLight,
  });
}

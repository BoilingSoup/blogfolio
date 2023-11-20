import { useEffect, useRef } from "react";

export const useHoverLogo = () => {
  const hoverAreaRef = useRef<HTMLAnchorElement>(null);
  const hoverEffectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hoverArea = hoverAreaRef.current;
    const hoverEffect = hoverEffectRef.current;

    if (hoverArea === null || hoverEffect === null) {
      return;
    }

    const addHoverEffect = () => {
      hoverEffect.classList.add("hover-effect");
    };

    const removeHoverEffect = () => {
      hoverEffect.classList.remove("hover-effect");
    };

    hoverArea.addEventListener("mouseover", addHoverEffect);
    hoverArea.addEventListener("mouseleave", removeHoverEffect);

    return () => {
      hoverArea.removeEventListener("mouseover", addHoverEffect);
      hoverArea.removeEventListener("mouseover", removeHoverEffect);
    };
  }, []);

  return { hoverAreaRef, hoverEffectRef };
};

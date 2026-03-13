"use client";

import { useEffect, useCallback } from "react";
import { playNavClick, playItemClick, playToggleClick } from "@/lib/sounds";

export default function SoundProvider({ children }: { children: React.ReactNode }) {
  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const el = target.closest("[data-sound]") as HTMLElement | null;
    if (!el) return;

    const sound = el.dataset.sound;
    if (sound === "nav") playNavClick();
    else if (sound === "toggle") playToggleClick();
    else if (sound === "item") playItemClick();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return <>{children}</>;
}

"use client";
import { useEffect } from "react";

interface KeyBinding {
  keys: string[];
  callback: () => void;
}

export function useKeyBindings(bindings: KeyBinding[]) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      bindings.forEach(({ keys, callback }) => {
        const normalizedKeys = keys.map((key) => key.toLowerCase());
        const pressedKeys = new Set<string>();

        if (event.ctrlKey) pressedKeys.add("control");
        if (event.shiftKey) pressedKeys.add("shift");
        if (event.altKey) pressedKeys.add("alt");
        if (event.metaKey) pressedKeys.add("meta");

        if (event.key) pressedKeys.add(event.key.toLowerCase());

        const isExactMatch =
          pressedKeys.size === normalizedKeys.length &&
          normalizedKeys.every((key) => pressedKeys.has(key));

        if (isExactMatch) {
          event.preventDefault();
          callback(); //
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [bindings]);
}

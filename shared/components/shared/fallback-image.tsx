"use client";

import React from "react";

type Props = Omit<React.ComponentProps<"img">, "src"> & { src: string };

const CDN_FAILED_KEY = "image-cdn-failed";
const CDN_TIMEOUT_MS = 1500;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const isCdnFailed = () => sessionStorage.getItem(CDN_FAILED_KEY) === "1";

/** Switches every image in this tab to local copies for the rest of the session. */
const markCdnFailed = () => {
  sessionStorage.setItem(CDN_FAILED_KEY, "1");
  listeners.forEach((listener) => listener());
};

/** Maps a CDN image URL to its local copy in public/assets/fallback. */
const getFallbackSrc = (src: string) => {
  const fileName = new URL(src, "http://local").pathname.split("/").pop() ?? "";
  return `/assets/fallback/${fileName.includes(".") ? fileName : `${fileName}.png`}`;
};

/** Renders a CDN image and uses its local copy once the CDN fails or is too slow. */
export const FallbackImage: React.FC<Props> = ({ src, alt = "", ...props }) => {
  const useLocalCopy = React.useSyncExternalStore(subscribe, isCdnFailed, () => false);
  const imageRef = React.useRef<HTMLImageElement>(null);

  // A server-rendered image can fail before hydration, when onError is not attached yet.
  React.useEffect(() => {
    const image = imageRef.current;
    if (!image || useLocalCopy) return;

    if (image.complete && image.naturalWidth === 0) {
      markCdnFailed();
      return;
    }

    const timer = setTimeout(() => {
      if (!image.complete) markCdnFailed();
    }, CDN_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [useLocalCopy, src]);

  return (
    <img
      {...props}
      ref={imageRef}
      alt={alt}
      src={useLocalCopy ? getFallbackSrc(src) : src}
      onError={markCdnFailed}
    />
  );
};

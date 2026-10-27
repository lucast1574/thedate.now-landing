import type { CSSProperties } from "react";
const paths = {
  lock: "M6 11h12v10H6z M8 11V7a4 4 0 0 1 8 0v4",
  search: "M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM16 16l5 5",
  frame: "M1 1h22v22H1V1Zm1 1h20v20H2V2Z",
  arch: "M2 23V11a10 10 0 0 1 20 0v12H2Z",
  leaf: "M5 23C8 17 15 11 20 2M9 18C2 17 2 12 3 10c5 0 8 2 6 8Zm4-6C7 10 8 6 9 4c4 1 6 4 4 8Zm1 0c0-6 5-6 8-6 0 4-3 7-8 6Zm-6 9c1-6 7-6 10-5-1 4-5 6-10 5Z",
  sunburst:
    "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2",
  ticket: "M4 4h16v5a3 3 0 0 0 0 6v5H4v-5a3 3 0 0 0 0-6V4Zm9 1v3m0 3v2m0 3v3",
  close: "m6 6 12 12M6 18 18 6",
  refresh:
    "M20 7v5h-5M4 17v-5h5M6 7a7 7 0 0 1 12-1l2 3M4 15l2 3a7 7 0 0 0 12-1",
  pause: "M8 5v14M16 5v14",
  play: "m7 4 14 8-14 8V4Z",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l3 2",
  chevron: "m6 9 6 6 6-6",
  plus: "M12 5v14M5 12h14",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  sparkle: "m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z",
  star: "m12 3 2.8 5.7 6.3.9-4.5 4.4 1 6.2-5.6-3-5.6 3 1-6.2L3 9.6l6.2-.9L12 3Z",
  flower:
    "M12 8C5-2 1 9 8 12c-10 7 1 11 4 4 7 10 11-1 4-4 10-7-1-11-4-4Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
  ring: "M9 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm6 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-5-4 2-2 2 2-2 3-2-3Z",
  music:
    "M9 18V5l12-2v13M9 18a3 3 0 1 1-3-3c1.7 0 3 1.3 3 3Zm12-2a3 3 0 1 1-3-3c1.7 0 3 1.3 3 3Z",
  calendar: "M4 5h16v16H4V5Zm0 5h16M8 3v4m8-4v4M8 14h2m4 0h2m-8 3h2",
  cake: "M4 13h16v8H4v-8Zm0 3c2 3 4-3 6 0s4-3 6 0 4 0 4 0M8 13V9m4 4V9m4 4V9M8 6V4m4 2V3m4 3V4",
  users:
    "M9 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-6 16v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6m1 4a5 5 0 0 1 4 4v2",
  check: "m5 12 4 4L19 6",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  external: "M7 17 17 7M7 7h10v10",
  down: "M12 4v16m-6-6 6 6 6-6",
  layout: "M3 3h18v18H3V3Zm0 6h18M9 9v12",
  image: "M3 3h18v18H3V3Zm0 14 6-6 4 4 3-3 5 5M16 7h.01",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  save: "M3 3h15l3 3v15H3V3Zm4 0v6h10V3M7 21v-8h10v8",
  undo: "m9 3-6 6 6 6M3 9h11a6 6 0 0 1 0 12",
  redo: "m15 3 6 6-6 6M21 9H10a6 6 0 0 0 0 12",
  table: "M4 5h16v10H4V5Zm2 10v6m12-6v6M4 9h16",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  circle: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
};
export type IconName = keyof typeof paths;
export default function Icon({
  name,
  className = "",
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  if (name === "none") return null;
  return (
    <svg
      className={`ui-icon ${className}`}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={
        name === "frame" || name === "arch"
          ? 0.18
          : name === "leaf" || name === "sunburst"
            ? 0.55
            : 1.6
      }
      preserveAspectRatio={
        name === "frame" || name === "arch" ? "none" : undefined
      }
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name.startsWith("lucide:") && /^[a-z0-9-]+$/.test(name.slice(7)) ? (
        <use href={`/symbols/lucide-1.61.svg#${name.slice(7)}`} />
      ) : (
        <path d={paths[name as IconName] || paths.sparkle} />
      )}
    </svg>
  );
}

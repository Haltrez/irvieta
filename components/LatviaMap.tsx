"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Stylised map of Latvia with delivery routes fanning out from Riga.
 *
 * The outline and the city coordinates are PROJECTED FROM REAL LON/LAT — an
 * equirectangular projection with a cos(latitude) correction so the country
 * isn't stretched sideways — then smoothed from a polygon into beziers. Do not
 * hand-tweak the numbers below; they are generated. Adjust the source
 * coordinates and regenerate if the shape ever needs to change.
 *
 * It is decoration, not a navigational map, so the whole SVG is aria-hidden and
 * the surrounding section carries the meaning in text.
 */

const VIEW_BOX = "0 0 900 579";

const BORDER =
  "M 216.0 100.1 C 207.7 98.2 183.9 108.5 171.2 114.8 C 158.4 121.1 142.0 133.3 131.0 142.1 C 120.0 150.9 106.2 161.1 97.6 173.7 C 89.0 186.3 79.9 210.1 73.5 226.2 C 67.1 242.3 60.3 266.7 55.1 280.9 C 49.9 295.1 42.1 308.9 39.0 320.9 C 35.9 332.9 34.9 346.6 34.4 360.8 C 33.9 375.0 35.2 400.4 35.5 415.5 C 35.8 430.6 30.1 460.1 36.7 461.7 C 43.3 463.3 67.7 436.1 79.2 426.0 C 90.8 415.9 98.2 400.7 113.7 394.4 C 129.2 388.1 160.3 383.3 182.7 383.9 C 205.1 384.5 240.8 396.4 263.2 398.6 C 285.6 400.8 312.4 396.1 332.2 398.6 C 352.0 401.1 373.8 413.9 395.4 415.5 C 417.0 417.1 452.6 406.1 475.9 409.2 C 499.2 412.3 530.8 427.1 550.6 436.5 C 570.4 445.9 591.7 460.5 608.1 472.2 C 624.5 483.9 649.1 504.5 659.8 514.3 C 670.5 524.1 672.5 537.4 679.4 537.4 C 686.3 537.4 697.5 522.2 705.8 514.3 C 714.1 506.4 724.1 495.8 734.5 484.8 C 744.9 473.8 763.6 454.3 774.8 440.7 C 786.0 427.1 797.2 404.5 809.3 394.4 C 821.4 384.3 846.9 381.9 855.3 373.4 C 863.7 364.9 868.5 351.9 865.6 337.7 C 862.7 323.5 842.4 298.7 835.7 278.8 C 829.0 258.9 829.1 224.7 820.8 205.2 C 812.5 185.7 794.3 158.0 780.5 148.5 C 766.7 139.0 746.0 144.6 728.8 142.1 C 711.6 139.6 683.7 137.0 665.6 131.6 C 647.5 126.2 628.8 115.9 608.1 106.4 C 587.4 97.0 548.3 75.2 527.6 68.6 C 506.9 62.0 486.5 61.4 470.1 62.3 C 453.7 63.2 425.6 65.1 418.4 74.9 C 411.2 84.7 422.1 112.6 421.8 127.4 C 421.5 142.2 419.2 159.8 416.1 173.7 C 413.0 187.6 405.8 208.5 401.1 219.9 C 396.4 231.3 392.8 243.1 385.0 249.4 C 377.2 255.7 362.5 260.7 349.4 262.0 C 336.3 263.3 309.8 262.2 297.7 257.8 C 285.6 253.4 274.6 241.3 268.9 232.5 C 263.2 223.7 263.7 209.6 259.7 198.9 C 255.7 188.2 247.5 171.8 242.5 161.1 C 237.5 150.4 230.4 136.6 226.4 127.4 C 222.4 118.2 224.3 102.0 216.0 100.1 Z";

type City = { name: string; x: number; y: number; kind: "hub" | "main" | "dot" };

const CITIES: City[] = [
  { name: "Rīga", x: 390.8, y: 268.3, kind: "hub" },
  { name: "Ventspils", x: 97.6, y: 175.8, kind: "main" },
  { name: "Liepāja", x: 34.4, y: 360.8, kind: "main" },
  { name: "Daugavpils", x: 670.2, y: 495.4, kind: "main" },
  { name: "Rēzekne", x: 761.0, y: 360.8, kind: "main" },
  { name: "Valmiera", x: 541.4, y: 144.2, kind: "main" },
  { name: "Ludza", x: 805.8, y: 352.4, kind: "main" },
  { name: "Jelgava", x: 344.8, y: 331.4, kind: "dot" },
  { name: "Cēsis", x: 524.2, y: 192.6, kind: "dot" },
  { name: "Kuldīga", x: 144.8, y: 264.1, kind: "dot" },
  { name: "Talsi", x: 216.0, y: 207.3, kind: "dot" },
  { name: "Gulbene", x: 694.3, y: 219.9, kind: "dot" },
  { name: "Bauska", x: 400.0, y: 381.8, kind: "dot" },
  { name: "Sigulda", x: 477.0, y: 226.2, kind: "dot" },
];

/**
 * Label nudges, kept apart from the generated coordinates above so the
 * projection can be regenerated without losing them. Ludza and Rezekne sit
 * ~45 units apart on the east edge and their labels collide at default
 * placement; Liepaja and Ventspils would otherwise run off the west edge.
 */
const LABELS: Record<string, { dx?: number; dy?: number; anchor?: "start" | "end" }> = {
  Ludza: { dx: 10, dy: -14 },
  Rēzekne: { dx: -12, dy: 20, anchor: "end" },
  Liepāja: { dx: 12, dy: 6 },
  Daugavpils: { dx: -12, dy: 22, anchor: "end" },
  Ventspils: { dx: 12, dy: -6 },
};

/** Routes out of Riga, bowed so they read as journeys rather than spokes. */
const ROUTES = [
  "M 390.8 268.3 Q 259.9 172.2 97.6 175.8",
  "M 390.8 268.3 Q 196.9 254.0 34.4 360.8",
  "M 390.8 268.3 Q 491.9 429.3 670.2 495.4",
  "M 390.8 268.3 Q 560.2 377.5 761.0 360.8",
  "M 390.8 268.3 Q 487.2 231.9 541.4 144.2",
  "M 390.8 268.3 Q 584.0 380.9 805.8 352.4",
];

export function LatviaMap({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox={VIEW_BOX}
      className={className}
      role="presentation"
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="lv-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3E8564" stopOpacity="1" />
          <stop offset="100%" stopColor="#24614A" stopOpacity="1" />
        </linearGradient>
        <filter id="lv-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Country */}
      <motion.path
        d={BORDER}
        fill="url(#lv-fill)"
        stroke="#95D5B2"
        strokeWidth={2.75}
        strokeLinejoin="round"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Routes: drawn on once in view, then a slow dash travels along them. */}
      <g fill="none" stroke="#95D5B2" strokeLinecap="round">
        {ROUTES.map((d, i) => (
          <g key={d}>
            <motion.path
              d={d}
              strokeWidth={1.75}
              strokeOpacity={0.5}
              initial={reduceMotion ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 + i * 0.12 }}
            />
            {!reduceMotion && (
              <path
                d={d}
                strokeWidth={2.25}
                strokeDasharray="6 30"
                className="animate-dash-travel"
                style={{ animationDelay: `${i * 1.6}s` }}
                strokeOpacity={0.95}
              />
            )}
          </g>
        ))}
      </g>

      {/* Cities */}
      {CITIES.map((city, i) => {
        const isHub = city.kind === "hub";
        const r = isHub ? 7 : city.kind === "main" ? 4.5 : 2.75;
        return (
          <motion.g
            key={city.name}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: 0.5 + i * 0.05 }}
            style={{ transformOrigin: `${city.x}px ${city.y}px` }}
          >
            {isHub && !reduceMotion && (
              <circle
                cx={city.x}
                cy={city.y}
                r={r}
                fill="#95D5B2"
                className="animate-ring-out"
                style={{ transformOrigin: `${city.x}px ${city.y}px` }}
              />
            )}
            <circle
              cx={city.x}
              cy={city.y}
              r={r}
              fill={isHub ? "#F5F5F0" : "#95D5B2"}
              filter={isHub ? "url(#lv-glow)" : undefined}
            />
            {city.kind !== "dot" && (
              <text
                x={city.x + (LABELS[city.name]?.dx ?? r + 9)}
                y={city.y + (LABELS[city.name]?.dy ?? 7)}
                textAnchor={LABELS[city.name]?.anchor ?? "start"}
                fill={isHub ? "#F5F5F0" : "#CFE3D7"}
                fontWeight={isHub ? 700 : 500}
                /*
                 * Font size is in viewBox user units, so it shrinks with the
                 * map. The labels are set larger below `md`, where the map is
                 * only ~335px wide, or they render at ~10px on a phone.
                 */
                className={
                  isHub
                    ? "select-none [font-size:42px] md:[font-size:28px]"
                    : "select-none [font-size:34px] md:[font-size:23px]"
                }
              >
                {city.name}
              </text>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}

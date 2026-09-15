import type { ShapeKey } from "@/lib/catalog";

const SHAPE_PATHS: Record<ShapeKey, string> = {
  Round: "M50 10 C67 10, 90 33, 90 50 C90 67, 67 90, 50 90 C33 90, 10 67, 10 50 C10 33, 33 10, 50 10 Z",
  Princess: "M50 8 L87 42 L70 92 L30 92 L13 42 Z",
  Cushion: "M50 10 L81 22 L90 50 L81 78 L50 90 L19 78 L10 50 L19 22 Z",
  Emerald: "M15 32 L50 10 L85 32 L85 68 L50 90 L15 68 Z",
  Oval: "M28 10 C14 10, 10 24, 10 50 C10 76, 22 90, 50 90 C78 90, 90 76, 90 50 C90 24, 86 10, 72 10 Z",
  Pear: "M50 10 C69 10, 82 22, 82 40 C82 56, 66 64, 58 90 L42 90 C34 64, 18 56, 18 40 C18 22, 31 10, 50 10 Z",
  Marquise: "M50 10 L80 26 L90 50 L80 74 L50 90 L20 74 L10 50 L20 26 Z",
  Radiant: "M15 30 L50 10 L85 30 L85 70 L50 90 L15 70 Z",
  Asscher: "M50 10 L85 35 L85 65 L50 90 L15 65 L15 35 Z",
  Heart: "M50 88 C42 84, 4 68, 8 40 C12 17, 33 12, 45 26 C49 19, 60 8, 71 12 C89 18, 92 42, 86 58 C80 74, 58 85, 50 88 Z",
  Trillion: "M50 8 L82 26 L90 50 L82 74 L50 92 L18 74 L10 50 L18 26 Z",
};

export function ShapeGlyph({
  shape,
  active = false,
  className = "",
}: {
  shape: ShapeKey;
  active?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={shape}
      className={className}
    >
      <path
        d={SHAPE_PATHS[shape]}
        fill={active ? "rgba(220,234,240,0.85)" : "transparent"}
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

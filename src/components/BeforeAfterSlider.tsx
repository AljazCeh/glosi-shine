import { useState, useRef, useCallback, useEffect } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}

const BeforeAfterSlider = ({ before, after, beforeAlt, afterAlt, title }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground text-center">
        {title}
      </h3>
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-lg overflow-hidden cursor-col-resize select-none touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* After image (full background) */}
        <img
          src={after}
          alt={afterAlt}
          loading="lazy"
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt={beforeAlt}
            loading="lazy"
            width={1280}
            height={720}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100vw", maxWidth: "none" }}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-foreground/80 z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border-2 border-foreground/60 flex items-center justify-center shadow-lg backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-foreground/80">
              <path d="M4 8L1 8M1 8L3 6M1 8L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8L15 8M15 8L13 6M15 8L13 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute bottom-4 left-4 text-xs font-medium tracking-widest uppercase px-3 py-1 rounded bg-muted/80 text-muted-foreground z-10">
          Before
        </span>
        <span className="absolute bottom-4 right-4 text-xs font-medium tracking-widest uppercase px-3 py-1 rounded bg-primary/80 text-primary-foreground z-10">
          After
        </span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

import { useState, useCallback, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveButton(
  containerRef: RefObject<HTMLDivElement | null>,
  buttonRef: RefObject<HTMLButtonElement | null>
) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const moveButton = useCallback(() => {
    if (!containerRef.current || !buttonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();

    // Calculate safe boundaries with padding
    const padding = 40;
    const maxX = container.width - button.width - padding * 2;
    const maxY = container.height - button.height - padding * 2;

    // Ensure minimum boundaries
    const safeMaxX = Math.max(maxX, 100);
    const safeMaxY = Math.max(maxY, 100);

    // Generate random position within safe bounds
    const newX = Math.random() * safeMaxX + padding;
    const newY = Math.random() * safeMaxY + padding;

    setPosition({ x: newX, y: newY });
  }, [containerRef, buttonRef]);

  const handlePointerEnter = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  return {
    position,
    handlePointerEnter,
    handleTouchStart
  };
}

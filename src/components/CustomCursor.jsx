import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  const [cursorState, setCursorState] = useState({
    hidden: true,
    hovered: false,
    label: "",
  });

  useEffect(() => {
    // Check if device supports fine pointer (mouse), disable on touch devices
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isMoving = false;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isMoving) {
        setCursorState((prev) => ({ ...prev, hidden: false }));
        isMoving = true;
      }

      // Fast snap for inner dot
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onMouseDown = () => {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(0.7)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(0.85)`;
    };

    const onMouseUp = () => {
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(1)`;
    };

    const onMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, hidden: true }));
    };

    // Smooth trailing physics for outer ring
    const renderLoop = () => {
      // Lerp ring position towards mouse
      const ease = 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Event delegation for hover states
    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor], input, textarea");
      if (target) {
        const customLabel = target.getAttribute("data-cursor") || "";
        setCursorState((prev) => ({
          ...prev,
          hovered: true,
          label: customLabel,
        }));
      } else {
        setCursorState((prev) => ({
          ...prev,
          hovered: false,
          label: "",
        }));
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    renderLoop();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-99999 overflow-hidden transition-opacity duration-300 hidden md:block ${
        cursorState.hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Outer Ring with smooth lerp physics */}
      <div
        ref={cursorRingRef}
        className={`fixed -left-4 -top-4 flex items-center justify-center rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-300 will-change-transform ${
          cursorState.label
            ? "h-16 w-16 -left-8 -top-8 bg-(--paper) text-(--ink) border-none shadow-lg"
            : cursorState.hovered
            ? "h-11 w-11 -left-5.5 -top-5.5 border border-(--paper) bg-(--paper)/15 backdrop-invert"
            : "h-8 w-8 border border-(--paper)/40 bg-transparent"
        }`}
      >
        {cursorState.label && (
          <span className="font-ui text-[9px] uppercase tracking-[0.2em] font-bold select-none animate-fade-in">
            {cursorState.label}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed -left-1 -top-1 h-2 w-2 rounded-full pointer-events-none will-change-transform transition-all duration-150 ${
          cursorState.label
            ? "opacity-0"
            : cursorState.hovered
            ? "scale-150 bg-(--paper)"
            : "bg-(--paper) shadow-[0_0_8px_rgba(244,241,234,0.6)]"
        }`}
      />
    </div>
  );
};

export default CustomCursor;

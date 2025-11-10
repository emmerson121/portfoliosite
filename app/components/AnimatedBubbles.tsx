"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBubbles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const bubbles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      opacity: number;
      pulseSpeed: number;
      time: number;
    }[] = [];

    // Generate bubbles
    for (let i = 0; i < 25; i++) {
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 10 + 5, // smaller bubbles (5–15px)
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        opacity: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005, // controls fade speed
        time: Math.random() * Math.PI * 2,
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((b) => {
        // Fade effect: smoothly oscillate opacity
        b.time += b.pulseSpeed;
        const fade = Math.sin(b.time) * 0.3 + 0.5; // oscillates between 0.2–0.8
        const currentOpacity = b.opacity * fade;

        // Draw bubble
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        gradient.addColorStop(0, `rgba(59,130,246,${currentOpacity})`); // blue center
        gradient.addColorStop(1, `rgba(59,130,246,0)`); // transparent edge
        ctx.fillStyle = gradient;
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        // Move
        b.x += b.dx;
        b.y += b.dy;

        // Bounce
        if (b.x + b.r > width || b.x - b.r < 0) b.dx *= -1;
        if (b.y + b.r > height || b.y - b.r < 0) b.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-black"
      // style={{ background: "radial-gradient(circle at top left, #0f172a, #020617)" }}
    />
  );
}

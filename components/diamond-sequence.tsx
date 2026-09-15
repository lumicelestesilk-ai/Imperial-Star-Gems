"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function DiamondSequence() {
  const frameRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!frameRef.current || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const canvas = frameRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = (progress: number) => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f7f7f4";
      ctx.fillRect(0, 0, width, height);

      const x = width / 2;
      const y = height / 2;
      const scale = 0.35 + progress * 0.9;
      const rough = 1 - progress;
      const glow = 0.15 + progress * 0.5;

      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      ctx.beginPath();
      ctx.moveTo(-120, 0);
      ctx.lineTo(-70, -90);
      ctx.lineTo(0, -130);
      ctx.lineTo(70, -90);
      ctx.lineTo(120, 0);
      ctx.lineTo(70, 90);
      ctx.lineTo(0, 130);
      ctx.lineTo(-70, 90);
      ctx.closePath();

      ctx.fillStyle = `rgba(166, 180, 188, ${0.24 + rough * 0.29})`;
      ctx.shadowColor = `rgba(28, 44, 58, ${0.18 + glow})`;
      ctx.shadowBlur = 38;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.strokeStyle = "rgba(23, 24, 27, 0.58)";
      ctx.lineWidth = 2.2;
      ctx.stroke();

      for (let i = 0; i < 10; i += 1) {
        const offset = 15 + i * 10;
        ctx.beginPath();
        ctx.moveTo(-offset, 0);
        ctx.lineTo(0, 16 + i * 9.5);
        ctx.lineTo(offset, 0);
        ctx.strokeStyle = `rgba(255,255,255,${0.2 + progress * 0.4})`;
        ctx.lineWidth = 1.3;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.moveTo(-120, 0);
      ctx.lineTo(-70, -90);
      ctx.lineTo(0, -130);
      ctx.lineTo(70, -90);
      ctx.lineTo(120, 0);
      ctx.lineTo(70, 90);
      ctx.lineTo(0, 130);
      ctx.lineTo(-70, 90);
      ctx.closePath();

      ctx.clip();

      const gradient = ctx.createLinearGradient(-120, -130, 120, 130);
      gradient.addColorStop(0, "rgba(238, 244, 248, 0.97)");
      gradient.addColorStop(0.35, "rgba(203, 220, 230, 0.96)");
      gradient.addColorStop(0.7, "rgba(138, 160, 174, 0.93)");
      gradient.addColorStop(1, "rgba(88, 103, 118, 0.96)");
      ctx.fillStyle = gradient;
      ctx.fillRect(-140, -140, 280, 280);

      ctx.fillStyle = "rgba(255,255,255,0.36)";
      for (let i = 0; i < 12; i += 1) {
        const px = -125 + i * 20;
        const py = -120 + (i % 2) * 18;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px + 34, py + 18);
        ctx.lineTo(px + 18, py + 44);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    };

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(0.15);
    };

    setCanvasSize();
    const ctxTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        draw(p);
      },
    });

    window.addEventListener("resize", setCanvasSize);

    return () => {
      ctxTrigger.kill();
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="diamond-sequence-shell">
      <div className="diamond-sequence-inner">
        <div className="diamond-sequence-copy">
          <div className="eyebrow">Rough to polished</div>
          <h2>Measured by light, cut for life.</h2>
          <p>
            Each stone is followed from rough crystal to final brilliance, with
            the proportions mapped to preserve fire, spread, and clarity.
          </p>
        </div>
        <div className="diamond-stage-frame">
          <canvas ref={frameRef} className="diamond-canvas" />
        </div>
        <div className="diamond-caption" aria-live="polite">
          <span>Rough</span>
          <span>Planning</span>
          <span>Sawing</span>
          <span>Faceting</span>
          <span>Finished brilliance</span>
        </div>
      </div>
    </section>
  );
}

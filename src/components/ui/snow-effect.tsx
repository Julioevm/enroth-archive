"use client";

import React, { useEffect, useRef } from "react";
import { useFestive } from "@/components/festive-provider";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
}

export function SnowEffect() {
  const { snowEnabled } = useFestive();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!snowEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let snowflakes: Snowflake[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createSnowflakes();
    };

    const createSnowflakes = () => {
      const count = Math.floor((canvas.width * canvas.height) / 10000);
      snowflakes = Array.from({ length: Math.min(count, 150) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        wind: Math.random() * 0.5 - 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();

      snowflakes.forEach((snowflake) => {
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);

        snowflake.y += snowflake.speed;
        snowflake.x += snowflake.wind;

        if (snowflake.y > canvas.height) {
          snowflake.y = -snowflake.radius;
          snowflake.x = Math.random() * canvas.width;
        }
        if (snowflake.x > canvas.width) {
          snowflake.x = 0;
        } else if (snowflake.x < 0) {
          snowflake.x = canvas.width;
        }
      });

      ctx.fill();
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [snowEnabled]);

  if (!snowEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: "lighten" }}
    />
  );
}

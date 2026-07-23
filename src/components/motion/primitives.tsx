"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

import {
  EASE,
  DURATION,
  RISE,
  VIEWPORT,
  PARALLAX_HERO,
  PARALLAX_BAND,
  KEN_BURNS_SCALE,
  MARQUEE_X,
} from "./tokens";

// ─── Editorial Ink motion set (client components) ─────────────────────────────
// Reveal        — fade/rise sections + staggered tiles on scroll
// HeroMedia     — parallax hero with Ken Burns drift, optional video loop
// Marquee       — slow editorial text ribbon
// ParallaxBand  — full-bleed image divider that scrolls at depth
// All effects respect prefers-reduced-motion.
//
// Promoted from four byte-identical per-page copies (tampa-tattoo-co,
// ironblood-tattoos, las-vegas-tattoo-co, angry-raven-tattoo). Behaviour is
// unchanged — only the constants moved to ./tokens.

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: RISE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.enter, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function HeroMedia({
  still,
  video,
  alt,
}: {
  still: string;
  video?: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], PARALLAX_HERO);

  const media =
    video && !reduce ? (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={video}
        poster={still}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      />
    ) : (
      <Image src={still} alt={alt} fill priority sizes="100vw" className="object-cover" />
    );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {reduce ? (
        media
      ) : (
        <motion.div className="absolute inset-0" style={{ y }}>
          <motion.div
            className="absolute inset-0"
            animate={video ? undefined : { scale: KEN_BURNS_SCALE }}
            transition={
              video
                ? undefined
                : {
                    duration: DURATION.kenBurns,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear",
                  }
            }
          >
            {media}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export function Marquee({
  items,
  accent,
  border,
  color,
}: {
  items: string[];
  accent: string;
  border: string;
  color: string;
}) {
  const reduce = useReducedMotion();
  const run = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b"}>
      {items.map((item, i) => (
        <span
          key={i}
          className="flex items-center text-[11px] tracking-[0.4em] uppercase"
          style={{ color }}
        >
          <span className="px-6">{item}</span>
          <span style={{ color: accent }}>·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y py-5" style={{ borderColor: border }}>
      {reduce ? (
        <div className="flex justify-center">{run("a")}</div>
      ) : (
        <motion.div
          className="flex w-max"
          animate={{ x: MARQUEE_X }}
          transition={{ duration: DURATION.marquee, repeat: Infinity, ease: "linear" }}
        >
          {run("a")}
          {run("b")}
        </motion.div>
      )}
    </div>
  );
}

export function ParallaxBand({
  src,
  alt,
  overlay = "rgba(10,10,10,0.55)",
  children,
}: {
  src: string;
  alt: string;
  overlay?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], PARALLAX_BAND);

  return (
    <div ref={ref} className="relative h-[34vh] min-h-[220px] overflow-hidden">
      {reduce ? (
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      ) : (
        <motion.div className="absolute -inset-y-[14%] inset-x-0" style={{ y }}>
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        </motion.div>
      )}
      <div className="absolute inset-0" style={{ background: overlay }} />
      {children && (
        <div className="relative z-10 flex h-full items-center justify-center">{children}</div>
      )}
    </div>
  );
}

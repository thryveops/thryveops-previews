"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = "party" | "occasion" | "seating" | "datetime" | "contact" | "confirmed";

interface Occasion {
  id: string;
  label: string;
  sub: string;
  accent: string;
  accentDark: string;
}

interface Seating {
  id: string;
  label: string;
  sub: string;
  icon: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const OCCASIONS: Occasion[] = [
  { id: "date-night",   label: "Date Night",       sub: "Intimate table, right energy.",             accent: "#C8A040", accentDark: "#7A5F1E" },
  { id: "celebration",  label: "Celebration",       sub: "Birthday, anniversary, milestone.",         accent: "#B52228", accentDark: "#8C1A1E" },
  { id: "business",     label: "Business Dinner",   sub: "Impress them. We handle the room.",         accent: "#C8A040", accentDark: "#7A5F1E" },
  { id: "group",        label: "Group Night Out",   sub: "The crew's coming. Make it count.",         accent: "#B52228", accentDark: "#8C1A1E" },
  { id: "brunch",       label: "DJ Brunch",         sub: "Sat – Sun · 11AM – 4PM · Bottomless.",     accent: "#C8A040", accentDark: "#7A5F1E" },
  { id: "casual",       label: "Just Stopping In",  sub: "Bar seat, good drink, no agenda.",         accent: "#C8A040", accentDark: "#7A5F1E" },
];

const SEATING: Seating[] = [
  { id: "main",    label: "Main Dining Room", sub: "Full service, full atmosphere.",     icon: "◈" },
  { id: "bar",     label: "Bar",              sub: "Best seat in the house.",            icon: "◇" },
  { id: "patio",   label: "Patio",            sub: "Outdoor · weather permitting.",      icon: "◉" },
  { id: "private", label: "Private Area",     sub: "Semi-private for groups 6+.",        icon: "◆" },
];

const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function next14Days(): string[] {
  const days: string[] = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`);
  }
  return days;
}

function getTimeSlots(dateStr: string, isBrunch: boolean): { label: string; period: string }[] {
  const [yr, mo, dy] = dateStr.split("-").map(Number);
  const dow = new Date(yr, mo - 1, dy).getDay();

  const slots: { label: string; period: string }[] = [];

  const push = (h: number, m: number, period: string) => {
    const ampm = h >= 12 ? "PM" : "AM";
    const hour = h % 12 || 12;
    slots.push({ label: `${hour}:${String(m).padStart(2,"0")} ${ampm}`, period });
  };

  // Brunch: Sat (6) or Sun (0)
  if (isBrunch && (dow === 6 || dow === 0)) {
    for (let h = 11; h <= 15; h++) {
      push(h, 0, "Brunch");
      if (h < 15) push(h, 30, "Brunch");
    }
  }

  // Closed Mon (1) and Tue (2)
  if (dow === 1 || dow === 2) return [];

  // Dinner: Wed–Sun
  if (dow >= 3 || dow === 0) {
    const startH = (dow === 6 || dow === 0) ? 17 : 17;
    for (let h = startH; h <= 21; h++) {
      push(h, 0, "Dinner");
      if (h < 21) push(h, 30, "Dinner");
    }
  }

  // Late Night: Fri (5) + Sat (6)
  if (dow === 5 || dow === 6) {
    for (let h = 22; h <= 23; h++) {
      push(h, 0, "Late Night");
      push(h, 30, "Late Night");
    }
    push(0, 0, "Late Night");
  }

  return slots;
}

function formatDateFull(dateStr: string) {
  const [yr, mo, dy] = dateStr.split("-").map(Number);
  const d = new Date(yr, mo - 1, dy);
  return `${DAYS_SHORT[d.getDay()]}, ${MONTHS[d.getMonth()]} ${dy}`;
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap');

  .bello *, .bello *::before, .bello *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .bello {
    --bg:          #080604;
    --bg-2:        #0E0B07;
    --bg-3:        #181410;
    --bg-card:     #1E1913;
    --text:        #F0E5D0;
    --text-muted:  #9A8A72;
    --text-faint:  #5A4E40;
    --crimson:     #B52228;
    --crimson-d:   #8C1A1E;
    --gold:        #C8A040;
    --gold-l:      #E0BA60;
    --gold-d:      #7A5F1E;
    --accent:      #C8A040;
    --accent-d:    #7A5F1E;
    --border:      rgba(200,160,64,.18);
    --border-f:    rgba(200,160,64,.07);
    --serif: 'Cormorant Garamond', Georgia, serif;
    --sans:  'Jost', system-ui, sans-serif;

    font-family: var(--sans);
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  .bello a { text-decoration: none; color: inherit; }

  /* ── NAV ──────────────────────────────────────────────────────────────── */
  .bello .bk-nav {
    position: fixed; inset: 0 0 auto; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.4rem 3rem;
    background: rgba(8,6,4,.95);
    border-bottom: 1px solid var(--border-f);
    backdrop-filter: blur(8px);
  }
  .bello .bk-nav-logo {
    font-family: var(--serif); font-size: 1.4rem; font-weight: 600;
    letter-spacing: .22em; color: var(--gold); text-transform: uppercase;
  }
  .bello .bk-nav-back {
    display: inline-flex; align-items: center; gap: .5rem;
    font-size: .7rem; font-weight: 500; letter-spacing: .16em;
    text-transform: uppercase; color: var(--text-muted);
    transition: color .2s; cursor: pointer; background: none; border: none;
  }
  .bello .bk-nav-back:hover { color: var(--gold); }

  /* ── HERO STRIP ───────────────────────────────────────────────────────── */
  .bello .bk-hero {
    padding: 7rem 3rem 3rem;
    border-bottom: 1px solid var(--border-f);
    background: linear-gradient(to bottom, rgba(8,6,4,0) 0%, var(--bg) 100%),
      url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1920&q=60') center/cover no-repeat;
  }
  .bello .bk-hero-label {
    font-size: .7rem; font-weight: 500; letter-spacing: .22em;
    text-transform: uppercase; color: var(--accent); margin-bottom: .75rem;
    transition: color .5s;
  }
  .bello .bk-hero-heading {
    font-family: var(--serif); font-size: clamp(2.5rem, 5vw, 3.75rem);
    font-weight: 400; line-height: 1.0; letter-spacing: -.01em;
  }
  .bello .bk-hero-heading em { font-style: italic; color: var(--accent); transition: color .5s; }

  /* ── STEP INDICATOR ───────────────────────────────────────────────────── */
  .bello .bk-steps {
    display: flex; align-items: center; justify-content: center;
    padding: 2.25rem 3rem; gap: 0; border-bottom: 1px solid var(--border-f);
    background: var(--bg-2);
  }
  .bello .bk-step-node {
    display: flex; flex-direction: column; align-items: center; gap: .4rem;
  }
  .bello .bk-step-circle {
    width: 28px; height: 28px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: .7rem; font-weight: 600; transition: all .3s;
    border: 1px solid var(--border);
    background: var(--bg-3); color: var(--text-faint);
  }
  .bello .bk-step-circle.done {
    background: var(--accent); border-color: var(--accent); color: var(--bg);
    transition: background .5s, border-color .5s;
  }
  .bello .bk-step-circle.active {
    background: var(--accent); border-color: var(--accent); color: var(--bg);
    box-shadow: 0 0 0 3px var(--bg-2), 0 0 0 5px var(--accent);
    transition: background .5s, border-color .5s, box-shadow .5s;
  }
  .bello .bk-step-label {
    font-size: .62rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--text-faint); transition: color .3s;
  }
  .bello .bk-step-label.active { color: var(--accent); transition: color .5s; }
  .bello .bk-step-label.done   { color: var(--text-muted); }
  .bello .bk-step-line {
    flex: 0 0 3rem; height: 1px; background: var(--border);
    margin: 0 .5rem; margin-bottom: 1.1rem; transition: background .4s;
  }
  .bello .bk-step-line.done { background: var(--accent); transition: background .5s; }

  /* ── BODY ─────────────────────────────────────────────────────────────── */
  .bello .bk-body {
    max-width: 860px; margin: 0 auto;
    padding: 4rem 3rem 6rem;
    position: relative; overflow: hidden;
  }
  .bello .bk-step-heading {
    font-family: var(--serif); font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 400; line-height: 1.1; margin-bottom: .75rem;
  }
  .bello .bk-step-heading em { font-style: italic; color: var(--accent); transition: color .5s; }
  .bello .bk-step-sub {
    font-size: .8rem; letter-spacing: .08em; color: var(--text-muted); margin-bottom: 3rem;
  }
  .bello .bk-back-btn {
    display: inline-flex; align-items: center; gap: .4rem;
    font-size: .7rem; letter-spacing: .14em; text-transform: uppercase;
    color: var(--text-faint); background: none; border: none; cursor: pointer;
    margin-bottom: 2.5rem; transition: color .2s; padding: 0;
  }
  .bello .bk-back-btn:hover { color: var(--gold); }

  /* ── PARTY SIZE ───────────────────────────────────────────────────────── */
  .bello .bk-party-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: .75rem;
    margin-bottom: 3rem;
  }
  .bello .bk-party-btn {
    aspect-ratio: 1; display: flex; flex-direction: column; align-items: center;
    justify-content: center; border: 1px solid var(--border); background: var(--bg-2);
    cursor: pointer; transition: border-color .2s, background .2s; color: var(--text);
    font-family: var(--serif);
  }
  .bello .bk-party-btn:hover { border-color: var(--accent); background: var(--bg-3); }
  .bello .bk-party-btn.selected { border-color: var(--accent); background: var(--bg-card); }
  .bello .bk-party-btn.selected .bk-party-num { color: var(--accent); }
  .bello .bk-party-num { font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 300; line-height: 1; }
  .bello .bk-party-lbl { font-size: .62rem; letter-spacing: .14em; text-transform: uppercase; color: var(--text-faint); margin-top: .4rem; }
  .bello .bk-party-btn.selected .bk-party-lbl { color: var(--text-muted); }

  /* ── OCCASION ─────────────────────────────────────────────────────────── */
  .bello .bk-occ-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px;
    background: var(--border-f); border: 1px solid var(--border);
    margin-bottom: 3rem;
  }
  .bello .bk-occ-card {
    background: var(--bg-2); padding: 2.5rem 2rem;
    cursor: pointer; transition: background .2s;
    display: flex; flex-direction: column; gap: .5rem;
    position: relative; overflow: hidden;
    border: none;
  }
  .bello .bk-occ-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: var(--border); transition: background .3s;
  }
  .bello .bk-occ-card:hover { background: var(--bg-3); }
  .bello .bk-occ-card:hover::before { background: var(--accent); transition: background .5s; }
  .bello .bk-occ-card.selected { background: var(--bg-card); }
  .bello .bk-occ-card.selected::before { background: var(--accent); transition: background .5s; }
  .bello .bk-occ-name {
    font-family: var(--serif); font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 500; color: var(--text); text-align: left;
  }
  .bello .bk-occ-card.selected .bk-occ-name { color: var(--accent); transition: color .5s; }
  .bello .bk-occ-sub {
    font-size: .78rem; color: var(--text-muted); text-align: left; line-height: 1.5;
  }

  /* ── SEATING ──────────────────────────────────────────────────────────── */
  .bello .bk-seat-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;
    margin-bottom: 3rem;
  }
  .bello .bk-seat-card {
    border: 1px solid var(--border); background: var(--bg-2);
    padding: 2.25rem 1.75rem; cursor: pointer;
    transition: border-color .2s, background .2s;
    display: flex; align-items: flex-start; gap: 1.25rem;
    text-align: left;
  }
  .bello .bk-seat-card:hover { border-color: var(--accent); background: var(--bg-3); }
  .bello .bk-seat-card.selected { border-color: var(--accent); background: var(--bg-card); }
  .bello .bk-seat-icon {
    font-size: 1.5rem; color: var(--border); flex-shrink: 0; line-height: 1;
    transition: color .3s;
  }
  .bello .bk-seat-card.selected .bk-seat-icon { color: var(--accent); transition: color .5s; }
  .bello .bk-seat-name {
    font-family: var(--serif); font-size: clamp(1.1rem, 2vw, 1.3rem);
    font-weight: 500; color: var(--text); line-height: 1.2;
  }
  .bello .bk-seat-sub { font-size: .78rem; color: var(--text-muted); margin-top: .3rem; }

  /* ── DATE STRIP ───────────────────────────────────────────────────────── */
  .bello .bk-date-strip {
    display: flex; gap: .5rem; overflow-x: auto;
    padding-bottom: .75rem; margin-bottom: 2.5rem;
    scrollbar-width: none;
  }
  .bello .bk-date-strip::-webkit-scrollbar { display: none; }
  .bello .bk-date-btn {
    flex-shrink: 0; display: flex; flex-direction: column; align-items: center;
    justify-content: center; width: 3.5rem; height: 4.25rem;
    border: 1px solid var(--border); background: var(--bg-2);
    cursor: pointer; transition: border-color .2s, background .2s; color: var(--text);
  }
  .bello .bk-date-btn:hover { border-color: var(--accent); background: var(--bg-3); }
  .bello .bk-date-btn.selected { border-color: var(--accent); background: var(--accent); }
  .bello .bk-date-dow { font-size: .58rem; letter-spacing: .12em; text-transform: uppercase; color: var(--text-faint); }
  .bello .bk-date-btn.selected .bk-date-dow { color: var(--bg); }
  .bello .bk-date-num { font-family: var(--serif); font-size: 1.4rem; font-weight: 300; color: var(--text); line-height: 1; }
  .bello .bk-date-btn.selected .bk-date-num { color: var(--bg); }
  .bello .bk-date-btn.closed { opacity: .35; cursor: not-allowed; }
  .bello .bk-date-btn.closed:hover { border-color: var(--border); background: var(--bg-2); }

  /* ── TIME SLOTS ───────────────────────────────────────────────────────── */
  .bello .bk-period-label {
    font-size: .65rem; letter-spacing: .2em; text-transform: uppercase;
    color: var(--text-faint); margin-bottom: 1rem; margin-top: 1.5rem;
  }
  .bello .bk-period-label:first-child { margin-top: 0; }
  .bello .bk-slots-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: .5rem;
    margin-bottom: .5rem;
  }
  .bello .bk-slot-btn {
    padding: .7rem .5rem; text-align: center;
    font-size: .72rem; font-weight: 500; letter-spacing: .08em;
    border: 1px solid var(--border); background: var(--bg-2);
    cursor: pointer; transition: border-color .2s, background .2s; color: var(--text-muted);
  }
  .bello .bk-slot-btn:hover { border-color: var(--accent); color: var(--text); }
  .bello .bk-slot-btn.selected { border-color: var(--accent); background: var(--accent); color: var(--bg); }

  /* ── CONTACT ──────────────────────────────────────────────────────────── */
  .bello .bk-summary {
    border: 1px solid var(--border); background: var(--bg-2);
    padding: 1.75rem 2rem; margin-bottom: 2.5rem;
    display: flex; flex-wrap: wrap; gap: 2rem;
  }
  .bello .bk-summary-item {}
  .bello .bk-summary-key {
    font-size: .62rem; letter-spacing: .18em; text-transform: uppercase;
    color: var(--text-faint); margin-bottom: .3rem;
  }
  .bello .bk-summary-val { font-family: var(--serif); font-size: 1.05rem; color: var(--text); }
  .bello .bk-summary-val.gold { color: var(--accent); transition: color .5s; }

  .bello .bk-field-group { margin-bottom: 1.25rem; }
  .bello .bk-field-label {
    display: block; font-size: .65rem; letter-spacing: .18em; text-transform: uppercase;
    color: var(--text-faint); margin-bottom: .6rem;
  }
  .bello .bk-field-label span { color: var(--accent); }
  .bello .bk-input {
    width: 100%; background: var(--bg-2); border: 1px solid var(--border);
    color: var(--text); font-family: var(--sans); font-size: .88rem;
    padding: .85rem 1rem; outline: none; transition: border-color .2s;
  }
  .bello .bk-input::placeholder { color: var(--text-faint); }
  .bello .bk-input:focus { border-color: var(--accent); }
  .bello .bk-input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .bello .bk-special-input {
    width: 100%; background: var(--bg-2); border: 1px solid var(--border);
    color: var(--text); font-family: var(--sans); font-size: .88rem;
    padding: .85rem 1rem; outline: none; transition: border-color .2s;
    resize: vertical; min-height: 80px;
  }
  .bello .bk-special-input::placeholder { color: var(--text-faint); }
  .bello .bk-special-input:focus { border-color: var(--accent); }

  /* ── CTA BTN ──────────────────────────────────────────────────────────── */
  .bello .bk-cta {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 1rem 2.5rem; background: var(--text); color: var(--bg);
    font-family: var(--sans); font-size: .72rem; font-weight: 600;
    letter-spacing: .15em; text-transform: uppercase; cursor: pointer;
    border: none; transition: background .2s, transform .15s;
  }
  .bello .bk-cta:hover { background: var(--gold-l); transform: scale(1.02); }
  .bello .bk-cta:disabled { opacity: .4; cursor: not-allowed; transform: none; }
  .bello .bk-cta-crimson { background: var(--crimson); color: var(--text); }
  .bello .bk-cta-crimson:hover { background: var(--crimson-d); }
  .bello .bk-cta-outline {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 1rem 2.5rem; background: transparent; color: var(--text-muted);
    font-family: var(--sans); font-size: .72rem; font-weight: 500;
    letter-spacing: .15em; text-transform: uppercase; cursor: pointer;
    border: 1px solid var(--border); transition: border-color .2s, color .2s;
  }
  .bello .bk-cta-outline:hover { border-color: var(--gold); color: var(--text); }
  .bello .bk-btn-row { display: flex; justify-content: flex-end; gap: 1rem; margin-top: 2.5rem; align-items: center; }

  /* ── CONFIRMED ────────────────────────────────────────────────────────── */
  .bello .bk-confirmed { text-align: center; padding: 2rem 0 4rem; }
  .bello .bk-check-ring {
    width: 72px; height: 72px; border-radius: 50%;
    border: 1px solid var(--accent); background: rgba(200,160,64,.08);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 2.25rem;
  }
  .bello .bk-confirmed-heading {
    font-family: var(--serif); font-size: clamp(2.75rem, 6vw, 4.5rem);
    font-weight: 400; line-height: 1; margin-bottom: .6rem;
  }
  .bello .bk-confirmed-heading em { font-style: italic; color: var(--accent); transition: color .5s; }
  .bello .bk-confirmed-sub { font-family: var(--serif); font-size: 1.1rem; font-weight: 300; color: var(--text-muted); margin-bottom: 3rem; }
  .bello .bk-confirmed-card {
    border: 1px solid var(--border); background: var(--bg-2);
    padding: 2.25rem; max-width: 420px; margin: 0 auto 2.5rem; text-align: left;
  }
  .bello .bk-confirmed-row {
    display: flex; justify-content: space-between; align-items: baseline;
    padding: .85rem 0; border-bottom: 1px solid var(--border-f);
  }
  .bello .bk-confirmed-row:last-child { border-bottom: none; }
  .bello .bk-confirmed-key { font-size: .65rem; letter-spacing: .16em; text-transform: uppercase; color: var(--text-faint); }
  .bello .bk-confirmed-val { font-family: var(--serif); font-size: 1rem; color: var(--text); }
  .bello .bk-confirmed-val.gold { color: var(--accent); transition: color .5s; }
  .bello .bk-resy-note { font-size: .8rem; color: var(--text-faint); margin-bottom: 2rem; }
  .bello .bk-confirmed-actions { display: flex; flex-direction: column; gap: .75rem; align-items: center; }

  /* ── CLOSED NOTICE ────────────────────────────────────────────────────── */
  .bello .bk-closed {
    text-align: center; padding: 4rem 2rem;
    border: 1px solid var(--border); background: var(--bg-2);
  }
  .bello .bk-closed-heading {
    font-family: var(--serif); font-size: 1.5rem; font-weight: 400; margin-bottom: .75rem;
  }
  .bello .bk-closed-sub { font-size: .85rem; color: var(--text-muted); }

  /* ── MOBILE ───────────────────────────────────────────────────────────── */
  @media (max-width: 640px) {
    .bello .bk-nav { padding: 1.1rem 1.25rem; }
    .bello .bk-hero { padding: 6rem 1.5rem 2.5rem; }
    .bello .bk-steps { padding: 1.5rem 1rem; gap: 0; }
    .bello .bk-step-line { flex: 0 0 1.25rem; }
    .bello .bk-step-label { display: none; }
    .bello .bk-body { padding: 2.5rem 1.25rem 5rem; }
    .bello .bk-party-grid { grid-template-columns: repeat(4, 1fr); }
    .bello .bk-occ-grid { grid-template-columns: 1fr; }
    .bello .bk-seat-grid { grid-template-columns: 1fr; }
    .bello .bk-slots-grid { grid-template-columns: repeat(3, 1fr); }
    .bello .bk-input-row { grid-template-columns: 1fr; }
    .bello .bk-summary { gap: 1.25rem; }
    .bello .bk-btn-row { flex-direction: column-reverse; align-items: stretch; }
    .bello .bk-cta, .bello .bk-cta-outline { width: 100%; padding: 1rem; }
  }
`;

// ─── Step Indicator ───────────────────────────────────────────────────────────

const STEPS: { key: Step; label: string }[] = [
  { key: "party",    label: "Guests" },
  { key: "occasion", label: "Occasion" },
  { key: "seating",  label: "Seating" },
  { key: "datetime", label: "Date & Time" },
  { key: "contact",  label: "Details" },
  { key: "confirmed",label: "Confirmed" },
];

function StepIndicator({ step, accent }: { step: Step; accent: string }) {
  const currentIdx = STEPS.findIndex(s => s.key === step);
  return (
    <div className="bk-steps">
      {STEPS.map((s, i) => {
        const done   = i < currentIdx;
        const active = i === currentIdx;
        return (
          <div key={s.key} style={{ display: "contents" }}>
            <div className="bk-step-node">
              <div
                className={`bk-step-circle${done ? " done" : active ? " active" : ""}`}
                style={done || active ? { background: accent, borderColor: accent } : {}}
              >
                {done ? (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : i + 1}
              </div>
              <span className={`bk-step-label${active ? " active" : done ? " done" : ""}`}
                style={active ? { color: accent } : {}}>
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className={`bk-step-line${done ? " done" : ""}`}
                style={done ? { background: accent } : {}} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BelloReservation() {
  const [step, setStep] = useState<Step>("party");
  const [direction, setDirection] = useState(1);

  const [partySize, setPartySize] = useState<number | null>(null);
  const [occasion, setOccasion] = useState<Occasion | null>(null);
  const [seating, setSeating] = useState<Seating | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<{ label: string; period: string } | null>(null);
  const [contact, setContact] = useState({ name: "", phone: "", email: "", notes: "" });

  const accent     = occasion?.accent     ?? "#C8A040";
  const accentDark = occasion?.accentDark ?? "#7A5F1E";

  const dynamicCss = `
    .bello { --accent: ${accent}; --accent-d: ${accentDark}; }
  `;

  const dates = useMemo(() => next14Days(), []);

  function isDayClosed(dateStr: string) {
    const [yr, mo, dy] = dateStr.split("-").map(Number);
    const dow = new Date(yr, mo - 1, dy).getDay();
    return dow === 1 || dow === 2;
  }

  const isBrunch = occasion?.id === "brunch";
  const slots = selectedDate ? getTimeSlots(selectedDate, isBrunch) : [];

  const slotsByPeriod = useMemo(() => {
    const map: Record<string, typeof slots> = {};
    for (const s of slots) {
      if (!map[s.period]) map[s.period] = [];
      map[s.period].push(s);
    }
    return map;
  }, [slots]);

  function goTo(next: Step, dir: number) {
    setDirection(dir);
    setStep(next);
    if (dir > 0) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const slideVariants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  const contactValid = contact.name.trim().length > 1 && contact.phone.trim().length > 6;

  const resyUrl = selectedDate && partySize
    ? `https://resy.com/cities/tpa/venues/bello-bar-and-kitchen?date=${selectedDate}&party_size=${partySize}`
    : "https://resy.com/cities/tpa/venues/bello-bar-and-kitchen";

  return (
    <>
      <style>{css}</style>
      <style>{dynamicCss}</style>
      <div className="bello">

        {/* NAV */}
        <nav className="bk-nav">
          <a href="/bello-bar-kitchen" className="bk-nav-logo">Bello</a>
          <a href="/bello-bar-kitchen" className="bk-nav-back">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Site
          </a>
        </nav>

        {/* HERO STRIP */}
        <div className="bk-hero">
          <p className="bk-hero-label">Reserve a Table</p>
          <h1 className="bk-hero-heading">
            Your night at <em>Bello</em><br />starts here.
          </h1>
        </div>

        {/* STEP INDICATOR */}
        {step !== "confirmed" && (
          <StepIndicator step={step} accent={accent} />
        )}

        {/* STEP BODY */}
        <div className="bk-body">
          <AnimatePresence mode="wait" custom={direction}>

            {/* ── STEP 1: Party Size ────────────────────────────────────── */}
            {step === "party" && (
              <motion.div key="party" custom={direction} variants={slideVariants}
                initial="enter" animate="center" exit="exit" transition={{ duration: .28 }}>
                <h2 className="bk-step-heading">How many <em>guests?</em></h2>
                <p className="bk-step-sub">Walk-ins always welcome at the bar.</p>
                <div className="bk-party-grid">
                  {[1,2,3,4,5,6,7,"8+"].map((n) => {
                    const val = n === "8+" ? 8 : n as number;
                    const sel = partySize === val;
                    return (
                      <button key={n}
                        className={`bk-party-btn${sel ? " selected" : ""}`}
                        style={sel ? { borderColor: accent } : {}}
                        onClick={() => setPartySize(val)}>
                        <span className="bk-party-num" style={sel ? { color: accent } : {}}>{n}</span>
                        <span className="bk-party-lbl">{n === 1 ? "guest" : n === "8+" ? "guests" : "guests"}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="bk-btn-row">
                  <button className="bk-cta" disabled={!partySize}
                    onClick={() => goTo("occasion", 1)}>
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 2: Occasion ──────────────────────────────────────── */}
            {step === "occasion" && (
              <motion.div key="occasion" custom={direction} variants={slideVariants}
                initial="enter" animate="center" exit="exit" transition={{ duration: .28 }}>
                <button className="bk-back-btn" onClick={() => goTo("party", -1)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  Back
                </button>
                <h2 className="bk-step-heading">What&rsquo;s the <em>occasion?</em></h2>
                <p className="bk-step-sub">Helps us set the right room for you.</p>
                <div className="bk-occ-grid">
                  {OCCASIONS.map(occ => {
                    const sel = occasion?.id === occ.id;
                    return (
                      <button key={occ.id}
                        className={`bk-occ-card${sel ? " selected" : ""}`}
                        onClick={() => setOccasion(occ)}>
                        <span className="bk-occ-name" style={sel ? { color: occ.accent } : {}}>{occ.label}</span>
                        <span className="bk-occ-sub">{occ.sub}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="bk-btn-row">
                  <button className="bk-cta" disabled={!occasion}
                    style={occasion ? { background: "#F0E5D0" } : {}}
                    onClick={() => goTo("seating", 1)}>
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 3: Seating ───────────────────────────────────────── */}
            {step === "seating" && (
              <motion.div key="seating" custom={direction} variants={slideVariants}
                initial="enter" animate="center" exit="exit" transition={{ duration: .28 }}>
                <button className="bk-back-btn" onClick={() => goTo("occasion", -1)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  Back
                </button>
                <h2 className="bk-step-heading">Where would you like <em>to sit?</em></h2>
                <p className="bk-step-sub">Subject to availability — we&apos;ll do our best.</p>
                <div className="bk-seat-grid">
                  {SEATING.map(s => {
                    const sel = seating?.id === s.id;
                    return (
                      <button key={s.id}
                        className={`bk-seat-card${sel ? " selected" : ""}`}
                        style={sel ? { borderColor: accent } : {}}
                        onClick={() => setSeating(s)}>
                        <span className="bk-seat-icon" style={sel ? { color: accent } : {}}>{s.icon}</span>
                        <div>
                          <div className="bk-seat-name">{s.label}</div>
                          <div className="bk-seat-sub">{s.sub}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="bk-btn-row">
                  <button className="bk-cta-outline" onClick={() => { setSeating(null); goTo("datetime", 1); }}>
                    No Preference
                  </button>
                  <button className="bk-cta" disabled={!seating}
                    onClick={() => goTo("datetime", 1)}>
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 4: Date & Time ───────────────────────────────────── */}
            {step === "datetime" && (
              <motion.div key="datetime" custom={direction} variants={slideVariants}
                initial="enter" animate="center" exit="exit" transition={{ duration: .28 }}>
                <button className="bk-back-btn" onClick={() => goTo("seating", -1)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  Back
                </button>
                <h2 className="bk-step-heading">Pick your <em>night.</em></h2>
                <p className="bk-step-sub">Open Wed – Sun. Closed Monday &amp; Tuesday.</p>

                {/* Date strip */}
                <div className="bk-date-strip">
                  {dates.map(d => {
                    const [yr, mo, dy] = d.split("-").map(Number);
                    const dow = new Date(yr, mo - 1, dy).getDay();
                    const closed = isDayClosed(d);
                    const sel = selectedDate === d;
                    return (
                      <button key={d}
                        className={`bk-date-btn${sel ? " selected" : ""}${closed ? " closed" : ""}`}
                        style={sel ? { background: accent, borderColor: accent } : {}}
                        disabled={closed}
                        onClick={() => { setSelectedDate(d); setSelectedTime(null); }}>
                        <span className="bk-date-dow" style={sel ? { color: "var(--bg)" } : {}}>{DAYS_SHORT[dow]}</span>
                        <span className="bk-date-num" style={sel ? { color: "var(--bg)" } : {}}>{dy}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Time slots */}
                {!selectedDate && (
                  <p style={{ color: "var(--text-faint)", fontSize: ".85rem", textAlign: "center", padding: "3rem 0" }}>
                    Select a date to see available times
                  </p>
                )}

                {selectedDate && slots.length === 0 && (
                  <div className="bk-closed">
                    <p className="bk-closed-heading">Closed this day</p>
                    <p className="bk-closed-sub">We&apos;re open Wed – Sun. Choose another date.</p>
                  </div>
                )}

                {selectedDate && slots.length > 0 && Object.entries(slotsByPeriod).map(([period, periodSlots]) => (
                  <div key={period}>
                    <p className="bk-period-label">{period} Service</p>
                    <div className="bk-slots-grid">
                      {periodSlots.map(slot => {
                        const sel = selectedTime?.label === slot.label && selectedTime?.period === slot.period;
                        return (
                          <button key={`${slot.period}-${slot.label}`}
                            className={`bk-slot-btn${sel ? " selected" : ""}`}
                            style={sel ? { background: accent, borderColor: accent } : {}}
                            onClick={() => setSelectedTime(slot)}>
                            {slot.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {selectedTime && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="bk-btn-row">
                    <button className="bk-cta" onClick={() => goTo("contact", 1)}>
                      Continue
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ── STEP 5: Contact ───────────────────────────────────────── */}
            {step === "contact" && (
              <motion.div key="contact" custom={direction} variants={slideVariants}
                initial="enter" animate="center" exit="exit" transition={{ duration: .28 }}>
                <button className="bk-back-btn" onClick={() => goTo("datetime", -1)}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  Back
                </button>

                {/* Summary bar */}
                <div className="bk-summary">
                  <div className="bk-summary-item">
                    <p className="bk-summary-key">Guests</p>
                    <p className="bk-summary-val">{partySize === 8 ? "8+" : partySize}</p>
                  </div>
                  {occasion && (
                    <div className="bk-summary-item">
                      <p className="bk-summary-key">Occasion</p>
                      <p className="bk-summary-val">{occasion.label}</p>
                    </div>
                  )}
                  {seating && (
                    <div className="bk-summary-item">
                      <p className="bk-summary-key">Seating</p>
                      <p className="bk-summary-val">{seating.label}</p>
                    </div>
                  )}
                  {selectedDate && (
                    <div className="bk-summary-item">
                      <p className="bk-summary-key">Date</p>
                      <p className="bk-summary-val">{formatDateFull(selectedDate)}</p>
                    </div>
                  )}
                  {selectedTime && (
                    <div className="bk-summary-item">
                      <p className="bk-summary-key">Time</p>
                      <p className="bk-summary-val gold" style={{ color: accent }}>{selectedTime.label}</p>
                    </div>
                  )}
                </div>

                <h2 className="bk-step-heading">Your <em>details.</em></h2>

                <div className="bk-input-row" style={{ marginBottom: "1.25rem" }}>
                  <div className="bk-field-group" style={{ marginBottom: 0 }}>
                    <label className="bk-field-label">Full Name <span>*</span></label>
                    <input className="bk-input" type="text" placeholder="Your name"
                      value={contact.name}
                      onChange={e => setContact(c => ({ ...c, name: e.target.value }))} />
                  </div>
                  <div className="bk-field-group" style={{ marginBottom: 0 }}>
                    <label className="bk-field-label">Phone Number <span>*</span></label>
                    <input className="bk-input" type="tel" placeholder="(813) 555-0000"
                      value={contact.phone}
                      onChange={e => setContact(c => ({ ...c, phone: e.target.value }))} />
                  </div>
                </div>

                <div className="bk-field-group">
                  <label className="bk-field-label">Email Address</label>
                  <input className="bk-input" type="email" placeholder="you@email.com"
                    value={contact.email}
                    onChange={e => setContact(c => ({ ...c, email: e.target.value }))} />
                </div>

                <div className="bk-field-group">
                  <label className="bk-field-label">Special Requests</label>
                  <textarea className="bk-special-input"
                    placeholder="Dietary restrictions, celebrations, high chair needed…"
                    value={contact.notes}
                    onChange={e => setContact(c => ({ ...c, notes: e.target.value }))} />
                </div>

                <div className="bk-btn-row">
                  <button className="bk-cta" disabled={!contactValid}
                    onClick={() => goTo("confirmed", 1)}>
                    Review on Resy &rarr;
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 6: Confirmed ─────────────────────────────────────── */}
            {step === "confirmed" && (
              <motion.div key="confirmed" custom={direction} variants={slideVariants}
                initial="enter" animate="center" exit="exit" transition={{ duration: .28 }}>
                <div className="bk-confirmed">
                  <motion.div className="bk-check-ring"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18, delay: .12 }}
                    style={{ borderColor: accent }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>

                  <h2 className="bk-confirmed-heading">
                    Almost <em>there.</em>
                  </h2>
                  <p className="bk-confirmed-sub">Your preferences are set. Complete your reservation on Resy.</p>

                  <div className="bk-confirmed-card" style={{ borderColor: "var(--border)" }}>
                    {partySize && (
                      <div className="bk-confirmed-row">
                        <span className="bk-confirmed-key">Guests</span>
                        <span className="bk-confirmed-val">{partySize === 8 ? "8+" : partySize}</span>
                      </div>
                    )}
                    {occasion && (
                      <div className="bk-confirmed-row">
                        <span className="bk-confirmed-key">Occasion</span>
                        <span className="bk-confirmed-val">{occasion.label}</span>
                      </div>
                    )}
                    {seating && (
                      <div className="bk-confirmed-row">
                        <span className="bk-confirmed-key">Seating</span>
                        <span className="bk-confirmed-val">{seating.label}</span>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="bk-confirmed-row">
                        <span className="bk-confirmed-key">Date</span>
                        <span className="bk-confirmed-val">{formatDateFull(selectedDate)}</span>
                      </div>
                    )}
                    {selectedTime && (
                      <div className="bk-confirmed-row">
                        <span className="bk-confirmed-key">Time</span>
                        <span className="bk-confirmed-val gold" style={{ color: accent }}>{selectedTime.label}</span>
                      </div>
                    )}
                    {contact.name && (
                      <div className="bk-confirmed-row">
                        <span className="bk-confirmed-key">Name</span>
                        <span className="bk-confirmed-val">{contact.name}</span>
                      </div>
                    )}
                  </div>

                  <p className="bk-resy-note">Resy will confirm your exact time and send a reminder.</p>

                  <div className="bk-confirmed-actions">
                    <a href={resyUrl} target="_blank" rel="noopener noreferrer"
                      className="bk-cta"
                      style={{ minWidth: "280px", background: "#F0E5D0" }}>
                      Complete Reservation on Resy &rarr;
                    </a>
                    <button className="bk-cta-outline" style={{ minWidth: "280px" }}
                      onClick={() => {
                        setStep("party"); setPartySize(null); setOccasion(null);
                        setSeating(null); setSelectedDate(null); setSelectedTime(null);
                        setContact({ name: "", phone: "", email: "", notes: "" });
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}>
                      Start Over
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </>
  );
}

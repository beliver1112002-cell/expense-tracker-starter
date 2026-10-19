# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A small React 19 + Vite expense tracker. It is the starter project for a Claude Code course and intentionally ships with a bug, poor UI and messy code that are meant to be fixed. Don't assume existing quirks are deliberate design.

## Commands

- `npm install` — install dependencies
- `npm run dev` — Vite dev server at http://localhost:5173
- `npm run build` — production build into `dist/` (gitignored)
- `npm run preview` — serve the built `dist/`
- `npm run lint` — ESLint (flat config; `no-unused-vars` ignores names starting with a capital letter or `_`)

There is no test framework configured.

## Architecture

Everything lives in `src/App.jsx` (entry: `src/main.jsx`, styles: `src/App.css`, `src/index.css`). There is no backend, router, or persistence; state is in-memory `useState` and resets on reload.

- `App` holds the transaction list (seeded with sample data), the add-form fields, and the two filter selects as separate `useState` hooks.
- Totals and the filtered list are recomputed on every render from `transactions`; nothing is memoized.
- `amount` is stored as a **string** (seed data and form input both), so the summary `reduce` calls `sum + t.amount` and concatenate rather than add. Convert to numbers when parsing input or summing.
- The category list is a hard-coded array inside the component and is used by both the add form and the filter dropdown.
- Seed data has a mislabeled entry ("Freelance Work" is typed as an expense).

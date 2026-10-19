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

The UI is split into components in `src/` (entry: `src/main.jsx`, styles: `src/App.css`, `src/index.css`). There is no backend, router, or persistence; state is in-memory `useState` and resets on reload.

- `src/App.jsx` — root component. Holds the transaction list (seeded with sample data), the two filter selects (`useState`), the `categories` array, and the `handleAdd` callback. Renders the three children below plus the filter dropdowns.
- `src/Summary.jsx` — takes `transactions`; computes and shows income, expenses and balance.
- `src/AddTransactionForm.jsx` — takes `categories` and `onAdd`. Owns the form field state, builds the new transaction on submit and passes it to `onAdd`.
- `src/TransactionList.jsx` — takes the already-filtered `transactions` and renders the table.
- Totals and the filtered list are recomputed on every render from `transactions`; nothing is memoized.
- `amount` is stored as a **number** (seed data and `parseFloat` on form input). Keep it numeric so the summary `reduce` calls add rather than concatenate.
- The category list is a hard-coded array in `App`, passed as a prop to the add form and also used by the filter dropdown.
- Seed data has a mislabeled entry ("Freelance Work" is typed as an expense).

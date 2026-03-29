# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"cultural-heritage" — a React single-page application for cultural heritage content. Uses Create React App (react-scripts 5), React 19, React Router v7, Tailwind CSS v4, GSAP for animations, and Font Awesome icons.

## Commands

- **Dev server:** `npm start`
- **Build:** `npm run build`
- **Tests:** `npm test` (Jest via react-scripts, runs in watch mode)
- **Single test:** `npm test -- --testPathPattern=<pattern>`

## Architecture

- **Routing:** React Router v7 (`BrowserRouter`) in `src/App.js` — single route (`/`) rendering `Home`
- **Layout:** `App.js` wraps all routes with `Navbar`, `ScrollToTop`, and `Footer`
- **Components:** All in `src/components/` — `Home.js` is the main page; `ShinyText.js` and `TextType.js` are reusable animated text effects (with companion CSS files)
- **Styling:** Tailwind CSS v4 + component-level CSS files in `src/` and `src/components/`
- **Global styles:** `src/index.css` (Tailwind base + custom fonts), `src/App.css`
- **Custom fonts:** Stored in `src/fonts/` and `public/fonts/`
- **Animations:** GSAP used for scroll/entrance animations
- **Static assets:** `public/` directory (images, fonts, favicon)

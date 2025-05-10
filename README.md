# Bag of Tricks

[![Netlify Status](https://api.netlify.com/api/v1/badges/1cbe50d2-52ae-4b88-9c5f-9ff2d5a1f1e4/deploy-status)](https://app.netlify.com/sites/profound-stardust-16a045/deploys)
![Vue 3](https://img.shields.io/badge/Vue-3.x-42b883?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript)
![Pinia](https://img.shields.io/badge/State-Pinia-yellow?style=flat-square&logo=pinia)
![License](https://img.shields.io/github/license/austinxewell/bag-of-tricks?style=flat-square)

> A slick, offline-first trick selector app with full CRUD, advanced filtering, and dynamic UX — all built without a backend.

![Bag Of Tricks - Landing](https://i.postimg.cc/HL7Lvkvb/bot-landing-light.png)

---

## 🔗 Live Demo

**[➡️ View Deployed App on Netlify](https://profound-stardust-16a045.netlify.app/)**

---

## 📦 About the Project

**Bag of Tricks** is a fully client-side single-page app (SPA) designed to help users create and manage their own custom trick library. It’s ideal for skaters, martial artists, dancers, or anyone who trains tricks and needs a focused, filterable selection tool.

The app is engineered with a clean architecture using Vue 3 + TypeScript, and stores user data entirely in `localStorage`, meaning **no login, no backend, no bullshit** — just fast, offline-capable performance and full control for the user.

---

## ⚙️ Features

- ✅ **Create, Read, Update, Delete (CRUD)** your tricks
- 🧠 **Pinia** for global state, persisted with `localStorage`
- 🌗 **Dark mode** toggle that respects system preferences
- 🔍 **Advanced filtering** (e.g., terrain, type)
- 🚫 **Error handling** and form validation baked in
- 📲 **Fully responsive** design for mobile + desktop
- 💨 **Zero backend**, full offline functionality
- 🎨 Built with **Nuxt UI**, **VueUse**, and modern Composition API

---

## 🛠 Tech Stack

| Tech              | Purpose                     |
|-------------------|------------------------------|
| **Vue 3**         | SPA Framework (Composition API) |
| **TypeScript**    | Type safety & clarity        |
| **Pinia**         | Global state management      |
| **Vue Router**    | Page navigation              |
| **Nuxt UI**       | Pre-styled components        |
| **VueUse**        | Utility composables          |
| **localStorage**  | Data persistence             |
| **Vue3 Carousel** | Carousel UI component        |

---

## 📸 Screenshots

| Feature | Preview |
|--------|---------|
| Landing Page (Light) | ![](https://i.postimg.cc/HL7Lvkvb/bot-landing-light.png) |
| Landing Page (Dark Mode) | ![](https://i.postimg.cc/DwNZcX62/bot-landing-dark.png) |
| Terrain Filter UI | ![](https://i.postimg.cc/X7QXphyB/bot-terrain-filter.png) |
| Trick Type Filter | ![](https://i.postimg.cc/fRyyXKx2/bot-trick-type-filter.png) |
| Random Trick Selection | ![](https://i.postimg.cc/dtqLQvDK/bot-trick-selection.png) |
| Modify Bag Options | ![](https://i.postimg.cc/ryGDLzVJ/bot-modify-bag.png) |
| Add Trick Form | ![](https://i.postimg.cc/QCqCgY4P/bot-add-trick.png) |
| Form Error States | ![](https://i.postimg.cc/ydckx8F7/bot-trick-error-state.png) |
| Success Toast | ![](https://i.postimg.cc/R033rRh6/bot-success-toast.png) |
| Edit Bag Page | ![](https://i.postimg.cc/vmp4GVxP/bot-edit-bag.png) |
| View Bag Page | ![](https://i.postimg.cc/x8QqzVRM/bot-view-bag.png) |

---

## 🚀 Getting Started

### Clone & Install

```bash
git clone https://github.com/austinxewell/bag-of-tricks.git
cd bag-of-tricks
npm install

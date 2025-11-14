
<div align="center">
  <h1 align="center">📍 Simple Notary Finder</h1>
  <p align="center">
    A modern, secure, and user-friendly React application for instantly finding nearby notary services.
  </p>
</div>

<div align="center">

[![React Version](https://img.shields.io/badge/react-^18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-^5.0.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind_css-^3.3.1-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 🚀 Overview

Simple Notary Finder is a sophisticated single-page application (SPA) designed to demonstrate best practices in modern frontend development. It addresses a common user need—locating a nearby notary—with a clean, intuitive, and highly performant interface. The application leverages the browser's native **Geolocation API** to provide instant, (simulated) location-based results, prioritizing user privacy and consent above all else.

The project's aesthetic is professional and trustworthy, featuring an immersive animated galaxy background that provides a unique and comfortable user experience. It serves as a comprehensive portfolio piece showcasing skills in React, TypeScript, Tailwind CSS, responsive design, and on-page SEO.

**Live Demo:** [https://your-live-demo-url.com](https://your-live-demo-url.com) *(placeholder)*

---

## ✨ Key Features

-   **One-Click Geolocation:** Utilizes the `navigator.geolocation` API to securely request the user's position with a single button click.
-   **Dynamic & Simulated Results:** Instantly displays a list of nearby notary services with details like name, address, hours, and simulated distance.
-   **Immersive User Interface:** A unique animated starfield background creates a calm and professional browsing experience.
-   **Fully Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from smartphones to desktops.
-   **Rich SEO & Accessibility:** Implements comprehensive JSON-LD schema (`WebSite`, `WebApplication`, `Article`, `FAQPage`) and follows accessibility best practices.
-   **Informational Modals:** Clean, accessible pop-up modals provide key information (About, Privacy Policy, etc.) without leaving the page.
-   **Collapsible SEO Content:** A 3500+ word article on notary services is cleverly hidden by default to prioritize the main tool, maximizing SEO value without cluttering the UI.

---

## 🛠️ Technology Stack

This project is built with a modern, scalable, and maintainable tech stack.

-   **Core Framework:** **React 18** (Functional Components, Hooks)
-   **Language:** **TypeScript** for robust type-safety and developer productivity.
-   **Styling:** **Tailwind CSS** for a utility-first, highly customizable design system.
-   **Geolocation:** **Pure JavaScript** (`navigator.geolocation`) for native browser integration.
-   **Architecture:** Component-based structure with clear separation of concerns (UI, services, data).
-   **Deployment:** Ready for deployment on any static hosting service (Vercel, Netlify, AWS S3).

---

## 📂 Project Structure

The codebase is organized logically to promote scalability and ease of maintenance.

```
/
├── public/
│   └── favicon.svg              # Application favicon
├── src/
│   ├── components/              # Reusable React components
│   │   ├── GalaxyBackground.tsx
│   │   ├── Layout.tsx
│   │   ├── Modal.tsx
│   │   ├── NotaryFinderTool.tsx
│   │   └── SeoArticle.tsx
│   ├── data/
│   │   └── notaryLocations.ts   # Static data for simulated locations
│   ├── services/
│   │   └── geolocationService.ts# Logic for Geolocation API
│   ├── App.tsx                  # Main application component
│   ├── index.tsx                # Application entry point
│   └── types.ts                 # TypeScript type definitions
├── .gitignore
├── index.html                   # Main HTML file
├── metadata.json                # App metadata for the environment
├── package.json
└── README.md                    # You are here!
```

---

## ⚙️ Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   **Node.js**: Version 18.x or higher is recommended.
-   **npm** or **yarn**: Package manager.

### Local Development

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/hsinidev/simple-notary-finder.git
    cd simple-notary-finder
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port). The server supports Hot Module Replacement (HMR) for a fast development workflow.

4.  **Build for Production:**
    To create an optimized production build:
    ```bash
    npm run build
    ```
    The output will be generated in the `dist/` directory.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.

---

## 👤 Author & Branding

This project was conceived and developed by **HSINI MOHAMED**.

-   **GitHub:** [@hsinidev](https://github.com/hsinidev)
-   **Portfolio:** [doodax.com](https://doodax.com)
-   **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

# 📊 Habit Tracker App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

A clean, modern, and interactive Habit Tracker built with **React** and **Vite**. Designed for creative developers and self-improvers alike, this application helps you track daily habits, visualize your progress over time, and stay consistent through an intuitive, lightweight UI.

---

## ✨ Features

* **✅ Complete Habit Management:** Easily add, edit, and remove your daily habits.
* **📅 Interactive Table UI:** Track your habits across dates with a seamless, clickable table interface.
* **📈 Visual Progress Tracking:** Gain insights into your performance with dynamic score graphs.
* **⚡ Blazing Fast:** Powered by Vite for instantaneous HMR and optimized production builds.
* **🎯 Modular Architecture:** Clean, component-based structure utilizing custom React hooks for scalable state management.
* **🎨 Custom Styling:** Beautiful, responsive, and modular CSS design.

---

## 🛠️ Tech Stack

* **Frontend:** React (JSX)
* **Build Tool:** Vite
* **Styling:** Modular CSS
* **State Management:** Custom React Hooks

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the repository
```bash
git clone [https://github.com/Manthanvinzuda007/habit-tracker.git](https://github.com/Manthanvinzuda007/habit-tracker.git)
cd habit-tracker
```
2. Install dependencies
```Bash
npm install
```
3. Run the development server
```Bash
npm run dev
```
---
Note: The application will be running locally at http://localhost:5173.
---
---
🧠 Architecture & Workflow
The application is designed with separation of concerns in mind, ensuring the logic is abstracted away from the UI.
---
State Management (useHabits.js): A custom React hook handles the core logic for adding, updating, and saving habit states.
---
Date Logic (dateUtils.js): Utility functions abstract the complexities of date handling and formatting.
---
UI Components:
---
HabitTable: Renders the grid layout, displaying habits in rows and dates in columns.
---
Controls: Provides the interface for users to add or modify their habits.
---
ScoreGraph: Visualizes completion trends to keep users motivated.
---

🏗️ Project StructurePlaintexthabit-tracker/
├── public/              # Static assets (icons, favicon)
├── src/
│   ├── components/      # Modular UI components
│   │   ├── Controls/    # Add/edit habit controls
│   │   ├── HabitTable/  # Table UI for tracking habits
│   │   ├── HabitTracker/# Main container component
│   │   └── ScoreGraph/  # Progress visualization
│   ├── hooks/           # Custom React hooks (e.g., useHabits)
│   ├── styles/          # Global and component-scoped styles
│   ├── utils/           # Utility functions (date handling)
│   ├── App.jsx          # Root component
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
└── vite.config.js
📦 ScriptsCommandDescriptionnpm run devStarts the Vite development server.npm run buildCompiles and builds the app for production.npm run previewPreviews the built production app locally.🎯 Future ImprovementsWe are always looking to improve! Here is the roadmap for upcoming features:[ ] 🔐 User Authentication: Secure login for individual user profiles.[ ] ☁️ Cloud Sync: Integration with Firebase or Supabase for cross-device data syncing.[ ] 📱 Mobile Optimization: Enhanced responsive layouts for smaller screens.[ ] 🌙 Dark Mode: A sleek, eye-friendly dark theme toggle.[ ] 📊 Advanced Analytics: Deeper insights, streaks, and monthly summaries.🤝 ContributingContributions, issues, and feature requests are highly welcome! To contribute:Fork the repository.Create your feature branch: git checkout -b feature/AmazingFeatureCommit your changes: git commit -m 'Add some AmazingFeature'Push to the branch: git push origin feature/AmazingFeatureOpen a Pull Request.💡 InspirationThis project was built to help improve consistency, discipline, and self-growth through simple, frictionless daily tracking. Remember: small daily improvements are the key to staggering long-term results.📄 LicenseThis project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.

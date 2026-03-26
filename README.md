# 9-Day Ascend - JEE Main Study Planner
[Dark-themed web app for 9-day JEE prep. Track lectures &amp; PYQs across Physics, Mathematics &amp; Chemistry. Dual progress tracking (overall + subject-wise). Expandable day cards, custom chapters, auto-save. Fully responsive. Perfect for structured JEE preparation.  Tech: HTML5, CSS3, JavaScript, LocalStorage
](https://img.shields.io/badge/license-MIT-blue.svg
https://img.shields.io/badge/Made%2520with-JavaScript-yellow.svg
https://img.shields.io/badge/PRs-welcome-brightgreen.svg

A modern, dark-themed study planner web app designed for JEE Main aspirants following a structured 9-day intensive preparation plan. Track your progress across Physics, Chemistry, and Mathematics with dual progress tracking, chapter-wise checklists, and local storage persistence.

https://via.placeholder.com/800x450?text=9-Day+Ascend+Preview

📋 Table of Contents
Features

Default Study Plan

Live Demo

Screenshots

Technologies Used

Installation

How to Use

Data Persistence

Customization

Responsive Design

Browser Support

Contributing

License

Acknowledgments

🌟 Features
Core Functionality
9-Day Structured Plan: Follows a meticulously designed study schedule with morning, afternoon, and night sessions optimized for JEE Main preparation

Subject-Wise Organization: Separate tabs for Physics, Chemistry, and Mathematics with Mathematics positioned in the middle for intuitive navigation

Dual Progress Tracking:

Overall Progress: Global completion percentage across all three subjects

Subject-Wise Progress: Individual progress bars and percentages for each subject

Lecture & PYQ Tracking: Check off each chapter's lecture completion and PYQs (Previous Year Questions) separately for granular progress monitoring

Interactive Elements
Expandable Day Cards: Click on any day header to expand/collapse session details for a clean, uncluttered interface

Custom Chapters: Add your own topics or extra chapters beyond the default plan with full tracking capabilities

Auto-Save: All progress is automatically saved to browser localStorage - never lose your data

Reset Options: Reset all checkboxes while keeping chapters, or wipe all data to restore the default 9-day plan

Visual Design
Dark Modern UI: Radial gradient background, glassmorphic cards, and neon accent colors

Responsive Layout: Container width set to 80% for optimal reading experience on larger screens

Smooth Animations: Fade transitions, hover effects, and interactive feedback

Progress Indicators: Visual progress bars with percentage completion for each subject and overall

📚 Default Study Plan
The app comes pre-loaded with a comprehensive 9-day JEE Main preparation schedule:

Day	Physics (Morning)	Mathematics (Afternoon)	Chemistry (Night)
Day 1	Electrostatics (Charges & Fields, Potential)	Continuity & Differentiability	Electrochemistry
Day 2	Current Electricity (Kirchhoff's laws)	Application of Derivatives	Chemical Kinetics
Day 3	Magnetic Effects & Magnetism	Integrals (Definite & Indefinite)	p-Block Elements
Day 4	EMI & AC	Differential Equations	Solutions
Day 5	Optics (Ray & Wave)	Matrices & Determinants	Coordination Compounds
Day 6	Modern Physics	Vector & 3D Geometry	Haloalkanes & Haloarenes
Day 7	Semiconductors & Communication	Probability & Statistics	Alcohols, Phenols & Ethers
Day 8	Mock Test Day	Analysis & Revision	Aldehydes, Ketones & Acids
Day 9	Revision Sprint	Formula Revision	Inorganic & Organic Revision
🖥️ Live Demo
Check out the live demo: 9-Day Ascend Live

📸 Screenshots
Main Dashboard
https://via.placeholder.com/600x350?text=Dashboard+View

Physics Panel with Expanded Days
https://via.placeholder.com/600x350?text=Physics+Panel

Progress Tracking
https://via.placeholder.com/600x350?text=Progress+Tracking

🛠️ Technologies Used
HTML5 - Semantic structure and modern markup

CSS3 - Styling with gradients, flexbox, grid, and animations

JavaScript (ES6+) - Dynamic rendering, state management, event handling

Font Awesome 6 - Comprehensive icon library for visual enhancement

Google Fonts (Inter) - Clean, modern typography for optimal readability

LocalStorage API - Client-side data persistence

💻 Installation
Option 1: Clone the Repository
bash
git clone https://github.com/yourusername/9-day-ascend.git
cd 9-day-ascend
Then open index.html in your browser.

Option 2: Download ZIP
Download the ZIP file from the repository

Extract the contents to a folder

Open index.html in any modern web browser

Option 3: Run with Live Server (Recommended for Development)
bash
# Using VS Code Live Server extension
Right-click on index.html → Open with Live Server
🚀 How to Use
Select a Subject: Click on Physics, Mathematics, or Chemistry tabs at the top

View Day Cards: Each day card shows the time slot and chapter title

Expand a Day: Click on any day header to reveal full session details

Track Progress: Check off:

🎥 Lecture checkbox when you complete the video/lecture

📝 PYQs checkbox when you solve previous year questions

Add Custom Chapters: Use the input field at the bottom to add extra topics:

Type the chapter name

Click "Add Custom" or press Enter

Track lectures and PYQs for custom chapters

Monitor Progress: Watch the overall and subject-wise progress bars update in real-time

Reset Options:

Reset all checkboxes: Clears progress but keeps chapters

Wipe all progress: Resets to the original 9-day plan

💾 Data Persistence
All your progress is automatically saved to your browser's localStorage. This means:

✅ Progress persists after page refresh

✅ Progress remains after closing and reopening the browser

✅ No account or internet connection required (after initial load)

✅ Your data stays on your device - completely private

To clear data: Use the "Wipe all progress" button or clear browser localStorage.

🎨 Customization
Modify the 9-Day Plan
Edit the getDefaultPlan() function in the JavaScript section:

javascript
function getDefaultPlan() {
  return {
    physics: {
      days: [
        { dayId: 1, sessions: [{ 
          time: "Morning (7am-10am)", 
          chapter: "Your Custom Chapter", 
          lectureDone: false, 
          pyqDone: false 
        }] }
      ],
      customChapters: []
    }
    // Repeat for chemistry and maths
  };
}
Change Color Scheme
Modify the CSS variables and gradients:

css
/* Primary accent color */
border-color: #3b82f6;  /* Change to your preferred blue */

/* Gradient for progress bars */
background: linear-gradient(90deg, #3b82f6, #a78bfa);
Adjust Container Width
Modify the .app-container CSS:

css
.app-container {
  max-width: 80%;  /* Change to your preferred width */
  width: 80%;
}
📱 Responsive Design
The app is fully responsive and adapts to:

Device	Layout Adjustments
Desktop (1200px+)	Full 80% width, multi-column layout
Tablet (768px-1200px)	90% width, adjusted padding
Mobile (<768px)	95% width, stacked layout, larger touch targets
🌐 Browser Support
Browser	Version	Support
Chrome	60+	✅ Fully Supported
Firefox	55+	✅ Fully Supported
Safari	12+	✅ Fully Supported
Edge	79+	✅ Fully Supported
Opera	50+	✅ Fully Supported
Internet Explorer	-	❌ Not Supported
🤝 Contributing
Contributions are welcome! Here's how you can help:

Bug Reports
Use the issue tracker to report bugs

Include detailed steps to reproduce

Mention browser and device information

Feature Requests
Open an issue with the "enhancement" label

Describe the feature and its benefits

Provide examples if possible

Pull Requests
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

Development Guidelines
Follow existing code style and formatting

Test on multiple browsers and devices

Update documentation for user-facing changes

Keep JavaScript vanilla (no external dependencies)

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2024 9-Day Ascend

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions...
🙏 Acknowledgments
JEE Main Aspirants - For whom this tool was created

Font Awesome - For the beautiful icons

Google Fonts - For the Inter typeface

All Contributors - For making this project better

📞 Contact & Support
GitHub Issues: Report a bug

Email: your.email@example.com

Twitter: @yourhandle

⭐ Show Your Support
If you found this project helpful, please give it a ⭐ on GitHub and share it with fellow JEE aspirants!

Made with ❤️ for JEE aspirants | Happy Studying!

)

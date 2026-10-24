# SIT313 - Task P5: DEV@Deakin Newsletter Feature

A full-stack newsletter subscription feature for the DEV@Deakin platform. The application connects a React frontend with a Node.js/Express backend to deliver automated welcome emails using the SendGrid Email API.

---

## 📌 Project Overview

- **Frontend:** Built with React and Vite. It collects user email input, performs client-side validation, sends an asynchronous `POST` request to the backend server[cite: 2], and displays feedback using `react-toastify`[cite: 2].
- **Backend:** Built with Node.js and Express. It handles the `/subscribe` endpoint[cite: 2, 3], enforces CORS policies[cite: 2], parses JSON payloads[cite: 2], sends transactional emails via SendGrid[cite: 2], and logs HTTP status codes in the terminal[cite: 1, 2].

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, JavaScript, CSS, `react-toastify`[cite: 2]
- **Backend:** Node.js, Express.js, CORS, `dotenv`, `@sendgrid/mail`[cite: 2]
- **Tools & Services:** SendGrid API[cite: 2], Git, VS Code

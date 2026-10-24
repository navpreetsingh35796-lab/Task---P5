# SIT313 - Task P5: DEV@Deakin Newsletter Feature

A full-stack newsletter subscription feature for the DEV@Deakin platform. The application connects a React frontend with a Node.js/Express backend to deliver automated welcome emails using the SendGrid Email API.

---

## 📌 Project Overview

- **Frontend:** Built with React and Vite. It collects user email input, performs client-side validation, sends an asynchronous `POST` request to the backend server, and displays feedback using `react-toastify`.
- **Backend:** Built with Node.js and Express. It handles the `/subscribe` endpoint, enforces CORS policies, parses JSON payloads, sends transactional emails via SendGrid, and logs HTTP status codes in the terminal.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, JavaScript, CSS, `react-toastify`
- **Backend:** Node.js, Express.js, CORS, `dotenv`, `@sendgrid/mail`
- **Tools & Services:** SendGrid API, Git, VS Code

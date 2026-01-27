🎓 VJTI PrePortal - Placement Management System

A full-stack MERN web application designed to streamline the placement process for VJTI students. It serves as a centralized hub for placement reports, student profiles, and peer-to-peer updates.



## 🚀 Features

### 🔐 Authentication & Security
* **Secure User Registration & Login:** Custom authentication system using MongoDB.
* **Session Management:** Persists user login state using Local Storage mechanisms.
* **Password Protection:** Passwords are handled securely, ensuring they are never sent back to the client in plain text.

### 👤 Dynamic User Profiles
* **Profile Management:** Students can edit their bio, name, and profile picture.
* **Resume Integration:** Users can upload resumes (PDFs) directly to the database.
* **Base64 Handling:** Implements file-to-Base64 conversion for storing images and documents directly in MongoDB without external cloud storage.

### 📢 Social Feed (Home)
* **Real-time Updates:** Students can post updates about interview experiences or placement news.
* **Dynamic Authorship:** Posts automatically tag the real name of the logged-in user.
* **Date Stamping:** All posts are timestamped for relevance.

### 📊 Placement Archives (Stats)
* **Digital Archive:** Access 10+ years of VJTI Placement Reports.
* **Optimized Database Storage:** Uses a split-schema approach to store PDFs in MongoDB while keeping the list-view fast (Lazy Loading).
* **One-Click Download:** Custom "Ghost Link" logic to download PDFs on demand.

---

## 🛠️ Tech Stack

### **Frontend (Client)**
* **React.js (Vite):** For building a fast, interactive user interface.
* **Axios:** For handling HTTP requests to the backend API.
* **React Router DOM:** For seamless single-page navigation.
* **CSS Modules:** For responsive and clean styling.

### **Backend (Server)**
* **Node.js & Express.js:** RESTful API architecture.
* **MongoDB & Mongoose:** NoSQL database for flexible data modeling (Users, Posts, Reports).
* **Body-Parser:** Configured for large payload limits (50MB) to handle PDF/Image uploads.

---

## ⚙️ Installation & Setup Guide

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/YourUsername/VJTI-PrePortal.git](https://github.com/YourUsername/VJTI-PrePortal.git)
cd VJTI-PrePortal

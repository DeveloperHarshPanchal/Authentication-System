# 🔐 Authentication System

A complete **production-ready authentication and authorization system** built with **React, Tailwind CSS, Node.js, Express.js, MongoDB, and JWT**.

This project implements modern security practices including **Access Tokens**, **Refresh Tokens**, **Token Rotation**, **OTP Verification**, **Session Management**, and **Multi-Device Logout**, making it suitable for real-world applications.

live at vercel🚀 : https://authentication-system-nine-beta.vercel.app/

---

## ✨ Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Access Token & Refresh Token Architecture
- Refresh Token Rotation
- Secure Token Validation

### Security

- Password Hashing with BCrypt
- HTTP-Only Secure Cookies
- Protected Routes
- Authentication & Authorization Middleware
- Secure Session Handling

### OTP Verification

- Email-Based OTP Generation
- OTP Verification Flow
- OTP Expiration & Validation

### Session Management

- Track User Sessions
- Logout from Current Device
- Logout from All Devices
- Multi-Device Login Support

### Frontend

- Responsive UI with Tailwind CSS
- API Integration using Axios
- React Router DOM Navigation
- Toast Notifications with React Hot Toast
- Modern Icons with Lucide React
- Protected Client Routes
- Loading States & Error Handling

### Database

- MongoDB Integration
- Mongoose Models & Validation
- Persistent Session Storage

---

## 🏗️ Architecture Overview

```text
Frontend (React + Tailwind)
            │
            ▼
Axios API Requests
            │
            ▼
Backend (Node.js + Express)
            │
            ▼
JWT Authentication
            │
 ┌──────────┴──────────┐
 ▼                     ▼
Access Token      Refresh Token
(Short-Lived)    (Long-Lived)
                          │
                          ▼
                   Token Rotation
                          │
                          ▼
             New Access + Refresh Token
                          │
                          ▼
                    MongoDB Database
```

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|----------|
| React | User Interface |
| Tailwind CSS | Styling |
| Axios | API Requests |
| React Router DOM | Routing |
| React Hot Toast | Notifications |
| Lucide React | Icons |

### Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| BCrypt | Password Hashing |
| Nodemailer | Email & OTP Service |
| Cookie Parser | Cookie Management |
| Dotenv | Environment Variables |

---

## 📂 Core Functionalities

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Refresh Token Rotation
- ✅ Email OTP Verification
- ✅ Session Tracking
- ✅ Multi-Device Login Support
- ✅ Logout Current Device
- ✅ Logout All Devices
- ✅ Route Protection Middleware
- ✅ Secure Cookie Handling
- ✅ Password Encryption
- ✅ Toast Notifications
- ✅ Responsive User Interface

---

## 🔒 Security Practices Implemented

- Short-Lived Access Tokens
- Refresh Token Rotation
- Password Hashing with BCrypt
- HTTP-Only Cookies
- Authentication & Authorization Middleware
- Session Invalidation on Logout
- Multi-Device Session Control
- OTP-Based Verification
- Secure Token Validation

---

## 📖 Learning Outcomes

This project demonstrates:

- Authentication vs Authorization
- JWT Authentication Flow
- Refresh Token Strategy
- Token Rotation
- Session Management
- Secure Password Storage
- OTP Verification Systems
- Cookie-Based Authentication
- Protected Routes
- Production-Level Backend Security
- API Integration with Axios

---

## 📁 Project Structure

```text
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── config/
│   │   └── app.js
│   │
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/fullstack-authentication-system.git

cd fullstack-authentication-system
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

Run the backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Run the frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🎯 Why This Project?

Most authentication tutorials stop at basic login and signup functionality. This project focuses on the techniques used in real-world applications:

- Refresh Token Rotation
- Session Management
- Multi-Device Authentication
- OTP Verification
- Secure Cookie Handling
- Protected Routes
- API Integration with Axios
- Production-Level Security Practices

---

## 👨‍💻 Author

**Harsh Panchal**

*MERN Stack Developer | Full Stack Developer*

---

### ⭐ If you found this project helpful, consider giving it a star on GitHub!

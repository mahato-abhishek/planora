

# Planora

### Modern project and task management platform built with Next.js

Planora is a full-stack project management application designed to help users organize projects, manage tasks, and keep track of their work through a clean and responsive dashboard.

**Live Demo:** https://planora-jet.vercel.app/

---

## ✨ Features

* 🔐 User authentication and session management
* 📁 Project management
* ✅ Task creation and management
* 📅 Task scheduling
* 👤 User-specific data
* 📊 Dashboard and project overview
* 📱 Responsive interface
* 🧩 Reusable React components

---

## 🛠️ Tech Stack

**Frontend**

* Next.js
* React
* TypeScript
* Tailwind CSS

**Backend**

* Next.js Server Actions
* Server-side data handling

**Database**

* PostgreSQL
* Neon
* Drizzle ORM

**Authentication**

* Better Auth

---

## 🏗️ Architecture

```text
Next.js App Router
       │
       ├── React UI
       │
       ├── Server Actions
       │
       ├── Better Auth
       │
       └── Drizzle ORM
                │
                ▼
          Neon PostgreSQL
```

---

## 📸 Screenshots

### Dashboard

<img width="1906" height="1018" alt="dash-light" src="https://github.com/user-attachments/assets/6ea5cfe0-6517-4a18-b6f6-fb44fd1a327a" />


### Projects

<img width="1903" height="1018" alt="projects-light" src="https://github.com/user-attachments/assets/1a7c1924-8204-47d2-a805-449e43bdb15a" />


### Task Management

<img width="1904" height="1025" alt="tasks-light" src="https://github.com/user-attachments/assets/0458b7ad-4cb7-4066-ba30-df70abec086b" />


---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* PostgreSQL / Neon database

### Installation

```bash
git clone https://github.com/mahato-abhishek/planora.git
cd planora
npm install
```

Create a `.env` file with the required environment variables.

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

---

## 💡 What I Learned

Building Planora gave me practical experience with:

* Next.js App Router architecture
* Server-side data handling
* Authentication and sessions
* Relational database design
* Type-safe database queries with Drizzle
* Building reusable React components
* Managing authenticated user-specific data
* Designing responsive application dashboards

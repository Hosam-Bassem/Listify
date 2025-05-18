# ✅ Listify

A modern and minimalist to-do list application built using **React**, with persistent data storage powered by **JSON Server**. Easily manage your daily tasks with real-time search, checkbox completion, and dynamic UI updates.

---

## 🚀 Features

- ✔️ Add, check, uncheck, and delete tasks
- 🔍 Live search filtering
- 💾 Persistent storage with `json-server` (mock REST API)
- ⚛️ Built using React functional components and hooks
- 🧼 Clean and readable code structure

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hosam-Bassem/Listify.git
   cd Listify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## ▶️ Running the App

1. **Start JSON Server**
   ```bash
   npx json-server --watch data/db.json --port 3500
   ```

2. **Start React App**
   ```bash
   npm start
   ```

Visit the app at: [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
root/
├── data/
│   └── db.json             # JSON Server mock database
├── src/
│   ├── AddItem.js
│   ├── apiRequest.js
│   ├── App.js
│   ├── Content.js
│   ├── Footer.js
│   ├── Header.js
│   ├── ItemList.js
│   ├── LineItem.js
│   ├── SearchItem.js
│   └── index.js
├── public/
│   └── ...
├── package.json
└── README.md
```

---

## 🧠 Key Concepts Used

- `useState`, `useEffect`, `useRef` React Hooks
- Controlled component inputs
- Dynamic rendering with conditional logic
- Custom async API utility (`apiRequest.js`)
- Minimalist, component-driven UI structure

---

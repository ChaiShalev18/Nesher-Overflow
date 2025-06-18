# 🦅 Nesher Overflow

A full-stack Q&A web application inspired by Stack Overflow. Built for internal knowledge sharing with authentication, role-based permissions, admin tools, and a modern UI.

---

## 🚀 Features

### 👥 User Roles
| Role  | Capabilities |
|-------|-------------|
| Guest | View questions and answers |
| User  | Register, login, ask questions, answer, vote on answers, delete own content, favorite questions |
| Admin | All user permissions + delete any content, ban/unban users, view user list |

### ✅ Core Functionality
- JWT Authentication (login, register, logout)
- Ask and answer questions
- Vote on answers (1 vote per user per answer)
- Delete own questions/answers
- Sort answers by date or votes
- Favorite questions
- Lazy loading (React Query)
- Highlight own content
- SPA with React Router
- Admin dashboard to manage users and bans

---

## 🛠️ Tech Stack

| Layer     | Technology                           |
|-----------|--------------------------------------|
| Frontend  | React + Vite + TypeScript + MUI 5    |
| Backend   | Express + TypeScript + Mongoose      |
| Auth      | JWT                                   |
| DB        | MongoDB                               |
| Styling   | MUI (Material UI 5)                   |
| Dev Tools | ESLint 9 + Prettier + Nodemon         |
| Infra     | Monorepo (`client/` + `server/`)      |

---

## 📦 Project Structure

```
Nesher-Overflow/
├── client/               # React app (Vite + MUI + TS)
├── server/               # Express API (TS + Mongoose)
├── common/ (optional)    # Shared types/functions
├── .env                  # Environment variables
├── README.md             # You are here 👋
```

---

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/nesher-overflow.git
cd nesher-overflow
```

### 2. Setup the server

```bash
cd server
npm install
npm run dev
```

> Make sure to add your `.env` file with Mongo URI and JWT secrets

### 3. Setup the client

```bash
cd ../client
npm install
npm run dev
```

---

## 📋 Scripts

| Script         | Description                         |
|----------------|-------------------------------------|
| `npm run dev`  | Start dev server (client or server) |
| `npm run lint` | Run ESLint                          |
| `npm run format` | Format code with Prettier        |

---

## ⚙️ ESLint + Prettier

Project is configured with **ESLint v9 Flat Config** and Prettier.  
Rules and ignores are managed in `eslint.config.js`.

> Run `npm run lint:fix` to auto-fix formatting issues.

---

## 🛡️ Environment Variables

You need to configure `.env` files in both `client/` and `server/`.

Example `.env` for `server/`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nesher
JWT_SECRET=your_jwt_secret_here
```

---

## ✅ Roadmap

- [x] Auth system (JWT)
- [x] Ask & answer questions
- [x] Voting on answers
- [x] Role-based access (guest/user/admin)
- [x] Admin panel for bans
- [x] Lazy loading with react-query
- [ ] Notifications system (optional)
- [ ] Reputation system (future)

---

## 📄 License

This project is licensed under the MIT License.

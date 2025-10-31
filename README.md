# 🚀 Ritesh Kumar — Portfolio Website

A modern, clean, and responsive personal portfolio built with React and Vite. It showcases projects, skills, and includes a contact form powered by EmailJS.

- Live Demo: (https://riteshyadav.vercel.app/)
- Author: Ritesh Kumar

---

## ✨ Features

- Home, About, Projects, and Contact pages
- Fully responsive layout (mobile-first)
- Modern UI/UX with smooth animations
- Fast and lightweight build with Vite
- Contact form using EmailJS (no backend required)

---

## 🛠️ What’s Used (Tech Stack)

Languages:
- JavaScript
- CSS3 (Flexbox, Grid, Animations)
- HTML5

Frontend:
- React
- Vite
- React Router DOM

Utilities:
- EmailJS (@emailjs/browser)
- Axios (for HTTP requests, if needed)
- ESLint (with React plugins)

---

## 📂 Project Structure

```
/
├── src/
│   ├── assets/             # Images and static assets
│   ├── components/         # Reusable UI components
│   ├── pages/              # Home, About, Projects, Contact
│   ├── App.jsx             # App root with routes
│   ├── App.css             # Component-level styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static public assets
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
# 1) Clone the repository
git clone https://github.com/ritesh-developer/My-Portfolio.git
cd My-Portfolio

# 2) Install dependencies
npm install

# 3) Start the development server
npm run dev
```

Open the URL shown in your terminal (typically http://localhost:5173).

---

## 📧 EmailJS Setup (Contact Form)

1) Create an account at EmailJS: https://www.emailjs.com  
2) Create a service and a template  
3) Add your EmailJS credentials in the contact component (or environment variables):

Example:
```js
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY  = 'your_public_key';
```

Tip: You can also use a `.env` file for Vite:
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

And read them via `import.meta.env.VITE_...`.

---

## 📜 Available Scripts

- npm run dev — start dev server
- npm run build — production build
- npm run preview — preview production build locally
- npm run lint — run ESLint checks

---

## 🚀 Deployment

You can deploy the built `dist/` folder to any static hosting:

- Vercel
  ```bash
  npm i -g vercel
  npm run build
  vercel
  ```

- Netlify
  ```bash
  npm run build
  # Drag and drop the dist/ folder into Netlify dashboard
  ```

- GitHub Pages (via gh-pages)
  ```bash
  npm install --save-dev gh-pages
  # Add scripts:
  # "predeploy": "npm run build",
  # "deploy": "gh-pages -d dist"
  npm run deploy
  ```

---


## 📝 License

This project is open source under the MIT License.

---

Built with ❤️ by Ritesh Kumar

# 🚀 Ritesh Kumar - Portfolio Website# Ritesh Kumar - Portfolio Website# My Portfolio - Full Stack MERN Application



A modern, clean, and responsive personal portfolio website built with React and Vite. This portfolio showcases my projects, skills, and provides an easy way for visitors to contact me through an integrated email system.



![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)A modern, responsive portfolio website showcasing projects, skills, and professional experience.A complete portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Features admin authentication, project management, and a contact form.

![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)

![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-00BFA5)

![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features## 🚀 Features

## ✨ Features



- 🏠 **Home Page** - Professional introduction and welcome section

- 👤 **About Page** - Background, skills, and expertise- **No Database Required** - Runs completely without MongoDB using in-memory storage- **Public Pages**: Home, About, Projects showcase, Contact form

- 💼 **Projects Showcase** - Detailed project portfolio with technologies and highlights

- 📧 **Contact Form** - EmailJS-powered contact form (no backend required!)- **Modern UI** - Responsive design with smooth animations and glassmorphism effects- **Admin Dashboard**: Secure login with JWT authentication, full CRUD operations for projects

- 📱 **Fully Responsive** - Works seamlessly on all devices

- 🎨 **Modern UI/UX** - Clean design with smooth animations and hover effects- **Project Showcase** - Display your projects with tech stack and links- **Contact System**: Visitors can send messages, admin can view and manage them

- ⚡ **Fast & Lightweight** - Frontend-only architecture, no database or backend server

- **Contact Form** - Allow visitors to send messages- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Admin Dashboard** - Manage projects and view contact messages- **RESTful API**: Well-structured backend with proper error handling and validation

- **Frontend Framework:** React 19.1.1

- **Build Tool:** Vite 7.1.7- **JWT Authentication** - Secure admin panel with token-based auth

- **Routing:** React Router DOM 6.20.1

- **Email Service:** EmailJS (@emailjs/browser 4.4.1)- **Pre-loaded Projects** - Automatically includes your resume projects## 📋 Tech Stack

- **Styling:** Pure CSS3 with modern features (Flexbox, Grid, Animations)

- **Code Quality:** ESLint with React plugins



## 📂 Project Structure## 🛠️ Tech Stack### Frontend



```- **React 18+** with functional components and hooks

My_portfolio/

├── frontend/**Frontend:**- **React Router** for navigation

│   ├── src/

│   │   ├── components/- React 19.1.1- **Axios** for API calls

│   │   │   └── Navigation.jsx      # Navigation bar component

│   │   ├── pages/- React Router 6.20.1- **Vite** for fast development and optimized builds

│   │   │   ├── Home.jsx            # Home page

│   │   │   ├── About.jsx           # About page- Axios 1.6.2- **CSS3** with modern responsive design

│   │   │   ├── Projects.jsx        # Projects showcase

│   │   │   └── Contact.jsx         # Contact form (EmailJS)- Vite 7.1.7

│   │   ├── assets/                 # Images and static assets

│   │   ├── App.jsx                 # Main app component- CSS3 with animations### Backend

│   │   ├── App.css                 # Global styles

│   │   ├── main.jsx                # App entry point- **Node.js** with Express framework

│   │   └── index.css               # Base CSS

│   ├── public/                     # Public assets**Backend:**- **MongoDB** with Mongoose ODM

│   ├── index.html                  # HTML template

│   ├── package.json                # Dependencies- Node.js- **JWT** for authentication (7-day expiry)

│   └── vite.config.js              # Vite configuration

├── Ritesh-Kumar Resume.pdf         # Resume file- Express 5.1.0- **bcrypt** for password hashing

└── README.md                       # This file

```- JWT Authentication- **express-validator** for request validation



## 🚀 Getting Started- bcrypt for password hashing- **CORS** enabled for cross-origin requests



### Prerequisites- In-Memory Storage (No Database!)



- **Node.js** (v14 or higher)## 📁 Project Structure

- **npm** or **yarn**

## 📋 Prerequisites

### Installation

```

1. **Clone the repository**

   ```bash- Node.js (v14 or higher)My_portfolio/

   git clone https://github.com/yourusername/My_portfolio.git

   cd My_portfolio- npm or yarn├── backend/

   ```

│   ├── config/

2. **Navigate to frontend directory**

   ```bash**Note:** MongoDB is NOT required! This project uses in-memory storage.│   │   └── db.js                 # MongoDB connection

   cd frontend

   ```│   ├── middleware/



3. **Install dependencies**## ⚡ Quick Start│   │   └── auth.js                # JWT authentication middleware

   ```bash

   npm install│   ├── models/

   ```

1. **Clone the repository**│   │   ├── User.js                # Admin user model

### Running the Application

   ```bash│   │   ├── Project.js             # Project model

1. **Start the development server**

   ```bash   git clone <your-repo-url>│   │   └── ContactMessage.js      # Contact message model

   npm run dev

   ```   cd My_portfolio│   ├── routes/



2. **Open your browser**   ```│   │   ├── auth.js                # Authentication routes

   - Navigate to `http://localhost:5173` (or the port shown in terminal)

│   │   ├── projects.js            # Project CRUD routes

3. **Build for production**

   ```bash2. **Setup Backend**│   │   └── contact.js             # Contact form routes

   npm run build

   ```   ```bash│   ├── scripts/

   - The production-ready files will be in the `dist/` folder

   cd backend│   │   └── seedAdmin.js           # Create initial admin user

### EmailJS Configuration

   npm install│   ├── .env                       # Environment variables

The contact form uses EmailJS. To set up your own:

   npm run dev│   ├── server.js                  # Express server setup

1. Create an account at [EmailJS](https://www.emailjs.com/)

2. Create an email service and template   ```│   └── package.json

3. Update the credentials in `frontend/src/pages/Contact.jsx`:

   ```javascript   The backend will run on http://localhost:5000└── frontend/

   const EMAILJS_SERVICE_ID = 'your_service_id';

   const EMAILJS_TEMPLATE_ID = 'your_template_id';    ├── src/

   const EMAILJS_PUBLIC_KEY = 'your_public_key';

   ```3. **Setup Frontend** (in a new terminal)    │   ├── api/



## 🎨 Features in Detail   ```bash    │   │   └── api.js             # Axios API service



### 📧 Contact Form   cd frontend    │   ├── components/

- Real-time form validation

- Success/error feedback messages   npm install    │   │   ├── Navigation.jsx     # Navigation bar

- EmailJS integration (200 free emails/month)

- No backend required   npm run dev    │   │   ├── ProjectCard.jsx    # Project display card

- Direct email delivery to your inbox

   ```    │   │   └── ProjectForm.jsx    # Project create/edit form

### 💼 Projects Showcase

- Hardcoded projects with detailed information   The frontend will run on http://localhost:5173    │   ├── pages/

- Technology tags for each project

- Key features/highlights section    │   │   ├── Home.jsx           # Landing page

- Responsive boxed card layout

- Hover animations and gradient borders4. **Access the Application**    │   │   ├── About.jsx          # About page

- Links to live demos and GitHub repositories

   - Portfolio: http://localhost:5173    │   │   ├── Projects.jsx       # Projects listing

### 🎯 Navigation

- Smooth routing with React Router   - Admin Login: http://localhost:5173/admin/login    │   │   ├── Contact.jsx        # Contact form

- Active link highlighting

- Mobile-responsive menu   - Admin Dashboard: http://localhost:5173/admin/dashboard    │   │   ├── AdminLogin.jsx     # Admin login

- Clean and intuitive design

    │   │   └── AdminDashboard.jsx # Admin project management

## 📊 Projects Featured

## 🔑 Default Admin Credentials    │   ├── App.jsx                # Main app with routing

Currently showcasing:

1. **SmartNotes - AI Summarizer** - AI-powered note-taking app with Google Vertex AI    │   ├── App.css                # Styles

2. **EtchASketch** - Interactive drawing application with Canvas API

- **Email:** admin@portfolio.com    │   └── main.jsx               # React entry point

## 🌐 Deployment

- **Password:** Admin@123    ├── .env                       # Frontend environment variables

### Deploy to Vercel (Recommended)

    ├── package.json

1. **Install Vercel CLI**

   ```bash## 📁 Project Structure    └── vite.config.js

   npm i -g vercel

   ``````



2. **Deploy**```

   ```bash

   cd frontendMy_portfolio/## 🛠️ Setup Instructions

   vercel

   ```├── backend/



### Deploy to Netlify│   ├── data/### Prerequisites



1. **Build the project**│   │   └── storage.js          # In-memory data storage

   ```bash

   npm run build│   ├── middleware/- **Node.js** (v14 or later)

   ```

│   │   └── auth.js             # JWT authentication- **npm** or **yarn**

2. **Drag and drop** the `dist/` folder to [Netlify](https://app.netlify.com/)

│   ├── routes/- **MongoDB** (local installation or MongoDB Atlas)

### Deploy to GitHub Pages

│   │   ├── auth.js             # Login routes

1. **Install gh-pages**

   ```bash│   │   ├── contact.js          # Contact form routes### 1. Clone the Repository

   npm install --save-dev gh-pages

   ```│   │   └── projects.js         # Project CRUD routes



2. **Add to package.json**│   ├── .env                    # Environment variables```bash

   ```json

   "scripts": {│   ├── package.jsongit clone https://github.com/your-username/my-portfolio.git

     "predeploy": "npm run build",

     "deploy": "gh-pages -d dist"│   └── server.js               # Express servercd my-portfolio

   }

   ```├── frontend/```



3. **Deploy**│   ├── src/

   ```bash

   npm run deploy│   │   ├── api/### 2. Backend Setup

   ```

│   │   │   └── api.js          # Axios API service

## 🔧 Customization

│   │   ├── components/```bash

### Adding New Projects

│   │   │   ├── Navigation.jsxcd backend

Edit `/frontend/src/pages/Projects.jsx` and add to the `projects` array:

│   │   │   ├── ProjectCard.jsxnpm install

```javascript

{│   │   │   └── ProjectForm.jsx```

  id: 3,

  title: 'Your Project Name',│   │   ├── pages/

  subtitle: 'Project Tagline',

  duration: '2025',│   │   │   ├── Home.jsx**Configure Environment Variables** (`backend/.env`):

  description: 'Detailed project description...',

  tech: ['React', 'Node.js', 'MongoDB'],│   │   │   ├── About.jsx

  link: 'https://live-demo-url.com',

  githubLink: 'https://github.com/yourusername/project',│   │   │   ├── Projects.jsx```env

  highlights: [

    'Feature 1',│   │   │   ├── Contact.jsxMONGO_URI=mongodb://127.0.0.1:27017/my_portfolio_db

    'Feature 2',

    'Feature 3'│   │   │   ├── AdminLogin.jsxPORT=5000

  ]

}│   │   │   └── AdminDashboard.jsxNODE_ENV=development

```

│   │   ├── App.jsx

### Updating Contact Information

│   │   ├── App.css# JWT Secret - Change this to a random string in production

Edit `/frontend/src/pages/Contact.jsx` to update your:

- Email address│   │   └── main.jsxJWT_SECRET=your_super_secret_jwt_key_change_this_in_production

- Phone number

- LinkedIn profile│   ├── package.json

- EmailJS credentials

│   └── vite.config.js# Admin credentials for seeding (optional)

### Styling

└── README.mdADMIN_NAME=Admin

- **Global styles:** `frontend/src/index.css`

- **Component styles:** `frontend/src/App.css````ADMIN_EMAIL=admin@portfolio.com

- **Color scheme:** Modify CSS variables in `App.css`

ADMIN_PASSWORD=Admin@123

## 📈 Performance

## 🎨 Pre-loaded Projects```

- ⚡ Fast initial load with Vite

- 📦 Optimized production build

- 🎨 CSS-only animations (no JS libraries)

- 🚀 No backend = No server costsYour portfolio comes with 2 projects from your resume:**Create Admin User**:

- 💾 Static hosting compatible



## 🔒 Security

1. **SmartNotes - AI Summarizer**```bash

- ✅ Frontend-only architecture (no sensitive data exposure)

- ✅ EmailJS rate limiting (200 emails/month)   - AI-powered note-taking with Google Vertex AInpm run seed

- ✅ Input validation on contact form

- ✅ No database or backend to secure   - Tech: React, TypeScript, Tailwind CSS, Framer Motion, Supabase```



## 📜 Available Scripts



In the `frontend/` directory:2. **EtchASketch**This creates an admin user with credentials from your `.env` file.



- **`npm run dev`** - Start development server   - Dynamic drawing application

- **`npm run build`** - Build for production

- **`npm run preview`** - Preview production build locally   - Tech: HTML, CSS, JavaScript, Canvas API### 3. Frontend Setup

- **`npm run lint`** - Run ESLint code checks



## 📝 License

## 🔧 How It Works (No Database Mode)```bash

This project is open source and available under the **MIT License**.

cd ../frontend

## 📞 Contact

All data is stored in `backend/data/storage.js` using JavaScript arrays:npm install

**Ritesh Kumar**

- 📧 Email: [riteshraj.developer@gmail.com](mailto:riteshraj.developer@gmail.com)- **Projects**: Pre-loaded with your resume projects```

- 💼 LinkedIn: [linkedin.com/in/ritesh8](https://www.linkedin.com/in/ritesh8/)

- 📱 Phone: +91 9060025222- **Admin User**: Default admin credentials



## 🙏 Acknowledgments- **Contact Messages**: Stored temporarily in memory**Configure Environment Variables** (`frontend/.env`):



- [EmailJS](https://www.emailjs.com/) - For the email service

- [React](https://react.dev/) - Frontend framework

- [Vite](https://vitejs.dev/) - Build tool⚠️ **Important:** Data is NOT persistent! When you restart the server, any changes will be lost.```env

- Icons and design inspiration from various open-source projects

VITE_API_BASE_URL=http://localhost:5000

---

To add more projects permanently, edit the `projects` array in `backend/data/storage.js`.```

**⭐ If you like this portfolio, feel free to fork it and create your own!**



Built with ❤️ by Ritesh Kumar | © 2025 All Rights Reserved

## 📝 API Endpoints### 4. Start MongoDB



### Public RoutesMake sure MongoDB is running on your system:

- `GET /api/projects` - Get all projects

- `GET /api/projects/:id` - Get single project```bash

- `POST /api/contact` - Submit contact message# macOS (if installed via Homebrew)

- `POST /api/auth/login` - Admin loginbrew services start mongodb-community



### Protected Routes (Admin Only)# Or start manually

- `POST /api/projects` - Create projectmongod

- `PUT /api/projects/:id` - Update project```

- `DELETE /api/projects/:id` - Delete project

- `GET /api/contact` - View contact messages### 5. Run the Application

- `PATCH /api/contact/:id/status` - Update message status

- `DELETE /api/contact/:id` - Delete message**Terminal 1 - Backend**:



## 🎯 Features```bash

cd backend

### Frontendnpm run dev

- Smooth animations (fadeIn, slideIn, typing effects)```

- Glassmorphism design

- Responsive layoutBackend will run on `http://localhost:5000`

- Form validation

- Error handling**Terminal 2 - Frontend**:

- Protected routes

```bash

### Backendcd frontend

- JWT token authentication (7-day expiry)npm run dev

- Input validation```

- Error handling middleware

- CORS enabledFrontend will run on `http://localhost:5173`

- In-memory storage

## 📚 API Documentation

## 🚀 Deployment

### Authentication

### Frontend (Netlify/Vercel)

```bash**POST** `/api/auth/login`

cd frontend- Login as admin

npm run build- Body: `{ "email": "admin@portfolio.com", "password": "Admin@123" }`

# Deploy the 'dist' folder- Returns: JWT token valid for 7 days

```

**POST** `/api/auth/verify`

### Backend (Render/Railway/Heroku)- Verify token validity

```bash- Headers: `Authorization: Bearer <token>`

cd backend

npm start### Projects

# Set environment variables in hosting platform

```**GET** `/api/projects`

- Get all projects (public)

## 📄 License

**GET** `/api/projects/:id`

MIT License - feel free to use this for your own portfolio!- Get single project (public)



## 👤 Author**POST** `/api/projects`

- Create new project (admin only)

**Ritesh Kumar**- Headers: `Authorization: Bearer <token>`

- Email: riteshraj.developer@gmail.com- Body: `{ "title": "...", "description": "...", "tech": [...], "link": "...", "githubLink": "..." }`

- Phone: +919060025222

- Portfolio: [Your Domain]**PUT** `/api/projects/:id`

- Update project (admin only)

---- Headers: `Authorization: Bearer <token>`



Built with ❤️ using React, Express, and No Database!**DELETE** `/api/projects/:id`

- Delete project (admin only)
- Headers: `Authorization: Bearer <token>`

### Contact

**POST** `/api/contact`
- Submit contact form (public)
- Body: `{ "name": "...", "email": "...", "message": "..." }`

**GET** `/api/contact`
- Get all messages (admin only)
- Headers: `Authorization: Bearer <token>`

## 🧪 Testing the API with curl

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@portfolio.com","password":"Admin@123"}'
```

### Get Projects
```bash
curl http://localhost:5000/api/projects
```

### Create Project (replace YOUR_TOKEN)
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "My Awesome Project",
    "description": "A cool project built with MERN stack",
    "tech": ["React", "Node.js", "MongoDB"],
    "link": "https://example.com",
    "githubLink": "https://github.com/user/repo"
  }'
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great portfolio!"
  }'
```

## 📱 Frontend Routes

- `/` - Home page
- `/about` - About page
- `/projects` - Projects showcase
- `/contact` - Contact form
- `/admin` - Admin login
- `/admin/dashboard` - Admin dashboard (protected)

## 🔐 Default Admin Credentials

```
Email: admin@portfolio.com
Password: Admin@123
```

**⚠️ IMPORTANT**: Change these credentials after first login in a production environment!

## 🚀 Production Deployment

### Build Frontend

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`. The backend is already configured to serve these static files when `NODE_ENV=production`.

### Environment Variables for Production

Update your `.env` files with production values:
- Use a strong `JWT_SECRET`
- Update `MONGO_URI` to your production MongoDB connection string
- Set `NODE_ENV=production`
- Update `VITE_API_BASE_URL` to your production API URL

## 📝 NPM Scripts

### Backend
- `npm start` - Start server (production)
- `npm run dev` - Start with nodemon (development)
- `npm run seed` - Create admin user

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Your Name**
- Portfolio: [Your Website]
- GitHub: [@your-username](https://github.com/your-username)

---

Built with ❤️ using the MERN Stack


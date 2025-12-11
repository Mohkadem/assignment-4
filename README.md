# Portfolio Website - Assignment 4

A modern, responsive portfolio website built with React and Vite, featuring dynamic content from external APIs, smooth animations, and a fully responsive design.

## 🚀 Features

- **Responsive Design**: Fully mobile-responsive with hamburger menu navigation
- **Dark/Light Mode**: Toggle between dark and light themes
- **Dynamic Content**: 
  - Random quotes fetched from API Ninjas
  - GitHub repositories displayed with sorting and search functionality
- **Smooth Animations**: GSAP-powered animations for enhanced user experience
- **Modern UI**: Clean, modern interface built with TailwindCSS

## 📋 Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Configuration](#api-configuration)
- [Deployment](#deployment)
- [Features Breakdown](#features-breakdown)

## 🛠 Technologies Used

### Frontend
- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **TailwindCSS 4.1.17** - Utility-first CSS framework
- **GSAP 3.13.0** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **CORS** - Cross-origin resource sharing
- **Axios** - HTTP client for API calls

## 📁 Project Structure

```
assignment-4/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables (create this)
├── src/
│   ├── components/
│   │   ├── Header.jsx    # Navigation header with mobile menu
│   │   ├── Hero.jsx      # Hero section with animations
│   │   ├── Work.jsx      # GitHub repos display
│   │   ├── Steps.jsx     # Process steps section
│   │   ├── Contact.jsx   # Contact form with quotes
│   │   ├── Card.jsx      # Repository card component
│   │   └── ThemeToggle.jsx # Dark/light mode toggle
│   ├── constants/
│   │   └── index.js      # Constants and API configuration
│   ├── assets/           # Images and SVGs
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── dist/                 # Production build
├── package.json          # Frontend dependencies
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 💻 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assignment-4
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3001
   QUOTE_API_KEY=your_api_ninjas_api_key
   GITHUB_USERNAME=your_github_username
   ```

   For the frontend, create a `.env` file in the root directory (optional):
   ```env
   VITE_API_BASE_URL=http://localhost:3001
   ```

## 🎯 Usage

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:3001`

2. **Start the frontend dev server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Production Build

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

## 🔧 API Configuration

The application uses environment-aware API configuration:

- **Development**: Automatically uses `http://localhost:3001`
- **Production**: Uses `https://assignment-4-4xu4.onrender.com` (or set `VITE_API_BASE_URL`)

The API base URL is configured in `constants/index.js` and automatically switches based on the environment.

### API Endpoints

#### Backend Endpoints

- `GET /quote` - Fetches a random quote from API Ninjas
- `GET /repo` - Fetches GitHub repositories for the configured username

## 🚀 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard (if needed):
   - `VITE_API_BASE_URL` - Your backend URL
4. Deploy

### Backend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variables:
   - `QUOTE_API_KEY`
   - `GITHUB_USERNAME`
   - `PORT` (optional, defaults to 3001)

## ✨ Features Breakdown

### 1. Header Component
- Sticky navigation bar
- Responsive hamburger menu for mobile
- Smooth scroll to sections
- Theme toggle integration

### 2. Hero Section
- Animated text with GSAP
- Rotating tech icons (React, JavaScript, TailwindCSS, Figma)
- Responsive layout

### 3. Work Section
- Displays GitHub repositories
- Search functionality
- Sort by date (ascending/descending)
- Pagination with navigation buttons
- Responsive card grid (1 on mobile, 2 on tablet, 3 on desktop)

### 4. Steps Section
- Three-step process display
- Icon-based cards
- Responsive layout

### 5. Contact Section
- Contact form with email validation
- Dynamic quotes from API
- Responsive side-by-side layout

## 🎨 Styling

The project uses TailwindCSS for styling with custom CSS utilities. The design includes:
- Dark/light mode support
- Smooth transitions
- Responsive breakpoints (mobile, tablet, desktop)
- Modern glassmorphism effects

## 📝 Notes

- The backend requires API keys for the quote API (API Ninjas)
- GitHub username must be set in environment variables
- CORS is enabled for development and production
- The app automatically detects development vs production environment

## 🤝 Contributing

This is an assignment project. For questions or issues, please contact the developer.

## 📄 License

This project is created for educational purposes.

---

**Author**: Moh  
**Course**: SWE 363 - Web Development  
**Institution**: KFUPM


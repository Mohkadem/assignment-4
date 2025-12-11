# Portfolio Website - Project Report

**Course**: SWE 363 - Web Development  
**Assignment**: Assignment 4  
**Student**: Moh  
**Institution**: King Fahd University of Petroleum and Minerals (KFUPM)  
**Date**: 2024

---

## 1. Introduction

This project is a modern, responsive portfolio website built using React and Express.js. The website showcases my work, displays GitHub repositories dynamically, and includes interactive features such as a contact form with random quotes. The project demonstrates proficiency in modern web development technologies, API integration, and responsive design principles.

### 1.1 Project Objectives

The main objectives of this project were to:
- Create a fully functional portfolio website
- Integrate external APIs (GitHub API and Quotes API)
- Implement a responsive design that works on all devices
- Build a backend server to handle API requests
- Deploy both frontend and backend to production

### 1.2 Scope

The portfolio website includes:
- A responsive navigation header with mobile menu
- Hero section with animated elements
- Work section displaying GitHub repositories
- Steps section explaining the development process
- Contact form with dynamic quotes
- Dark/light theme toggle

---

## 2. Technologies and Tools

### 2.1 Frontend Technologies

- **React 19.1.1**: Modern JavaScript library for building user interfaces
- **Vite 7.1.7**: Fast build tool and development server
- **TailwindCSS 4.1.17**: Utility-first CSS framework for rapid UI development
- **GSAP 3.13.0**: Professional animation library for smooth animations
- **React Icons**: Comprehensive icon library
- **Axios**: Promise-based HTTP client

### 2.2 Backend Technologies

- **Node.js**: JavaScript runtime environment
- **Express 5.1.0**: Minimal web framework for Node.js
- **CORS**: Middleware for enabling cross-origin requests
- **Axios**: For making HTTP requests to external APIs

### 2.3 Development Tools

- **Git**: Version control system
- **ESLint**: Code linting tool
- **Vercel**: Frontend deployment platform
- **Render**: Backend deployment platform

---

## 3. System Architecture

### 3.1 Architecture Overview

The application follows a client-server architecture:

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│   Browser   │ ──────> │   Frontend   │ ──────> │   Backend   │
│  (Client)   │ <────── │   (React)    │ <────── │  (Express)  │
└─────────────┘         └──────────────┘         └─────────────┘
                                                         │
                                                         ▼
                                                ┌──────────────┐
                                                │ External APIs│
                                                │ (GitHub, API  │
                                                │   Ninjas)    │
                                                └──────────────┘
```

### 3.2 Component Structure

The frontend is organized into reusable React components:

- **Header**: Navigation bar with mobile menu
- **Hero**: Landing section with animations
- **Work**: GitHub repositories display
- **Steps**: Process explanation section
- **Contact**: Contact form and quotes
- **Card**: Reusable repository card component
- **ThemeToggle**: Dark/light mode switcher

### 3.3 API Endpoints

The backend provides two main endpoints:

1. **GET /quote**: Fetches a random quote from API Ninjas
2. **GET /repo**: Retrieves GitHub repositories for a specific user

---

## 4. Implementation Details

### 4.1 Frontend Implementation

#### 4.1.1 Responsive Design

The website is fully responsive, adapting to different screen sizes:

- **Mobile (< 640px)**: Single column layout, hamburger menu, stacked cards
- **Tablet (640px - 1024px)**: Two-column layouts, expanded navigation
- **Desktop (> 1024px)**: Three-column layouts, full navigation bar

Key responsive features:
- Mobile hamburger menu with slide-in navigation
- Dynamic cards per page (1 on mobile, 2 on tablet, 3 on desktop)
- Flexible grid layouts using TailwindCSS
- Responsive typography and spacing

#### 4.1.2 Animations

GSAP (GreenSock Animation Platform) is used for smooth animations:

- Text splitting and reveal animations in Hero section
- Rotating tech icons along a circular path
- Fade-in and slide-up animations on scroll
- Smooth transitions for theme switching

#### 4.1.3 State Management

React hooks are used for state management:
- `useState` for component-level state
- `useEffect` for side effects and API calls
- `useMemo` for performance optimization
- `useCallback` for memoized functions

### 4.2 Backend Implementation

#### 4.2.1 Server Setup

The Express server is configured with:
- CORS middleware for cross-origin requests
- Environment variable support using dotenv
- Error handling for API failures
- Fallback responses for better user experience

#### 4.2.2 API Integration

**GitHub API Integration:**
- Fetches repositories for a configured username
- Returns repository data including name, URL, and creation date
- Handles errors gracefully

**Quotes API Integration:**
- Integrates with API Ninjas for random quotes
- Includes fallback quotes if API fails
- Returns formatted quote and author information

### 4.3 Environment Configuration

The application uses environment-aware configuration:

```javascript
export const API_BASE_URL = 
    import.meta.env.VITE_API_BASE_URL || 
    (import.meta.env.DEV ? "http://localhost:3001" : "https://assignment-4-4xu4.onrender.com");
```

This allows:
- Automatic localhost usage in development
- Production URL in deployed environments
- Override capability via environment variables

---

## 5. Features

### 5.1 Navigation

- Sticky header that becomes translucent on scroll
- Smooth scroll to sections
- Mobile hamburger menu with full-screen overlay
- Active section highlighting

### 5.2 Work Section

- **Repository Display**: Shows GitHub repositories in card format
- **Search Functionality**: Filter repositories by name
- **Sorting**: Sort by date (ascending/descending)
- **Pagination**: Navigate through repositories with arrow buttons
- **Responsive Grid**: Adapts to screen size

### 5.3 Contact Section

- **Contact Form**: Email validation and form submission
- **Dynamic Quotes**: Fetches random quotes from API
- **Responsive Layout**: Side-by-side on desktop, stacked on mobile

### 5.4 Theme Toggle

- Dark and light mode support
- Persistent theme preference
- Smooth transitions between themes

---

## 6. Challenges and Solutions

### 6.1 Challenge: API URL Configuration

**Problem**: The application needed to work in both development and production environments with different API URLs.

**Solution**: Implemented environment-aware API configuration that automatically detects the environment and uses the appropriate URL. This eliminated the need for manual URL changes when deploying.

### 6.2 Challenge: Mobile Responsiveness

**Problem**: Initial design was not optimized for mobile devices, causing layout issues on smaller screens.

**Solution**: 
- Implemented responsive breakpoints using TailwindCSS
- Created mobile hamburger menu
- Adjusted card layouts to stack vertically on mobile
- Made text sizes and spacing responsive

### 6.3 Challenge: CORS Issues

**Problem**: Frontend and backend were deployed on different domains, causing CORS errors.

**Solution**: Configured CORS middleware in Express to allow requests from the frontend domain. Also ensured proper headers were set for API responses.

### 6.4 Challenge: API Rate Limiting

**Problem**: External APIs (especially free tiers) have rate limits that could cause failures.

**Solution**: Implemented error handling with fallback responses. For quotes, if the API fails, a default inspirational quote is displayed instead of showing an error.

---

## 7. Testing

### 7.1 Manual Testing

The following features were tested manually:

- ✅ Navigation links and smooth scrolling
- ✅ Mobile menu functionality
- ✅ Responsive design on various screen sizes
- ✅ API calls and data display
- ✅ Form validation
- ✅ Theme toggle
- ✅ Search and sort functionality
- ✅ Pagination

### 7.2 Browser Compatibility

Tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### 7.3 Device Testing

Tested on:
- Desktop (1920x1080, 1366x768)
- Tablet (iPad, Android tablets)
- Mobile (iPhone, Android phones)

---

## 8. Deployment

### 8.1 Frontend Deployment (Vercel)

1. Connected GitHub repository to Vercel
2. Configured build settings (Vite automatically detected)
3. Set environment variables (if needed)
4. Deployed successfully

**Live URL**: https://portfolio-tan-zeta-r4pl4176to.vercel.app/

### 8.2 Backend Deployment (Render)

1. Created new Web Service on Render
2. Connected GitHub repository
3. Configured build and start commands
4. Set environment variables:
   - `QUOTE_API_KEY`
   - `GITHUB_USERNAME`
   - `PORT` (optional)

**Backend URL**: https://assignment-4-4xu4.onrender.com

### 8.3 Deployment Challenges

- **Issue**: Backend would sleep after inactivity (free tier limitation)
- **Solution**: Implemented proper error handling and user feedback for when backend is unavailable

---

## 9. Performance Optimization

### 9.1 Frontend Optimizations

- Used `useMemo` for expensive computations
- Implemented `useCallback` for event handlers
- Lazy loading of components (where applicable)
- Optimized images and assets
- Code splitting with Vite

### 9.2 Backend Optimizations

- Efficient API calls with proper error handling
- Caching considerations for future improvements
- Minimal dependencies for faster startup

---

## 10. Future Improvements

1. **Backend Caching**: Implement caching for API responses to reduce external API calls
2. **Loading States**: Add skeleton loaders for better UX during API calls
3. **Error Boundaries**: Implement React error boundaries for better error handling
4. **Unit Tests**: Add comprehensive unit tests using Jest and React Testing Library
5. **Accessibility**: Improve ARIA labels and keyboard navigation
6. **SEO**: Add meta tags and structured data for better SEO
7. **Analytics**: Integrate analytics to track user interactions
8. **Contact Form Backend**: Implement actual email sending functionality

---

## 11. Learning Outcomes

Through this project, I learned:

1. **React Hooks**: Deep understanding of useState, useEffect, useMemo, and useCallback
2. **API Integration**: How to integrate external APIs and handle responses
3. **Responsive Design**: Best practices for mobile-first responsive design
4. **Deployment**: Process of deploying both frontend and backend applications
5. **Environment Configuration**: Managing different environments (dev/prod)
6. **Error Handling**: Implementing robust error handling in both frontend and backend
7. **Modern Build Tools**: Working with Vite and understanding modern build processes
8. **CSS Frameworks**: Utilizing TailwindCSS for rapid UI development

---

## 12. Conclusion

This portfolio website project successfully demonstrates modern web development practices, including React development, API integration, responsive design, and deployment. The project meets all requirements and provides a solid foundation for future enhancements.

The experience gained from this project has significantly improved my understanding of full-stack web development, from frontend React components to backend Express servers, and the deployment process for both.

### 12.1 Project Statistics

- **Total Components**: 8 React components
- **API Endpoints**: 2 backend endpoints
- **External APIs**: 2 (GitHub, API Ninjas)
- **Lines of Code**: ~2000+ lines
- **Development Time**: Approximately 2-3 weeks
- **Deployment Platforms**: 2 (Vercel, Render)

---

## 13. References

- React Documentation: https://react.dev/
- Vite Documentation: https://vitejs.dev/
- TailwindCSS Documentation: https://tailwindcss.com/
- GSAP Documentation: https://greensock.com/docs/
- Express.js Documentation: https://expressjs.com/
- GitHub API Documentation: https://docs.github.com/en/rest
- API Ninjas Documentation: https://api-ninjas.com/

---

**End of Report**


# 🚀 React Hero App

A dynamic and responsive single-page web application built with **React** and **Tailwind CSS**, designed to showcase and manage apps with interactive features such as installation tracking, live search, sorting, and detailed analytics visualization.

---

## 📋 Description

**React Hero App** is a modern app-listing platform that mimics an app store experience. It allows users to browse, search, and explore various apps, view detailed analytics, and manage installations directly from their browser.

The project demonstrates solid frontend engineering practices using **React Router**, **Recharts**, and **localStorage**, offering smooth navigation, clean UI, and real-time feedback through toasts and animations.

Users can:
- View featured apps and download statistics  
- Search for apps dynamically  
- Sort and filter based on download count  
- Install or uninstall apps with persistent storage  
- Explore individual app details including charts and reviews  
- Navigate seamlessly through animated transitions  
- Experience custom error and loading states  

---

## 🧱 Features & Functionality

### 🌐 Layout & Navigation
- Responsive **Header** with logo navigation and active route highlighting  
- **Navigation bar** with routes: `Home`, `Apps`, `Installation`  
- **Contribution button** linking directly to the developer’s GitHub profile  
- Creative and modern **Footer** section  

### 🏠 Home Page
- Central **Banner** with “App Store” and “Play Store” buttons  
- **Stats Section** with key app metrics  
- **Top Apps Section** displaying 8 featured apps  
- “Show All” button to navigate to the All Apps page  

### 📱 All Apps Page
- Live **search bar** filtering apps by name (case-insensitive)  
- Displays total app count dynamically  
- Clean **card grid layout** for all apps  
- “No App Found” message for unmatched searches  

### 📊 App Details Page
- Comprehensive app information including:
  - Image, Title, Rating, Downloads, Reviews  
  - Install button with dynamic state (“Install Now” → “Installed”)  
- Installation saved in **localStorage**  
- **Responsive Bar Chart** built using Recharts to visualize rating data  
- App description and related details section  

### 💾 My Installation Page
- Displays all user-installed apps  
- “Uninstall” button to remove apps from UI and localStorage  
- Sort by downloads (High-Low / Low-High)  
- Toast notifications for every user action  

### ⚙️ Additional Features
- Persistent data using **localStorage**  
- **Loading animations** during navigation and search  
- Custom **Error Page** for invalid routes  
- Smooth UI transitions and interactive feedback  

---

## 🧰 Technologies Used

| Category | Technologies |
|-----------|--------------|
| **Frontend Framework** | React (v19) |
| **Styling** | Tailwind CSS, DaisyUI |
| **Routing** | React Router (v7) |
| **Charts** | Recharts |
| **UI Icons** | Lucide React |
| **Notifications** | SweetAlert2 |
| **Build Tool** | Vite |
| **Linting** | ESLint |

---

## ⚡ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SuvroBiswas93/react-hero-app.git

    --Navigate to the project directory

     cd react-hero-app


    --Install dependencies

        npm install


    --Run the development server

        npm run dev


    --Open the app in your browser

        http://localhost:5173
    
    ```

    ---
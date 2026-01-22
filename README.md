🧑‍💻 Coworking Space Finder

A Location-Based Coworking Discovery Platform

📌 Project Overview

The Coworking Space Finder is a modern, map-based web application that helps users discover nearby coworking spaces using geolocation.
The platform is inspired by real-world systems like LooLocate and Coworker.com, and is being developed incrementally using industry-standard practices.

The current implementation focuses on location-based discovery, user experience, and frontend–backend integration, laying a strong foundation for dashboards, bookings, and authentication in later phases.

🎯 Objectives Achieved So Far

Build a location-aware coworking discovery system

Implement map-based visualization

Design a scalable frontend architecture

Develop a TypeScript backend with geospatial support

Ensure the project is PWA-ready and production-oriented

🧱 Tech Stack
Frontend

React (Vite)

TypeScript

Leaflet + OpenStreetMap

React Router

Context API

PWA (vite-plugin-pwa)

Backend

Node.js

Express

TypeScript

MongoDB

Mongoose (GeoJSON + 2dsphere index)

Tooling

Nodemon

ts-node

dotenv

Git & GitHub

🗺️ Features Implemented (Till Now)
1️⃣ Location-Based Coworking Discovery

User’s current location is fetched via browser Geolocation API

Nearby coworking spaces are fetched using MongoDB geospatial queries

Map rendered using Leaflet + OpenStreetMap

2️⃣ Geospatial Backend (Completed)

Coworking spaces stored using GeoJSON Point

2dsphere index enabled for efficient querying

REST API:

GET /api/spaces/nearby?lat=…&lng=…

3️⃣ Distance Calculation

Distance between user and coworking space calculated using Haversine formula

Displayed in kilometers (e.g., “2.4 km away”)

4️⃣ Marker Color Based on Availability

🟢 Green → Seats available

🟡 Yellow → Limited seats

🔴 Red → Fully occupied

This provides instant visual feedback on availability.

5️⃣ Favorites (localStorage)

Users can mark coworking spaces as ❤️ favorites

Favorites persist using browser localStorage

Dedicated favorites page implemented

6️⃣ Dark Mode

Global light/dark theme using React Context

Theme preference saved in localStorage

Leaflet popups styled for dark mode

7️⃣ Reviews UI + Fake Review Badge (Frontend)

Star-based rating system

Review list and submission form

Suspicious reviews visually flagged using a ⚠️ badge

UI is ML-ready for fake review detection integration

8️⃣ Progressive Web App (PWA)

Installable on desktop and mobile

Offline caching enabled

App-like fullscreen experience

Auto-update service worker

9️⃣ Frontend ↔ Backend Integration

Frontend successfully consumes backend APIs

CORS handled

Real-time data rendered on map

Backend verified independently via browser/Postman

🔟 Database Seeding

Seed script added for realistic coworking-style data

Includes:

Pricing

Amenities

Availability

Reviews (fake & genuine)

Realistic geo-coordinates

🧪 How to Run the Project (Current State)
Backend
cd server
npm install
npm run dev

Seed Database
npm run seed

Frontend
cd client
npm install
npm run dev

📂 Project Structure (Simplified)
coworker/
├── client/        # React + TypeScript frontend
│   ├── components
│   ├── pages
│   ├── utils
│   └── context
│
├── server/        # Express + TypeScript backend
│   ├── models
│   ├── controllers
│   ├── routes
│   ├── seed
│   └── config

🧠 Current Status

✅ Backend location module completed
✅ Frontend core UX completed
✅ Map, availability, reviews, favorites working
⏳ Dashboards, authentication, and bookings pending

🚀 Next Planned Features

Global Layout (Navbar + Footer)

Public Pages (About, How It Works)

Owner Dashboard (Add & manage spaces)

Authentication & Role Management

Booking System

Fake Review ML API integration

Deployment (Vercel + Render)

📌 Academic Relevance

This project demonstrates:

Full-stack development

Geospatial database design

Scalable frontend architecture

Progressive Web App implementation

Real-world problem-solving inspired by industry platforms

👨‍💻 Author

Swaraj
Final Year Engineering Student
Project inspired by LooLocate & Coworker.com
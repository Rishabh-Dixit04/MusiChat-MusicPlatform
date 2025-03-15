<p align="center">
    <img src="./frontend/public/MusiChat_Logo.png" alt="MusiChat logo">
</p>

# MusiChat

### [MusiChat Website](https://musichat-musicplatform.onrender.com)

## An interactive music platform with real-time streaming, uploads, and an integrated live chat for seamless user interaction.

Welcome to **MusiChat**! This project is an innovative and feature-rich music streaming platform that brings your favorite tunes to your fingertips. Deployed online for easy access, MusicPlatform offers a seamless and enjoyable music experience. Connect with friends who share your music taste, see what they’re listening to in real-time, and enjoy live chat while vibing to your favorite tracks!

## Key Features

- Seamless playback controls for uninterrupted listening
- Effortlessly play next and previous songs
- Smooth slider for adjustable volume
- Admin dashboard for managing albums and songs
- Integrated real-time chat within the platform
- Online/offline status indicators for users
- See what other users are listening to in real-time
- Analytics page with aggregate data insights
- And much more...


## Tools and Dependencies

MusiChat is built using the following technologies and libraries:

### Frontend
- **React.js**: Interactive and dynamic UI
- **ShadCN**: Pre-built UI components for a sleek design
- **Lucide-react**: Modern icons for better aesthetics
- **Tailwind CSS**: Utility-first styling for a responsive layout
- **Axios**: Handles HTTP requests efficiently

### Backend
- **Node.js & Express.js**: Server-side logic for handling music, authentication, and user interactions
- **MongoDB**: Stores user data, songs, and chat messages

### Real-Time Features
- **Socket.io**: Enables live chat, real-time song activity, and user presence tracking

### External Services
- **Clerk**: Secure user authentication and management
- **Cloudinary**: Cloud-based storage and delivery for media files

## Setup .env file in _backend_ folder

```bash
PORT=...
MONGODB_URI=...
ADMIN_EMAIL=...
NODE_ENV=...

CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLOUDINARY_CLOUD_NAME=...


CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

## Setup .env file in _frontend_ folder

```bash
VITE_CLERK_PUBLISHABLE_KEY=...
```

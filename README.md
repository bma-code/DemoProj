# Hello World Node.js App

A simple Hello World application built with Node.js and Express.js that serves a beautiful interactive web interface.

## Features

- Express.js server serving static files
- Interactive web interface with modern design
- API endpoints for greetings
- Random greeting generator
- Glassmorphism UI design with smooth animations

## Project Structure

```
DemoProj/
├── server.js          # Main Express server
├── package.json       # Node.js dependencies and scripts
├── public/            # Static files served by Express
│   ├── index.html     # Main HTML page
│   ├── style.css      # Styling with modern effects
│   └── script.js      # Client-side JavaScript
└── README.md          # This file
```

## Installation

1. Install Node.js dependencies:
```bash
npm install
```

## Running the Application

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at: http://localhost:3000

## API Endpoints

- `GET /` - Serves the main HTML page
- `GET /api/greetings` - Returns all available greetings
- `GET /api/greeting/random` - Returns a random greeting

## Usage

1. Open your browser to http://localhost:3000
2. Click the "Change Greeting" button to get random greetings from the server
3. Enjoy the smooth animations and modern design!

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Design**: Glassmorphism, CSS Grid/Flexbox, CSS Animations
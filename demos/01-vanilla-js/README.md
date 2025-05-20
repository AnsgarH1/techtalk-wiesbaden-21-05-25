# Vanilla JS Lunchfinder Demo

This is a pure vanilla JavaScript implementation of the Wiesbaden Lunchfinder application.

## How to Run

Since this is a pure vanilla JavaScript application without a build system, you can simply:

1. Open the `index.html` file in your browser
2. Or serve it using any simple HTTP server

### Using a simple HTTP server

If you have Python installed:
```
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Or if you have Node.js installed:
```
npx serve
```

Then open your browser and navigate to `http://localhost:8000` or whatever port your server is using.

## Features

- Select your office location
- View nearby lunch places sorted by distance
- See details like cuisine type, distance, dietary options, payment methods
- Click on addresses to open Google Maps directions

## API Requirements

The application requires the backend API to be running at `http://localhost:4002/api`.
Make sure the API server is running before using this application. 
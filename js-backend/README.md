# js-backend

This project is a backend service built with Node.js and Express that sends periodic API calls to a Vercel server. The service collects feature data from a Lua script and sends it every 5 seconds.

## Project Structure

```
js-backend
├── src
│   ├── index.js          # Entry point of the application
│   ├── api
│   │   └── apiCall.js    # Handles API calls to the Vercel server
│   ├── config
│   │   └── config.js     # Configuration settings for the application
│   └── utils
│       └── featureData.js # Retrieves feature data for API calls
├── package.json           # NPM configuration file
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd js-backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables, such as the API endpoint URL.

## Usage

To start the server, run:
```
npm start
```

The server will begin sending API calls to the specified Vercel endpoint every 5 seconds with the current feature data.

## Features

- Periodic API calls to a Vercel server
- Data collection from a Lua script
- Configurable API endpoint via environment variables

## License

This project is licensed under the MIT License.
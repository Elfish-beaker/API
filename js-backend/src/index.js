const express = require('express');
const { sendApiCall } = require('./api/apiCall');
const { getFeatureData } = require('./utils/featureData');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Start sending API calls every 5 seconds
setInterval(() => {
    const featureData = getFeatureData();
    sendApiCall(featureData);
}, 5000);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
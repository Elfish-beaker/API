import { Players, Utils, Cherax } from 'your-library'; // Adjust the import based on your actual library
import axios from 'axios'; // Assuming you are using axios for the API call

export async function getFeatureData(i) {
    const NetGamePlayer = Players.GetById(i);
    const GamerInfo = NetGamePlayer.GetGamerInfo() || {};
    const rid = Number(GamerInfo.RockstarId || "Invalid");

    const target = Utils.GetSelectedPlayer(); // Replace with actual function for tracking targets
    const uid = Cherax.GetUID();
    const data = {
        featureUsed: "vehiclespam",
        uid: uid,
    };

    try {
        const response = await axios.post("https://api-chi-seven-91.vercel.app/", data);
        return response.data;
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
}
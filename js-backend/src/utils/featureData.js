import { FeatureMgr } from 'your-feature-manager-library'; // Adjust the import based on your actual feature manager library

export function getFeatureData() {
    const features = FeatureMgr.GetAllFeatures();
    const featureData = features.map(feature => ({
        id: feature.id,
        name: feature.name,
        isEnabled: feature.isEnabled(),
        description: feature.description,
    }));

    return {
        timestamp: new Date().toISOString(),
        features: featureData,
    };
}
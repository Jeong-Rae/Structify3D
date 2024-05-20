"use client";

// components/modelviewer/modelViewContainer.jsx

import ModelViewer from "@/components/modelviewer/ModelViewer";

export const ModelViewContainer = ({ modelUrl }) => {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <ModelViewer modelUrl={modelUrl} />
        </div>
    );
};

export default ModelViewContainer;

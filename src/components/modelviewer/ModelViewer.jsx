"use client";
// components/modelviewer/ModelViewer.jsx

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    useGLTF,
    Environment,
    Grid,
    Html,
} from "@react-three/drei";
import LoadingSpinner from "@/components/spinner/LoadingSpinner";

function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl }) {
    return (
        <Canvas
            style={{ background: "#d3d3d3", width: "100%", height: "100%" }}
            camera={{ position: [1, 1, 1], fov: 5 }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense
                fallback={
                    <Html center>
                        <LoadingSpinner />
                    </Html>
                }
            >
                <Model url={modelUrl} />
                <Environment preset="studio" />
                <Grid
                    position={[0, 0, 0]}
                    args={[10, 10]}
                    cellSize={1}
                    cellThickness={1}
                    cellColor="#e0e0e0"
                    sectionSize={1}
                    sectionThickness={2}
                    sectionColor="#b0b0b0"
                    fadeDistance={30}
                    fadeStrength={1}
                    followCamera={false}
                />
            </Suspense>
            <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
            />
        </Canvas>
    );
}

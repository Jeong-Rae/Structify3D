"use client";
// components/ModelViewer.js

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Grid } from "@react-three/drei";

function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

export default function ModelViewer() {
    const modelUrl = "/model/scene.gltf";

    return (
        <Canvas style={{ background: "#d3d3d3" }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Model url={modelUrl} />
                <Environment preset="studio" />
                <Grid
                    position={[0, 0, 0]}
                    args={[10, 10]} // size and divisions of the grid
                    cellSize={1} // size of each cell in the grid
                    cellThickness={1} // thickness of the grid lines
                    cellColor="#e0e0e0" // color of the grid lines
                    sectionSize={1} // size of the major sections
                    sectionThickness={2} // thickness of the major section lines
                    sectionColor="#b0b0b0" // color of the major section lines
                    fadeDistance={30} // distance at which the grid fades out
                    fadeStrength={1} // strength of the grid fading
                    followCamera={false} // if true, the grid will follow the camera
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
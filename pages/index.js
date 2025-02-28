import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Modale } from "../components/modale";

function index() {
  return (
    <div style={{ height: '80vh', width: '80vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas>
        <Environment preset="sunset" />
        <OrbitControls />
        <Modale />
      </Canvas>
    </div>
  );
}

export default index;

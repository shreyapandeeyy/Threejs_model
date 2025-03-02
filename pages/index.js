import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Modale } from "../components/modale";
import { Sky } from "../components/Sky";

function index() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Canvas>
        <Environment preset="sunset" />
        <OrbitControls />
        <Sky />
        <Modale />
      </Canvas>
    </div>
  );
}

export default index;

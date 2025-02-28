import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Modale } from "../components/modale";

function index() {
  return (
    <div className="h-[120vh] w-[120vw]">
      <Canvas>
        <Environment preset="sunset" />
        <OrbitControls />
        <Modale />
      </Canvas>
    </div>
  );
}

export default index;

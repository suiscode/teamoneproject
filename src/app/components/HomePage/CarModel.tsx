"use client";

import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, useGLTF } from "@react-three/drei";

function Model(props: any) {
  const { scene } = useGLTF("/mercedes.glb");
  return <primitive object={scene} {...props} />;
}

export default function CarModel() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 10 }}
      style={{
        width: "100%",
        height: "100%",
        opacity: "2",
      }}
    >
      <ambientLight intensity={1} />

      <PresentationControls
        speed={1.5}
        global
        polar={[-1, Math.PI / 4]}
        rotation={[0.2, -0.8, 0]}
      >
        <Stage>
          <Model />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

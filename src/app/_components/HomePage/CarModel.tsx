"use client";

import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls, useGLTF } from "@react-three/drei";

function Model(props: any) {
  const { scene } = useGLTF(
    "https://pub-9e4a462638ff4a6e89664b9e0dd86ca5.r2.dev/redbenz.glb"
  );
  return <primitive object={scene} {...props} />;
}

export default function CarModel() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 10 }}
      style={{
        width: "60%",
        height: "100%",
        opacity: "1",
      }}
    >
      <ambientLight intensity={1} />

      <PresentationControls
        speed={1.5}
        global
        polar={[-1, Math.PI / 4]}
        rotation={[0.1, -0.8, 0]}
      >
        <Stage>
          <Model />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

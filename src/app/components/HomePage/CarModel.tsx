"use client";

import { Canvas } from "@react-three/fiber";
import {
  Stage,
  PresentationControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
// import { Mercedes } from "../../public/Mercedes";

function Model(props: any) {
  const { scene } = useGLTF("/bmw.glb");
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
        // backgroundColor: "#54a6ff",
        opacity: "2",
        borderRadius: "13px",
      }}
    >
      <ambientLight intensity={2} />

      <Environment preset="forest" />
      <PresentationControls
        speed={1.5}
        global
        polar={[-1, Math.PI / 4]}
        rotation={[0.3, 4, 0]}
      >
        <Stage>
          <Model />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

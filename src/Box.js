import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

function Box({ position, args }) {
  const mesh = useRef(null);

  useFrame(({ mouse }) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });
  return (
    <>
      <mesh ref={mesh} position={position} castShadow>
        <boxGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          attach="material"
          factor={1}
          speed={3}
          color={"red"}
        />
      </mesh>
    </>
  );
}

export default Box;

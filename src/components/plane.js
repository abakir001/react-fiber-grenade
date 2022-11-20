import React from "react";

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[200, 200]} />
    <meshStandardMaterial attach="material" color="lightblue" />
  </mesh>
);

export default Plane;

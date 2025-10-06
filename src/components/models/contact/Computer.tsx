import { useGLTF } from "@react-three/drei";
import { JSX } from "react";
import * as THREE from "three";

export function Computer(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube000_ComputerDesk_0001_1 as THREE.Mesh)?.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube000_ComputerDesk_0001_2 as THREE.Mesh)?.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;

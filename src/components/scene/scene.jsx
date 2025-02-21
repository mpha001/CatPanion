import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { SpotLightHelper } from "three";
import "./scene.scss";
import Tools from "../../components/tools/tools";

function Bedroom() {
  const fbx = useLoader(FBXLoader, "/bedroom.fbx");
  useEffect(() => {
    return () => fbx.dispose();
  }, [fbx]);
  return <primitive object={fbx} scale={0.005} position={[0, 0, 0]} />;
}

function Cat() {
  const cat = useLoader(FBXLoader, "/smesh_cat3.fbx");

  useEffect(() => {
    return () => cat.dispose();
  }, [cat]);
  return <primitive object={cat} scale={0.005} position={[4.7, 0.5, 3]} />;
}

// function SpotLightWithHelper() {
//   const spotLightRef = useRef();
//   useHelper(spotLightRef, SpotLightHelper, "red");

//   return <spotLight ref={spotLightRef} position={[10, 5, 10]} angle={0.5} penumbra={0.3} intensity={100} castShadow={true} />;
// }

function Scene() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={8} />
        <pointLight position={[1, 10, 1]} intensity={1} />
        {/* <SpotLightWithHelper /> */}

        <PerspectiveCamera makeDefault position={[10, 7, 10]} near={0.1} far={500} zoom={1.2} />

        <Suspense
          fallback={
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color='black' />
            </mesh>
          }
        >
          <Bedroom />
        </Suspense>

        <Suspense
          fallback={
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color='white' />
            </mesh>
          }
        >
          <Cat />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Scene;

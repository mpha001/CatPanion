import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useHelper, useAnimations, useGLTF } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SpotLightHelper } from "three";
import "./scene.scss";

// function SpotLightWithHelper() {
//   const spotLightRef = useRef();
//   useHelper(spotLightRef, SpotLightHelper, "red");

//   return <spotLight ref={spotLightRef} position={[10, 5, 10]} angle={0.5} penumbra={0.3} intensity={100} castShadow={true} />;
// }

function Scene() {
  function Bedroom() {
    const fbx = useLoader(FBXLoader, "/bedroom.fbx");
    return <primitive object={fbx} scale={0.005} position={[0, 0, 0]} />;
  }

  function Cat(props) {
    // Load the GLTF model and animations
    const { scene, animations } = useGLTF("/cat3.gltf");

    // Get the actions and names using useAnimations hook
    const { ref, actions, names } = useAnimations(animations);
    const [index, setIndex] = useState(0);
    const exceptIndexes = [0, 3, 6, 7];

    // Debugging: Log available animation names to check for the correct one
    useEffect(() => {
      console.log("animation names:", names);
      // Logs the available animation names
    }, [names]);

    useEffect(() => {
      if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        setIndex(randomIndex); // Set a random index
      }
    }, [names]);

    // Play animation whenever index changes
    useEffect(() => {
      const validIndexes = names
        .map((_, i) => i) // Create an array of all indexes
        .filter(i => !exceptIndexes.includes(i));
      if (validIndexes.length > 0) {
        setIndex(validIndexes[Math.floor(Math.random() * validIndexes.length)]);
      }
      console.log(validIndexes);
      console.log(names[index] && actions[names[index]] && !exceptIndexes.includes(index));

      if (validIndexes.includes(index) && actions[names[index]]) {
        Object.values(actions).forEach(action => action.stop());
        console.log(`🎬 Playing animation: ${names[index]}`);
        actions[names[index]].fadeIn(0.5).play();
      } else {
        console.log("skipping animation");
      }

      let lastTime = Date.now();

      const interval = setInterval(() => {
        let currentTime = Date.now();
        let intervalTime = ((currentTime - lastTime) / 1000).toFixed(2); // Time in seconds

        console.log(`${intervalTime}s`);
        if (Math.random() * 10 > 5) {
          setIndex(prevIndex => (prevIndex + 1) % names.length && !exceptIndexes.includes(index));
        }
      }, 5000);

      return () => {
        clearInterval(interval);
        if (names[index] && actions[names[index]]) {
          actions[names[index]].fadeOut(2);
        }
      };
    }, [index, actions, names]);

    return (
      <group ref={ref} {...props} dispose={null}>
        <primitive object={scene} scale={0.3} position={[4.7, 0.5, 4]} />
        {/* <primitive object={scene} scale={0.3} position={randomPosition} /> */}
      </group>
    );
  }

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

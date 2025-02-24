import { useState, Suspense, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import "./scene.scss";

function Scene() {
  function Bedroom() {
    const fbx = useLoader(FBXLoader, "/bedroom.fbx");
    return <primitive object={fbx} scale={0.005} position={[0, 0, 0]} />;
  }

  function Cat(props) {
    const { scene, animations } = useGLTF("/cat3.gltf");
    const { ref, actions, names } = useAnimations(animations);
    const [index, setIndex] = useState(0);
    const exceptIndexes = [0, 3, 6, 7];

    useEffect(() => {
      if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        setIndex(randomIndex);
      }
    }, [names]);

    useEffect(() => {
      const validIndexes = names
        .map((_, i) => i)
        .filter((i) => !exceptIndexes.includes(i));
      if (validIndexes.length > 0) {
        setIndex(validIndexes[Math.floor(Math.random() * validIndexes.length)]);
      }
      if (validIndexes.includes(index) && actions[names[index]]) {
        Object.values(actions).forEach((action) => action.stop());
        actions[names[index]].fadeIn(0.5).play();
      }

      const interval = setInterval(() => {
        if (Math.random() * 10 > 5) {
          setIndex(
            (prevIndex) =>
              (prevIndex + 1) % names.length && !exceptIndexes.includes(index)
          );
        }
      }, 3000);

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
      </group>
    );
  }

  return (
    <>
      <Canvas>
        <ambientLight intensity={8} />
        <pointLight position={[1, 10, 1]} intensity={1} />
        <PerspectiveCamera
          makeDefault
          position={[10, 7, 10]}
          near={0.1}
          far={500}
          zoom={1.2}
        />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="black" />
            </mesh>
          }
        >
          <Bedroom />
        </Suspense>
        <Suspense
          fallback={
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="white" />
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

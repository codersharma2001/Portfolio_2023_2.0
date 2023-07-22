import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  if (isMobile) {
    return null; // Don't render the mesh for mobile devices
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
         position={[-20 , 50 , 10]}
         angle={0.12}
         penumbra={1}
         intensity={1}
         castShadow
         shadow-mapSize = {1024}
      />
      <primitive
        object={computer.scene}
        scale={1}
        position={[2, -3.25, -1.5]}
        rotation={[-0.5, -5 , 0.8]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
   const [isMobile , setIsMobile] = useState(false);

   useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
   }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
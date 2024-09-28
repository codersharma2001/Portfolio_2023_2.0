import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useFrame(() => {
    // Automatically rotate the object if not dragging
    if (!isDragging) {
      computer.scene.rotation.y += 0.01;
    }

    // If dragging, update the position of the 3D object based on mouse
    if (isDragging) {
      const x = (mousePosition.x / window.innerWidth) * 2 - 1;
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1;

      computer.scene.position.x = x * 5; // Adjust multiplier to control range of movement
      computer.scene.position.y = y * 3; // Adjust multiplier to control range of movement
    }
  });

  if (isMobile) {
    return null; // Don't render the mesh for mobile devices
  }

  return (
    <mesh
      onClick={() => console.log("Object clicked!")}
      onPointerOver={() => {
        computer.scene.rotation.y += 0.05;
        computer.scene.position.z += 0.1;
      }}
      onPointerOut={() => {
        computer.scene.rotation.y -= 0.05;
        computer.scene.position.z -= 0.1;
      }}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={1}
        position={[2, -3.25, -1.5]}
        rotation={[-0.5, -5, 0.8]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
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

import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import lottie from "lottie-web";
import animationData from "../assets/avatar.json"; // Ensure this file is valid

const Avatar3D = () => {
  const { scene } = useGLTF("/models/avatar.glb"); // Load the 3D avatar model
  const avatarRef = useRef();
  const animationContainer = useRef(null);

  useEffect(() => {
    console.log("Animation Data:", animationData); // Debugging statement
    if (animationData && Array.isArray(animationData.layers)) {
      if (animationContainer.current) {
        try {
          const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData, // Lottie animation data
          });

          return () => anim.destroy(); // Cleanup animation on unmount
        } catch (error) {
          console.error("Lottie animation failed to load:", error);
        }
      }
    } else {
      console.error("Invalid animation data:", animationData);
    }
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2 className="text-primary mb-3">AI Avatar 3D Model</h2>

      {/* Lottie Animation */}
      <div ref={animationContainer} style={{ width: "100%", height: "200px" }} />

      {/* 3D Avatar Canvas */}
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ width: "100%", height: "400px", background: "#f8f9fa", borderRadius: "10px" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <OrbitControls enableZoom enableRotate enablePan />
        <primitive object={scene} ref={avatarRef} scale={2} position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
};

export default Avatar3D;

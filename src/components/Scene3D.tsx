// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import type { Mesh } from "three";

// function AnimatedSphere() {
//   const meshRef = useRef<Mesh>(null);

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
//     }
//   });

//   return (
//     <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
//       <MeshDistortMaterial
//         color="#016B61"
//         attach="material"
//         distort={0.4}
//         speed={2}
//         roughness={0.2}
//         metalness={0.8}
//       />
//     </Sphere>
//   );
// }

// export function Scene3D() {
//   return (
//     <div className="w-full h-full">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[10, 10, 5]} intensity={1} />
//         <pointLight position={[-10, -10, -5]} intensity={0.5} color="#70B2B2" />
//         <AnimatedSphere />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>
//     </div>
//   );
// }


import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";
import type { Mesh } from "three";

function ImageCube() {
  const meshRef = useRef<Mesh>(null);

  // 🖼️ Load 6 image textures (front, back, top, bottom, left, right)
  const [
    front,
    back,
    top,
    bottom,
    left,
    right,
  ] = useLoader(TextureLoader, [
    "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg", // front
    "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg", // front
    "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg", // front
    "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg", // front
    "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?cs=srgb&dl=pexels-olly-846741.jpg&fm=jpg", // front
  //  "",// frontg

    // "https://img.freepik.com/free-photo/portrait-casual-guy-posing-studio_176420-28917.jpg?semt=ais_hybrid&w=740&q=80", // back
    // "https://media.istockphoto.com/id/1034931508/photo/cheerful-man-with-mobile-phone-looking-up.jpg?s=612x612&w=0&k=20&c=330zFV1Ra4CK84EAvdiIweW_Q1yD08fElkisiXDpC4c=", // top
    // "https://img.freepik.com/premium-photo/redhead-man-brown-wall-with-shocked-facial-expression_1368-37556.jpg", // bottom
    // "https://img.freepik.com/free-photo/joyful-young-handsome-man-looking-camera-keeping-hands-forehead-yellow-background_141793-131002.jpg", // left
    // "https://img.freepik.com/free-photo/impressed-young-handsome-guy-wearing-black-shirt-points-up-isolated-yellow-wall_141793-87195.jpg?semt=ais_hybrid&w=740&q=80", // right
  ]);

  // 🌀 Smooth rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
      {/* Cube geometry */}
      <boxGeometry args={[2, 2, 2]} />
      {/* Six faces (order matters: +x, -x, +y, -y, +z, -z) */}
      {[
        right, // +x
        left,  // -x
        top,   // +y
        bottom,// -y
        front, // +z
        back,  // -z
      ].map((texture, i) => (
        <meshStandardMaterial
          key={i}
          attach={`material-${i}`}
          map={texture}
          roughness={0.4}
          metalness={0.3}
        />
      ))}
    </mesh>
  );
}

export function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Lighting for realism */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -3]} intensity={0.5} />

        {/* 3D Cube */}
        <ImageCube />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}



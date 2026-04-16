import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import starTexture from "../assets/images/star.png";

function Galaxy({ color = "#38bdf8", size = 0.5, opacity = 0.7 }) {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  const starCount = 1500;

  // ⭐ cargar textura (DENTRO del componente)
  const texture = useLoader(TextureLoader, starTexture);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ⭐ generar posiciones UNA sola vez
  const positions = useMemo(() => {
    const pos = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }

    return pos;
  }, []);

  // ⭐ animación suave
  useFrame(() => {
    if (!ref.current) return;

    const { x, y } = mouse.current;

    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0003;

    const targetRotationY = x * 0.2;
    const targetRotationX = y * 0.2;

    ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.02;
    ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.02;

    ref.current.position.x += (x * 2 - ref.current.position.x) * 0.05;
    ref.current.position.y += (y * 2 - ref.current.position.y) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      {/* 🌟 material con textura + glow */}
      <pointsMaterial
        map={texture}
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function GalaxyBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* fondo oscuro */}
      <color attach="background" args={["#0f172a"]} />

      {/* 🌌 capa principal */}
      <Galaxy />

      {/* 🌌 capa secundaria (profundidad) */}
      <Galaxy color="#6366f1" size={0.3} opacity={0.4} />
    </Canvas>
  );
}
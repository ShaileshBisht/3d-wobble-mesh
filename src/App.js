import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./App.css";
import Box from "./Box";
import Plane from "./Plane";
import { OrbitControls, Stars, softShadows } from "@react-three/drei";

softShadows();

function App() {
  return (
    <div className="App">
      <div className="canvas1">
        <Canvas colorManagment shadows>
          <Stars />
          <ambientLight intensity={0.3} />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />

          <Box position={[-5, 1, -2]} args={[1, 1, 1]} />
          <Box position={[0, 1, 0]} args={[4, 2, 1]} />
          <Box position={[5, 1, -2]} args={[1, 1, 1]} />
          <Plane />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="text">
        <h1>Three.js </h1>
      </div>
    </div>
  );
}

export default App;

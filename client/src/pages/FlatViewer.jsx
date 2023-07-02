import { Canvas, useFrame } from '@react-three/fiber';
import {
  useMask,
  useGLTF,
  useAnimations,
  Float,
  Instance,
  Instances,
  CameraControls,
} from '@react-three/drei';
import {
  Lightformer,
  Environment,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from '@react-three/drei';

import CanvasModel from '../canvas/Canvas.jsx';

import Model from '../components/3dProperty';

const FlatViewer = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [12, 15, 0], fov: 35, near: 1, far: 50 }}>
      <color attach='background' args={['#c6e5db']} />
      {/** Glass aquarium */}

      <Model position={[0, 0, 0]} rotation={[0, 1, 0]} scale={1} />

      {/** Soft shadows */}
      <AccumulativeShadows
        temporal
        frames={100}
        color='lightblue'
        colorBlend={2}
        opacity={0.7}
        scale={60}
        position={[0, -5, 0]}>
        <RandomizedLight
          amount={8}
          radius={15}
          ambient={0.5}
          intensity={1}
          position={[-5, 10, -5]}
          size={20}
        />
      </AccumulativeShadows>
      {/** Custom environment map */}
      <Environment resolution={1024}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer
              key={i}
              form='circle'
              intensity={4}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[4, 1, 1]}
            />
          ))}
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
      </Environment>
      <CameraControls
        truckSpeed={0}
        dollySpeed={0}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default FlatViewer;

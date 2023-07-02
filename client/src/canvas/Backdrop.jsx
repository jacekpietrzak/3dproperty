import React, { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import state from '../store';
import { useSnapshot } from 'valtio';

const Backdrop = () => {
  // create reference to specific shadow. We will use it later on
  const shadows = useRef();

  const snap = useSnapshot(state);

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={1}
      scale={50}
      opacity={0.25}
      color={snap.color}
      colorBlend={5}
      // rotation={[Math.PI / 2, 0, 0]}
      position={[0, -1.5, 0]}>
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.35}
        ambient={0.15}
        position={[5, 5, -5]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.35}
        ambient={0.15}
        position={[-5, 5, -5]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';
import CanvasModel from '../canvas/Canvas';

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            className='absolute w-full max-w-full h-full transition-all ease-in'
            {...fadeAnimation}>
            <CanvasModel />
          </motion.div>
          <motion.div
            className='absolute z-10 top-5 right-5'
            {...fadeAnimation}>
            <CustomButton
              type='filled'
              title='Go Back'
              handleClick={() => {
                state.intro = true;
              }}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;

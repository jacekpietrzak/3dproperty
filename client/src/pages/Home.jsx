import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import state from '../store';

import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
  fadeAnimation,
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <>
          <motion.section className='home'>
            <motion.div
              {...fadeAnimation}
              // {...headContainerAnimation}
              className='hero'>
              <Header />
              <motion.div {...headTextAnimation}>
                <h1 className='head-text'>Turning Heads with Trendy Spaces!</h1>
              </motion.div>
            </motion.div>
            <motion.div
              // {...headContentAnimation}
              // {...slideAnimation('up')}
              {...headContainerAnimation}
              className=' container flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                We believe your living space should be as vibrant and dynamic as
                your lifestyle. <br /> Dive into our collection of modern, chic
                apartments designed with young professionals in mind, <br />
                and find your perfect space to call home.
                <br />
                <strong> Explore now</strong> , and let's redefine urban living
                together!
              </p>

              <CustomButton
                type='filled'
                title='Explore now'
                handleClick={() => (state.intro = false)}
                customStyles='w-fit px-4 py-2.5 font-bold text-lg'
              />
            </motion.div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default Home;

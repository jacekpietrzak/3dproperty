import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo.svg';

import {
  slideAnimation,
  fadeAnimation,
  headContainerAnimation,
  headTextAnimation,
} from '../config/motion';

const Header = () => {
  return (
    <AnimatePresence>
      <motion.header {...slideAnimation('down')}>
        <a href='/' target='_self' className='logo'>
          <img src={logo} alt='logo' className='h-10' />
          <h1 className='font-medium text-2xl pl-3'>3D Property</h1>
        </a>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;

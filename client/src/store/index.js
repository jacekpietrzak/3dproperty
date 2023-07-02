import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  canvas: true,
  color: '#206fbe',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '',
  fullDecal: '',
});

export default state;

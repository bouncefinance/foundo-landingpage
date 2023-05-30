/// <reference types="react-scripts" />
declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module 'react-copy-to-clipboard'
declare module 'react-toastify'
declare namespace JSX {
  interface IntrinsicElements {
    "lottie-player": any;
  }
}

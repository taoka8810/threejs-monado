import * as THREE from "three";

const perspectiveCamera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
perspectiveCamera.position.set(0, 0, 3);

export { perspectiveCamera };

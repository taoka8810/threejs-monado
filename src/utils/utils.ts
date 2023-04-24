import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// orbit controls
const activateOrbitControls = (
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera
) => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
};

// resize
const resize = (
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera
) => {
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

// animate
const animate = (
  renderer: THREE.Renderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  animation?: () => void
) => {
  if (animation) {
    animation();
  }
  renderer.render(scene, camera);
  requestAnimationFrame(() => animate(renderer, scene, camera, animation));
};

export { activateOrbitControls, resize, animate };

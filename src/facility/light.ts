import * as THREE from "three";

// ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);

// directional light
const directionalLight = new THREE.DirectionalLight(0xf2b969, 10);

// point light
const pointLight = new THREE.PointLight(0xffffff, 10);

export { ambientLight, directionalLight, pointLight };

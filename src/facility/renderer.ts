import * as THREE from "three";

const canvasElem = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: canvasElem ? canvasElem : document.body,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

export { renderer };

import { renderer } from "./facility/renderer";
import { perspectiveCamera } from "./facility/camera";
import { ambientLight, pointLight } from "./facility/light";
import { scene } from "./facility/scene";
import { activateOrbitControls, resize, animate } from "./utils/utils";
import { DirectionalLightHelper, PointLightHelper } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { degToRad } from "three/src/math/MathUtils";

const init = () => {
  // facility position
  perspectiveCamera.position.set(0, 0, 5);
  pointLight.position.set(3, 3, 3);

  scene.add(ambientLight);
  scene.add(pointLight);

  // helper
  // scene.add(new THREE.AxesHelper(10));
  // scene.add(new THREE.GridHelper(20, 20));
  // scene.add(new DirectionalLightHel per(directionalLight, 0.1));
  // scene.add(new PointLightHelper(pointLight, 0.2));

  // monado
  const loader = new GLTFLoader();
  loader.load("/public/gltf/scene.gltf", (gltf) => {
    const monado = gltf.scene;
    monado.rotation.set(degToRad(270), degToRad(0), degToRad(180));
    monado.position.set(1, 0, 0);
    scene.add(monado);
  });

  // orbit controls
  // activateOrbitControls(renderer, perspectiveCamera);

  // resize
  resize(renderer, perspectiveCamera);
  window.addEventListener("resize", () => resize(renderer, perspectiveCamera));

  // rendering
  animate(renderer, scene, perspectiveCamera, () => {
    const angle = Date.now() * 0.0013; // 現在の時間から角度を計算する
    const radius = 5;
    pointLight.position.x = Math.cos(angle) * radius;
    pointLight.position.z = Math.sin(angle) * radius;

    scene.rotation.y += 0.007;
  });
};

window.addEventListener("DOMContentLoaded", init);

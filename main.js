import './style.css'

import * as THREE from 'three';

// ---INITS
// Sizes
var sizes = { width: window.innerWidth, height: window.innerHeight, };

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( sizes.width, sizes.height );
camera.position.setY(0.6);
camera.position.setZ(1.9);

// ---OBJECTS
// plane
const geometry = new THREE.PlaneGeometry(4, 4, 24, 24);
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});

const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = 0.0;
plane.position.z = 0.15;
scene.add(plane);

// ---EVENT LISTENERS
// Event listener to handle screen resize
// FROM: https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/
window.addEventListener('resize', () => {
  // Update sizes
  sizes = { width: window.innerWidth, height: window.innerHeight, };
  // sizes.width = window.innerWidth;
  // sizes.height = window.innerHeight;

  // Update camera's aspect ratio and projection matrix
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, sizes.height); // Update renderer
  // Note: We set the pixel ratio of the renderer to at most 2
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
// END FROM

// ---GAME LOOP
function animate() {
  
  
  renderer.render( scene, camera );
  requestAnimationFrame( animate );
}

animate();
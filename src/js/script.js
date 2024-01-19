import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

//renders our space where three will work
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);



// creating the scene

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(0, 2, 5);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const fbxLoader = new FBXLoader();
fbxLoader.load('./ChrisTpos.fbx')

// const image = document.getElementById('image')

// image.src = './yes.jpeg'



// const fbxLoader = new THREE.FBXLoader();

// Load the FBX file
// fbxLoader.load('../src/ChrisTpose.fbx', (fbx) => {
//     // Adjust the scale, position, or rotation if needed
//     fbx.scale.set(0.1, 0.1, 0.1);
//     fbx.position.set(0, 0, 0);
//     fbx.rotation.set(0, Math.PI / 2, 0);
  
//     // Add the FBX object to the scene
//     scene.add(fbx);
// });


renderer.render(scene, camera);
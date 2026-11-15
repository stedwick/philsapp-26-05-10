import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const canvas=document.querySelector('canvas'), status=document.querySelector('#status');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'low-power'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setClearColor(0x0b1832);renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(55,1,.01,1000);camera.position.set(0,1.48,0);
scene.add(new THREE.HemisphereLight(0xffffff,0xffffff,2));
const controls=new OrbitControls(camera,canvas);controls.target.set(0,1,-9);controls.enableDamping=false;controls.update();
const bytes=Uint8Array.from(atob(window.ISLAND_GLB),c=>c.charCodeAt(0));window.ISLAND_GLB=null;
new GLTFLoader().parse(bytes.buffer,'',model=>{scene.add(model.scene);status.textContent='Drag to orbit · scroll to zoom';render();},()=>{status.textContent='Could not load the model.';});
function render(){renderer.render(scene,camera);}
function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();render();}
controls.addEventListener('change',render);window.addEventListener('resize',resize);resize();

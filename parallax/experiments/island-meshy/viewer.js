import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const canvas=document.querySelector('canvas'), status=document.querySelector('#status');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'low-power'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setClearColor(0x0b1832);renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(40,1,.01,1000);
scene.add(new THREE.HemisphereLight(0xffffff,0xc0cad9,2.1));
const light=new THREE.DirectionalLight(0xffffff,1);light.position.set(4,8,6);scene.add(light);
const controls=new OrbitControls(camera,canvas);controls.enableDamping=false;
function render(){renderer.render(scene,camera);}
function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(40)/2)*Math.max(1,1.2/camera.aspect)));camera.updateProjectionMatrix();render();}
controls.addEventListener('change',render);window.addEventListener('resize',resize);resize();
const bytes=Uint8Array.from(atob(window.ISLAND_GLB),c=>c.charCodeAt(0));window.ISLAND_GLB=null;
new GLTFLoader().parse(bytes.buffer,'',model=>{
  scene.add(model.scene);const box=new THREE.Box3().setFromObject(model.scene),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
  const distance=Math.max(size.x,size.y,size.z)*1.8;controls.target.copy(center);camera.position.copy(center).add(new THREE.Vector3(0,distance*.14,-distance));camera.near=distance/100;camera.far=distance*20;camera.updateProjectionMatrix();controls.update();
  status.textContent='Drag to orbit · scroll to zoom';render();
},()=>{status.textContent='Could not load the model.'});

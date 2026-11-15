import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const canvas=document.querySelector('canvas'),status=document.querySelector('#status'),toggle=document.querySelector('button');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:'low-power'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setClearColor(0x0b1832);renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(55,1,.01,300);camera.position.set(0,1.48,0);camera.lookAt(0,1,-9);
scene.add(new THREE.HemisphereLight(0xffffff,0xffffff,2));
const island=new THREE.Group();island.position.set(0,0,-9);scene.add(island);
const bytes=Uint8Array.from(atob(window.ISLAND_GLB),c=>c.charCodeAt(0));window.ISLAND_GLB=null;
new GLTFLoader().parse(bytes.buffer,'',model=>{model.scene.position.z=9;island.add(model.scene);status.hidden=true;render();},()=>{status.textContent='Could not load the model.'});
const water=new THREE.Mesh(new THREE.CircleGeometry(8,48),new THREE.MeshBasicMaterial({color:0x153760,transparent:true,opacity:.8,side:THREE.DoubleSide}));water.rotation.x=-Math.PI/2;water.position.set(0,.10,-9);scene.add(water);
const rings=[];
for(let i=0;i<4;i++){const r=new THREE.Mesh(new THREE.RingGeometry(.65,.68,40),new THREE.MeshBasicMaterial({color:0x88c7e8,transparent:true,opacity:.25,side:THREE.DoubleSide,depthWrite:false}));r.rotation.x=-Math.PI/2;r.position.set(i%2?2.8:-2.8,.11,-8+(i>>1)*-3);scene.add(r);rings.push(r);}
const flameMaterial=new THREE.MeshBasicMaterial({color:0xffba45,transparent:true,opacity:.9});
const flame=new THREE.Mesh(new THREE.OctahedronGeometry(.13,0),flameMaterial);flame.position.set(-1.48,1.08,-.88);flame.scale.set(1,2.3,.75);island.add(flame);
let running=!reduced.matches,frame=0,last=0,time=0;
function render(){renderer.render(scene,camera);}
function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(55)/2)*Math.max(1,1.4/camera.aspect)));camera.updateProjectionMatrix();render();}
function tick(now){if(!running||document.hidden)return;frame=requestAnimationFrame(tick);if(now-last<1000/30)return;const dt=last?Math.min((now-last)/1000,.1):0;last=now;time+=dt;island.rotation.y=time*.06;flame.scale.y=2.1+Math.sin(time*8)*.5;flame.rotation.z=Math.sin(time*5)*.14;rings.forEach((r,i)=>{const scale=1+Math.sin(time*.8-i)*.1;r.scale.set(scale,scale,1)});render();}
function start(){cancelAnimationFrame(frame);last=0;if(running&&!document.hidden)frame=requestAnimationFrame(tick);else render();}
toggle.addEventListener('click',()=>{running=!running;toggle.textContent=running?'Pause animation':'Play animation';start()});
reduced.addEventListener('change',()=>{running=!reduced.matches;toggle.hidden=reduced.matches;start()});document.addEventListener('visibilitychange',start);window.addEventListener('resize',resize);toggle.hidden=reduced.matches;resize();start();
